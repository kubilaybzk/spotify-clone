import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { NewReleasesAlbums } from "../../store";
import Card from "./Card";
import "./styles.css";
export default function App() {
  const setNewReleasesAlbums = NewReleasesAlbums(
    (state) => state.setNewReleases
  );
  const getNewReleasesAlbums = NewReleasesAlbums((state) => state.NewReleases);

  useEffect(() => {
    setNewReleasesAlbums();
  }, []);

  return (
    <div className="triple-slider">
      <span className=" pl-8 text-white text-[14px] lg:text-[24px] font-bold">Türkiye'de Popüler</span>
      <div className="h-12"></div>
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
        }}
        pagination={false}
        modules={[EffectCoverflow]}
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
    </div>
  );
}
