import React from "react";
import UserIcon from "../../components/UserIcon";
import { BadgeCheck, Bell, Cog, Flag, Adjustments } from "../../icons";
export default function HeaderRightMenu({ getUser }) {
  return (
    <div className="flex pl-[30px] flex-row align-middle items-center gap-[30px] h-[75px] border-[2px] border-Border rounded-[50px] ">
      <BadgeCheck className=" cursor-pointer text-white text-[25px]" />
      <Flag className=" cursor-pointer text-white text-[25px]" />
      <Cog className=" cursor-pointer text-white text-[25px]" />
      <Bell className=" cursor-pointer text-white text-[25px]" />
      <UserIcon img={getUser && getUser.images[0].url} />
    </div>
  );
}
