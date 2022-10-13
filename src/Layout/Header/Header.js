import React from "react";
import Search from "./Search";
import HeaderRightMenu from "./HeaderRightMenu";

export default function Header({ getUser }) {
  return (
    <div className="flex flex-row gap-6 p-4">
      <img src="./Logo.png" alt="SpotifyLogo" className=" w-[24px] h-[24px] md:w-[48px] md:h-[48px] -ml-[36px]" />
      <Search />
      <div className="hidden lg:block">
        <HeaderRightMenu getUser={getUser && getUser} />
      </div>
    </div>
  );
}
