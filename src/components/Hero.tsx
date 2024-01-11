import React, { useEffect, useState } from "react";
import Summary from "./Summary";
import { MAX_INPUT_SIZE, rand } from "~/constants";
import { Spinner } from "@material-tailwind/react";
const Hero = () => {
  const [inputText, setInputText] = useState("");
  const [inputCount, setInputCount] = useState(0);
  const [showSummary, setShowSummary] = useState(true);
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInputCount(inputText.length);
    if (inputText.length > MAX_INPUT_SIZE || inputText.length === 0) {
      setShowSummary(false);
    } else {
      setShowSummary(true);
    }
  }, [inputText]);

  const handleSummarize = async () => {
    setLoading(true);
    const response = await fetch("/api/briefMe", {
      method: "POST",
      body: JSON.stringify({ content: inputText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    setOutputText(result.message);
    setLoading(false);
  };
  return (
    <div className="m-12 flex w-5/6 flex-col items-center rounded-xl">
      <div className="flex w-full items-center">
        <h3 className="item-left my-3 w-full text-lg">
          Paste the text here to summarise it:
        </h3>
        <p
          className={`${showSummary ? "" : "text-red-600"}`}
        >{`${inputCount}/${MAX_INPUT_SIZE}`}</p>
      </div>
      <div className="h-[40vh] w-full ">
        <textarea
          className="h-full w-full resize-none rounded-md p-1 text-black"
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>
      <div className="item  m-3 flex w-full items-end justify-end text-lg ">
        <button
          className={`w-full rounded bg-[#0092ca] p-2 disabled:opacity-75 lg:w-max `}
          disabled={!showSummary}
          onClick={handleSummarize}
        >
          Summarize
        </button>
      </div>
      <Summary
        result={outputText}
        showSummary={outputText.length > 0}
        loading={loading}
      />
    </div>
  );
};

export default Hero;
