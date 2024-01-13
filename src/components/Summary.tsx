import Image from "next/image";
import React from "react";
import copyImage from "../assets/copyButton.svg";
import { Spinner } from "@material-tailwind/react";

type SummayProps = {
  result: string;
  showSummary: boolean;
  loading: boolean;
};

const Summary = ({ result, showSummary = false, loading }: SummayProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div className="mt-10 w-full">
      <div className="flex justify-between">
        <h2 className="my-2 text-2xl">Summary</h2>
        {showSummary && (
          <Image
            onClick={handleCopy}
            src={copyImage}
            alt="copy"
            className="w-5 cursor-pointer"
          />
        )}
      </div>
      <div>
        {result ? (
          <h3 className="">{result}</h3>
        ) : loading ? (
          <div className="flex w-full flex-col items-center justify-center">
            <Spinner className="h-14 w-14 text-[#0092ca]" />
            <p className="mt-3">Getting your Brief...</p>
          </div>
        ) : (
          <div className="mt-10 flex items-center justify-center text-xl text-[#8a8686]">
            Waiting to help you ...
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
