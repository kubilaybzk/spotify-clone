import React, { useEffect } from "react";
import { User } from "../store";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Icons from "./Icons";

export default function Layout({ children }) {
  console.log("render oldu header");
  const setUser = User((state) => state.setUser);
  const getUser = User((state) => state.user);

  useEffect(() => {
    setUser();
  }, []);

  return (
    <div className="p-[40px] h-screen bg-Primary flex flex-row">
      <div className="flex flex-col h-screen gap-[54px] items-center">
        <img src="./Logo.png" alt="SpotifyLogo" className="w-[60px] h-[60px]" />
        <BsThreeDots className="text-white text-[25px]" />
        <BsThreeDots className="text-white text-[25px]" />
        <BsThreeDots className="text-white text-[25px]" />
        <BsThreeDots className="text-white text-[25px]" />
        <BsThreeDots className="text-white text-[25px]" />
      </div>

      <div className="ml-[36px] -mt-2 w-full flex flex-row gap-8">
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
            <BsThreeDots className="text-white text-[25px]" />
            <span className="text-white font-normal">Filters</span>
          </div>
        </label>
        <div className="flex pl-[30px] flex-row align-middle items-center gap-[30px] h-[75px] border-[2px] border-Border  rounded-[50px] ">
          <BsThreeDots className="text-white text-[25px]" />
          <BsThreeDots className="text-white text-[25px]" />
          <BsThreeDots className="text-white text-[25px]" />
          <BsThreeDots className="text-white text-[25px]" />

          <Icons />
        </div>
      </div>
    </div>
  );
}

/*

<div className="px-[42px] py-[32px] flex w-full flex-row bg-Primary justify-between">
      <div className="flex flex-row items-center justify-start gap-7">
        <img className="w-8 h-8" src="./Logo.png" alt="Logo" />
        <span className="text-TextColor font-medium">YOUR LIBRARY</span>
        <span className="text-TextColor font-medium">PLAYLİSTS</span>
      </div>
      <div className="flex flex-row justify-center items-center align-middle gap-4 md:gap-7">
        <label className="w-[180px] rounded-lg px-2 h-[25px] bg-white  flex-row justify-start items-center hidden md:flex ">
          <AiOutlineSearch className="text-TextColor text-[22px] mr-[1px]" />
          <input placeholder="Search" className="outline-none w-20"></input>
        </label>
        <BsThreeDots className="text-TextColor text-[30px] hidden md:flex" />
        <Icons />
        <span className="text-TextColor font-normal">
          {getUser && getUser.display_name}
        </span>
      </div>
    </div>

    */
