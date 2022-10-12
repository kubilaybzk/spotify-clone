import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper";
import { NewReleasesAlbums } from "../../store";
import Card from "./Card";

export default function App() {
  const setNewReleasesAlbums = NewReleasesAlbums(
    (state) => state.setNewReleases
  );
  const getNewReleasesAlbums = NewReleasesAlbums((state) => state.NewReleases);

  useEffect(() => {
    setNewReleasesAlbums();
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}        
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={"3"}
        
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,

          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
    
      >
        {getNewReleasesAlbums &&
          getNewReleasesAlbums.albums.items.map((item, key) => {
            return (
              <SwiperSlide>
                <Card item={item} key={key} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
