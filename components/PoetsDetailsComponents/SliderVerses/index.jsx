
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { HiArrowLeft } from "react-icons/hi2";

import styles from './index.module.scss'; // Make sure this path is correct
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link'
export default function SliderVerses({ dataPoetry, results }) {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>

      <Swiper
        modules={[Navigation, Pagination, Grid]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          // Link swiper's internal navigation to the custom buttons
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}

        spaceBetween={0}
        slidesPerView={2}
        grid={{
          rows: 5,
          fill: 'row',
          slidesPerColumnFill: "row"
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
        }}

        breakpoints={{
          // when window width is >= 600px
          300: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          }
        }}

        className={styles.swiper_container}
        id='swiperContainer'
        dir='rtl'
      >

        {results.map((poetry, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.box}>
              <div className={styles.tag}>
                <Typography>{poetry.placeName}</Typography>
              </div>
              <div className={styles.desc}>
                <Typography>{poetry.poetryParts}</Typography>
              </div>

              <Link href={`/poetry/${poetry.id}`} className={styles.link_container}>
                <Typography>تفاصيل البيت</Typography>

                <div className={styles.icon_container}>
                  <HiArrowLeft />
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}