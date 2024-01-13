import { LlamaCpp } from "langchain/llms/llama_cpp";

function loadLLM() {
  const modelPath = "/Users/soorajhoysal/Downloads/llama-2-7b-chat.Q2_K.gguf";
  const temperature = 0.7;
  const maxTokens = 1500;
  const topP = 1;
  // const nCtx = 2000;

  const llm = new LlamaCpp({
    modelPath: modelPath,
    temperature: temperature,
    maxTokens: maxTokens,
    topP: topP,
    verbose: true,
    // nCtx: nCtx
  });
  return llm;
}

export async function getSummary(question: string) {
  console.log("Inside getSummary");
  const llm = loadLLM();
  const finalPrompt = `Please summarize the following text: ${question} \n Don't include any thank you message in response and give the result directly`;
  const res = await llm.invoke(finalPrompt);
  console.log(res);
  return res;
}
