import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material'
import { Mountains } from '@/assets/svgsComponents'
import imgs from '../../assets/constants/imgs'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link'
import Image from 'next/image'


const LiteraryBanner = (props) => {
  const { query } = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const toArabicNumerals = (num) => {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumbers[digit]).join('');
  };

  const {
    left_branch,
    right_branch,
    horse,
  } = imgs


  const eraIndex = query.index ? Number(query.index) : 0;


  return (

    <>
      <section id='LiteraryBanner' className={styles.LiteraryBanner} >
        <div className={styles.sec_container}>


          <div className={styles.imags_container}>
            <div className={styles.right_branch}>
              <img src={right_branch.src} alt="" />
            </div>
            <div className={styles.left_branch}>
              <img src={left_branch.src} alt="" />
            </div>
            <div className={styles.horse}>
              <img src={horse.src} alt="" />
            </div>
            <div className={styles.mountains}>
              <Mountains />
            </div>
          </div>
        </div>

      </section >
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className={styles.leftSide}>
        <div className={styles.swiper_container}>
          <Swiper
            dir="rtl"
            breakpoints={{
              300: {
                slidesPerView: 2.1,
                spaceBetween: 24,
              },
              400: {
                slidesPerView: 2.3,
                spaceBetween: 24,
              },
              450: {
                slidesPerView: 2.3,
                spaceBetween: 24,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              700: {
                slidesPerView: 2.8,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 24,

              },
              1300: {
                slidesPerView: 4.5,
                spaceBetween: 24,

              },
            }}
            slidesPerView={4.5}
            spaceBetween={24}
            pagination={true} className={"swiper"}>
            {props?.dataAllEras?.map((era) => (
              <SwiperSlide key={era.id} className={styles.swiper_slide_box}>
                <Link href={`/literary-eras/era/${era.id}`} className={`${styles.box} ${eraIndex === era.id ? styles.active : ''}`}>
                  <div className={styles.img_container}>
                    {/* <img src={pre_Islamic.src} alt="" /> */}
                    <img src={era.icon} alt={era.desc} />

                  </div>

                  {/* <div className={styles.date_container}>
                    <Typography>  {toArabicNumerals(era.fromH)} - {toArabicNumerals(era.toH)}</Typography>

                  </div> */}

                  <div className={styles.title}>
                    <Typography variant='h4'>
                      {era.name}
                    </Typography>
                  </div>

                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

    </>

  )
}

export default LiteraryBanner