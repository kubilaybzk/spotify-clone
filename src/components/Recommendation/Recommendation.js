import React, { useEffect } from "react";
import { NewReleasesAlbums } from "../../store";
import Card from "./Card";
import Slider from "react-slick";
export default function Recommendation() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode:true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakPoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
