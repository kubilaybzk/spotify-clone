import React from "react";
import { Collection, Compass, Heart, Home, Microphone } from "../icons";
export default function LeftMenu() {
  return (
    <div className="flex flex-col h-full gap-[30px] items-center mt-[30px] md:mt-[40px] pl-3">
     
      
     
      <div className="flex flex-row w-full  justify-start items-center gap-3">
        <Compass className=" cursor-pointer text-IconDef text-[24px]" />
        <span className="text-TextColor hidden lg:flex">Keşfet</span>
      </div>
     
      <div className="flex flex-row w-full  justify-start items-center gap-3">
        <Microphone className=" cursor-pointer text-IconDef text-[24px]" />
        <span className="text-TextColor hidden lg:flex">Selam</span>
      </div>
     
      <div className="flex flex-row w-full  justify-start items-center gap-3">
        <Collection className=" cursor-pointer text-IconDef text-[24px]" />
        <span className="text-TextColor hidden lg:flex">Selam</span>
      </div>
     
      <div className="flex flex-row w-full  justify-start items-center gap-3">
        <Heart className=" cursor-pointer text-IconDef text-[24px]" />
        <span className="text-TextColor hidden lg:flex">Selam</span>
      </div>
    </div>
  );
}


/*


*/