import React from "react";
import Search from "./Search";
import HeaderRightMenu from "./HeaderRightMenu";

export default function Header({ getUser }) {
  return (
    <div className="ml-[36px] pr-[50px] -mt-2   flex flex-row gap-8">
        <Search/>
        <div className="hidden lg:block">
        <HeaderRightMenu  getUser={getUser&&getUser} />
        </div>
    </div>
  );
}
