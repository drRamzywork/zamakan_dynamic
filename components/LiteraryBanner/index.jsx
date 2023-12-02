import React, { useState } from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material'
import { Mountains } from '@/assets/svgsComponents'
import imgs from '../../assets/constants/imgs'
import { useRouter } from 'next/router'
import localFont from 'next/font/local'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Effra = localFont({
  src: [
    {
      path: '../../fonts/Effra_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const LiteraryBanner = () => {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    left_branch,
    right_branch,
    horse,
    pre_Islamic,
    Islamic_era,
    Abbasid_era,
    Mamluk_era,
    Umayyad_era,
    modern_era
  } = imgs


  const carouselData = [
    { title: 'عصر ما قبل الإسلام', date: '٦٦٣ - ٧٥٠م', img: pre_Islamic.src },
    { title: 'العصر الإسلامي', date: '٦٦٣ - ٧٥٠م', img: Islamic_era.src },
    { title: 'العصر العباسي ', date: '٦٦٣ - ٧٥٠م', img: Abbasid_era.src },
    { title: 'العصر المملوكي', date: '٦٦٣ - ٧٥٠م', img: Mamluk_era.src },
    { title: 'العصر الأموي', date: '٦٦٣ - ٧٥٠م', img: Umayyad_era.src },
    { title: 'العصر الحديث', date: '٦٦٣ - ٧٥٠م', img: modern_era.src },

  ]
  const handleBoxClick = (index) => {
    setActiveIndex(index);
  };


  return (

    <>
      <section id='LiteraryBanner' className={styles.LiteraryBanner} style={...Effra.style} >

        <div className={styles.sec_container}>
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
            <div className={styles.sec_title}>

              <Typography variant='h1'>
                العصور الأدبية
                {` `}
                <br />
                {` `}
                التاريخية
              </Typography>
            </div>
          </Container>

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
      <div className={styles.swiper_container}>
        <Swiper
          dir="rtl"
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 24,

            },
          }}
          slidesPerView={4.5}
          spaceBetween={24}


          pagination={true} className={"swiper"}>

          {carouselData.map((era, index) => (
            <SwiperSlide key={index} className={styles.swiper_slide_box}>
              <div
                className={`${styles.box} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => handleBoxClick(index)}
              >

                <div className={styles.img_container}>
                  <img src={era.img} alt="" />
                </div>

                <div className={styles.date_container}>
                  <Typography>{era.date}</Typography>
                </div>

                <div className={styles.title}>
                  <Typography variant='h4'>
                    {era.title}
                  </Typography>
                </div>

              </div>
            </SwiperSlide>
          ))}



        </Swiper>
      </div>
    </>

  )
}

export default LiteraryBanner