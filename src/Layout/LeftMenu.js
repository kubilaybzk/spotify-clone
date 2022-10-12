import React from "react";
import { Collection, Compass, Heart, Home, Microphone } from "../icons";
export default function LeftMenu() {
  return (
    <div className="
    flex flex-col h-full 
    gap-[54px] items-center lg:min-w-[60px]">
      <img src="./Logo.png" alt="SpotifyLogo" className="w-[60px] h-[60px]" />
      <Home className=" cursor-pointer text-white text-[35px]" />
      <Compass className=" cursor-pointer text-white text-[35px]" />
      <Microphone className=" cursor-pointer text-white text-[35px]" />
      <Collection className=" cursor-pointer text-white text-[35px]" />
      <Heart className=" cursor-pointer text-white text-[35px]" />
    </div>
  );
}
