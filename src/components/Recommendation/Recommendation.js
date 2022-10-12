import React, { useEffect } from "react";
import { NewReleasesAlbums } from "../../store";
import Card from "./Card";
import Slider from "react-slick";
export default function Recommendation() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true
  };

  const setNewReleasesAlbums = NewReleasesAlbums(
    (state) => state.setNewReleases
  );
  const getNewReleasesAlbums = NewReleasesAlbums((state) => state.NewReleases);

  useEffect(() => {
    setNewReleasesAlbums();
  }, []);


  return (
   <div className="w-screen overflow-hidden pr-20">
    <span className="text-white pt-8 mb-8 text-[24px] font-bold"> Türkiye'de Popüler</span>
    <div className="h-8"></div>
     <Slider {...settings}>
      {getNewReleasesAlbums &&
        getNewReleasesAlbums.albums.items.map((item, key) => {
          return <Card item={item} key={key} />;
        })}
    </Slider>
   </div>
  );
}
