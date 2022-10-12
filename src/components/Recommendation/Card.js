import React from "react";
import { Play } from "../../icons/index";
import {BsFillPlayCircleFill} from "react-icons/bs";

export default function Card({ item }) {
  console.log(item);
  return (
    <div className=" ">
      <div className=" ">
        <img src={item.images[0].url} className="" />
        <div className=""></div>
      </div>
      {/* Number of Tracks*/}
      <div className="">
        <span className="">
          {item.total_tracks} Tracks
        </span>
      </div>
      {/* İnformation of Tracks*/}
      <div className="">
        <div className="">
          <BsFillPlayCircleFill className="" />
          <div className="">
            <span className=" ">
              {item.name}
            </span>
            <span className="">
              {item.artists[0].name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
