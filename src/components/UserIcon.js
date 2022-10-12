import React from "react";

export default function UserIcon({ img }) {
  return (
    <div className="w-[71px] mr-[1px]  rounded-full h-[71px] overflow-hidden object-contain">
      <img src={img ? img : "./User.png"} className="rounded-full object-contain" />
    </div>
  );
}
