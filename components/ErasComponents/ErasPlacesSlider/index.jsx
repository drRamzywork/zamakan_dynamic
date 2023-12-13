import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './index.module.scss'
import { Typography } from '@mui/material';

const ErasPlacesSlider = ({ places, activeCity }) => {
  console.log(activeCity, "activeCity")
  return (
    <>
      <div className={styles.swiper_container}>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2.8,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 3.2,
              spaceBetween: 10,
            },
            414: {
              slidesPerView: 3.4,
              spaceBetween: 11,
            },
            450: {
              slidesPerView: 3.4,
              spaceBetween: 11,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 24,

            },
          }}
          spaceBetween={24}
          slidesPerView={3}
          dir={'rtl'}
          pagination={true} className="places-swiper">

          {/* {places?.map((city, index) =>
            <SwiperSlide className={styles.places_container} key={city.id}>
              <div className={`${styles.places} ${city.id === activeCity ? styles.active : ''}`} key={index} >
                <div className={styles.img_container}>
                  <img src={city.icon} alt={city.name} />
                </div>
                <div className={styles.name}>
                  <Typography>{city.name}</Typography>
                </div>
              </div>

            </SwiperSlide >
          )} */}

          {console.log(activeCity, "activeCityactiveCity")}
          {places?.map((city, index) =>
            <SwiperSlide className={styles.places_container} key={city.id}>
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