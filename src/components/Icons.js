import React from "react";

export default function Icons({ img }) {
  return (
    <div className="w-6 rounded-full border-2 h-6  object-contain overflow-hidden">
      <img src={img ? "img" : "./User.png"} className="w-6 h-6 rounded-full object-cover" />
    </div>
  );
}
