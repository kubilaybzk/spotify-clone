import React from "react";
import { Play } from "../../icons/index";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function Card({ item }) {
  console.log(item);
  return (
    <div className=" overflow-hidden relative rounded-[10px] md:rounded-[50px] group">
      <div className="w-full h-full relative">
        <img src={item.images[0].url} className="" />
        <div className="BlackScreen absolute top-0 w-full h-full bg-black "></div>
      </div>
      <div className="Size">
        <span className="TrackSizeText">{item.total_tracks} Tracks</span>
      </div>
      
      
      <div className="BottomMenu flex flex-row justify-start absolute bottom-1 left-2 md:bottom-3 md:left-5 gap-1 md:gap-3 items-center w-full">
        <BsFillPlayCircleFill className="text-white md:text-[40px]"/>
        <div className="flex flex-col justify-center items-start   max-w-xs ">
          <span className="text-white text-[12px] md:text-[14px] font-bold truncate">{item.name}</span>
          <span className="text-white text-[10px] md:text-[12px] truncate">{item.artists[0].name}</span>
        </div>
      </div>


    </div>
  );
}

/*


      <div className="w-full flex flex-col p-6 absolute top-0">
        <span className=" ">
          {item.total_tracks} Tracks
        </span>
      </div>

      <div className="w-full flex flex-col p-6 absolute bottom-2">
        <div className="bottom-4 flex flex-row items-center gap-2">
          <BsFillPlayCircleFill className=" group-hover:text-Green text-white" />
          <div className="max-w-[250px] flex flex-col">
            <span className=" ">
              {item.name}
            </span>
            <span className="">
              {item.artists[0].name}
            </span>
          </div>
        </div>
      </div>

      */
