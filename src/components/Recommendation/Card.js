import React from "react";
import { Play } from "../../icons/index";
import {BsFillPlayCircleFill} from "react-icons/bs";

export default function Card({ item }) {
  console.log(item);
  return (
    <div className="w-[330px]  h-[330px] overflow-hidden relative rounded-[50px] group">
      <div className="w-full h-full relative  ">
        <img src={item.images[0].url} className="" />
        <div className="absolute top-0 w-full h-full bg-black opacity-60 group-hover:opacity-0"></div>
      </div>
      {/* Number of Tracks*/}
      <div className="w-full flex flex-col p-6 absolute top-0">
        <span className="text-[18px] font-medium text-white group-hover:text-Green">
          {item.total_tracks} Tracks
        </span>
      </div>
      {/* İnformation of Tracks*/}
      <div className="w-full flex flex-col p-6 absolute bottom-2">
        <div className="bottom-4 flex flex-row items-center gap-2">
          <BsFillPlayCircleFill className="w-[50px] h-[50px] group-hover:text-Green text-white" />
          <div className="max-w-[250px] flex flex-col">
            <span className=" truncate text-[16px] font-medium text-white">
              {item.name}
            </span>
            <span className=" truncate text-[14px] font-normal text-white">
              {item.artists[0].name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
