import React from "react";
import { Adjustments } from "../../icons";

export default function Search() {
  return (
    <label className="flex  flex-row items-center justify-center h-[75px] border-[2px] px-[25px] rounded-[50px]  border-Border w-full">
      <div className="w-full flex flex-row justify-center items-center gap-[20px]">
        <div className="w-[18px] h-[18px] rounded-full border-2 border-white" />
        <input
          placeholder="Search..."
          className="outline-none bg-transparent w-full h-full text-TextColor placeholder:text-TextColor
  text-base font-normal"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-[10px] pl-8">
        <Adjustments className=" cursor-pointer text-white text-[25px]" />
        <span className="text-white font-normal">Filters</span>
      </div>
    </label>
  );
}
