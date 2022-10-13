import React, { useEffect } from "react";
import { User } from "../store";
import LeftMenu from "./LeftMenu";
import Header from "./Header/Header";

export default function Layout({ children }) {
  console.log("render oldu header");
  const setUser = User((state) => state.setUser);
  const getUser = User((state) => state.user);

  useEffect(() => {
    setUser();
  }, []);
  console.log();
  return (
    <div className="flex flex-row bg-orange-500 w-full h-full">
      <LeftMenu />
      <div className="flex flex-col w-full h-full">{children}</div>
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
