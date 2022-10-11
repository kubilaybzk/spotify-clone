import React from "react";

export default function Icons({ img }) {
  return (
    <div className="w-[72px] rounded-full h-[72px] overflow-hidden object-contain">
      <img src={img ? "img" : "./User.png"} className="rounded-full object-cover" />
    </div>
  );
}
