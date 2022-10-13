import React from "react";

export default function UserIcon({ img }) {
  return (
    <div className="w-[44px] h-[44px] mr-[1px]  rounded-full  overflow-hidden object-contain">
      <img src={img ? img : "./User.png"} className="rounded-full object-contain" />
    </div>
  );
}
