import { Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, } from 'swiper/modules';
import styles from './index.module.scss'
import Link from 'next/link';
import Image from 'next/image';
const PageSection = ({ title, data }) => {

  return (
    <section id={title} className={styles.section}>
      <div className={styles.sec_title}>
        <Typography variant="h3" >
          {title}
        </Typography>
      </div>
      <div className={styles.swiper_container}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          dir='rtl'
          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            400: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,

            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 16,

            },
            1800: {
              slidesPerView: 5,
              spaceBetween: 16,

            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.box}>
                <div className={styles.img_container}>
                  <Image width={318} height={183} src={item.img} alt={item.title} />
                </div>

                <div className={styles.title}>
                  <Typography variant="h4">{item.title}</Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.more_btn}>
          <Link href='/' >المزيد</Link>
        </div>

      </div>
    </section>
  )
}

export default PageSection