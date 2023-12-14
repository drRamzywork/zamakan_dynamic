import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import styles from './index.module.scss'
import { Typography } from '@mui/material';


const ErasPlacesSlider = ({ places, activeCity, onPlaceClick }) => {
  const swiperRef = useRef(null);

  const filteredPlaces = places.filter(place => place.svgX !== null && place.svgY !== null);



  useEffect(() => {
    if (activeCity != null && swiperRef.current) {
      const index = filteredPlaces.findIndex(city => city.id === activeCity);
      if (index !== -1) {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  }, [activeCity, places]);






  return (
    <>
      <div className={styles.swiper_container}>
        <Swiper
          ref={swiperRef}
          centeredSlides={true}

          breakpoints={{
            300: {
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 2.1,
              spaceBetween: 10,
            },
            414: {
              slidesPerView: 2.5,
              spaceBetween: 11,
            },
            450: {
              slidesPerView: 2.5,
              spaceBetween: 11,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1204: {
              slidesPerView: 3.5,
              spaceBetween: 16,
            },

          }}
          dir={'rtl'}
          className="places-swiper">
          {filteredPlaces?.map((city, index) =>
            <SwiperSlide className={styles.places_container} key={city.id} onClick={() => onPlaceClick(city.id)}>
              <div className={`${styles.places} ${city.id === activeCity ? styles.active : ''}`} key={index} >
                <div className={styles.img_container}>
                  <img src={city.icon} alt={city.name} />
                </div>
                <div className={styles.name}>
                  <Typography>{city.name}</Typography>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  )
}

export default ErasPlacesSlider