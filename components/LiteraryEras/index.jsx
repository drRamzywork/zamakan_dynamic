import { Container, Typography, } from '@mui/material'
import React from 'react'
import localFont from 'next/font/local'
import styles from './index.module.scss'
import PoetryIn from '../PoetryIn';
import imgs from '../../assets/constants/imgs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Mountains } from '@/assets/svgsComponents';
import Link from 'next/link';


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

const LiteraryEras = () => {
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




  return (

    <>


      < section id='LiteraryEras' className={styles.LiteraryEras} style={...Effra.style}>
        <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className='disable_container'>
          <div className={styles.sec_container}>
            <div className={styles.sec_title}>
              <Typography variant='h1'>العصور الأدبية  <br />
                التاريخية</Typography>
            </div>

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

        </Container>
      </section >



      <div className={styles.slider_container}>
        <Swiper
          dir="rtl"
          // breakpoints={{
          //   300: {
          //     slidesPerView: 3,
          //     spaceBetween: 20,
          //   },
          //   400: {
          //     slidesPerView: 4,
          //     spaceBetween: 20,
          //   },
          //   640: {
          //     slidesPerView: 5,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //     spaceBetween: 40,
          //   },
          //   1024: {
          //     slidesPerView: 9.1,
          //     spaceBetween: 40,

          //   },
          // }}
          slidesPerView={4.5}
          spaceBetween={24}


          pagination={true} className={styles.swiper_container}>
          <SwiperSlide className={styles.swiper_slide_box}>
            <Link href={'/'} className={styles.box}>
              <div className={styles.img_container}>
                <img src={pre_Islamic.src} alt="" />
              </div>

              <div className={styles.date_container}>
                <Typography>٦٦٣ - ٧٥٠م</Typography>
              </div>

              <div className={styles.title}>
                <Typography variant='h4'>
                  عصر ما قبل الإسلام
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>الفترة الزمنية التي سبقت الإسلام، والتي انتشر فيها الطيش، والظلم، والقهر.</Typography>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide_box}>
            <Link href={'/'} className={styles.box}>
              <div className={styles.img_container}>
                <img src={Islamic_era.src} alt="" />
              </div>

              <div className={styles.date_container}>
                <Typography>٦٦٣ - ٧٥٠م</Typography>
              </div>

              <div className={styles.title}>
                <Typography variant='h4'>
                  العصر الإسلامي
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>الفترة الزمنية التي سبقت الإسلام، والتي انتشر فيها الطيش، والظلم، والقهر.</Typography>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide_box}>
            <Link href={'/'} className={styles.box}>
              <div className={styles.img_container}>
                <img src={Abbasid_era.src} alt="" />
              </div>

              <div className={styles.date_container}>
                <Typography>٦٦٣ - ٧٥٠م</Typography>
              </div>

              <div className={styles.title}>
                <Typography variant='h4'>
                  العصر العباسي
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>الفترة التي حكم فيها خلفاء بني العباس بالعصر العباسي</Typography>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide_box}>
            <Link href={'/'} className={styles.box}>
              <div className={styles.img_container}>
                <img src={Mamluk_era.src} alt="" />
              </div>

              <div className={styles.date_container}>
                <Typography>٦٦٣ - ٧٥٠م</Typography>
              </div>

              <div className={styles.title}>
                <Typography variant='h4'>
                  العصر المملوكي
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>الفترة الزمنية التي سبقت الإسلام، والتي انتشر فيها الطيش، والظلم، والقهر.</Typography>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide_box}>
            <Link href={'/'} className={styles.box}>
              <div className={styles.img_container}>
                <img src={Umayyad_era.src} alt="" />
              </div>

              <div className={styles.date_container}>
                <Typography>٦٦٣ - ٧٥٠م</Typography>
              </div>

              <div className={styles.title}>
                <Typography variant='h4'>
                  العصر الأموي
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>الفترة الزمنية التي سبقت الإسلام، والتي انتشر فيها الطيش، والظلم، والقهر.</Typography>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide_box}>
            <Link href={'/'} className={styles.box}>
              <div className={styles.img_container}>
                <img src={modern_era.src} alt="" />
              </div>

              <div className={styles.date_container}>
                <Typography>٦٦٣ - ٧٥٠م</Typography>
              </div>

              <div className={styles.title}>
                <Typography variant='h4'>
                  العصر الحديث
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>الفترة الزمنية التي سبقت الإسلام، والتي انتشر فيها الطيش، والظلم، والقهر.</Typography>
              </div>
            </Link>
          </SwiperSlide>


        </Swiper>
      </div>

    </>

  )
}

export default LiteraryEras