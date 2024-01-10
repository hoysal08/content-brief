import React from "react";
import Summary from "./Summary";

const Hero = () => {
  return (
    <div className=" m-10 mt-10 flex w-5/6 flex-col items-center rounded-xl">
      {/* // border-slate-300 md:border" */}
      <h3 className="item-left my-3 w-full text-lg">
        Paste the text here to summarise it:
      </h3>
      <div className="h-[40vh] w-full ">
        <textarea
          className="h-full w-full resize-none rounded-md p-1 text-black"
          maxLength={1000}
        ></textarea>
      </div>
      <div className="m-3 flex w-full items-end justify-end text-lg ">
        <button className=" rounded bg-[#0092ca] p-2">Summarize</button>
      </div>
      <Summary />
    </div>
  );
};

export default Hero;
