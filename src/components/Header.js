import React from "react";
import { UserInfo } from "../services/user";
import { User } from "../store";

export default function Header() {
  const userinfo = User((state) => state.user);
  console.log(userinfo);

  return (
    <div className="px-[42px] py-[32px] bg-transparent">
      <div className="flex flex-row items-center justify-start gap-7">
        <img className="w-8 h-8" src="./Logo.png" alt="Logo" />
        <span className="text-TextColor font-medium">YOUR LIBRARY</span>
        <span className="text-TextColor font-medium">PLAYLİSTS</span>
      </div>
      <div className="flex justify-end flex-row items-center">
        <label className="w-[115px] h-[17px] ">
          
        </label>
      </div>
    </div>
  );
}
