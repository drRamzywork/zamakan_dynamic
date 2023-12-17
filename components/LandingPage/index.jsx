import { Container, Typography, } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'
import imgs from '../../assets/constants/imgs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Feather, LeftArrow, PalmSvg, } from '@/assets/svgsComponents';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SmallSaudiMap from '@/assets/svgsComponents/SmallSaudiMap';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from "react-icons/fa";

import localFont from 'next/font/local'


const Custom = localFont({
  src: [
    {
      path: '../../fonts/custom.otf',
      weight: '500',
      style: 'normal',
    },

  ],
})

const LandingPage = () => {
  const router = useRouter();
  const {
    left_branch,
    land_banner,
    Palm,
    Landing_Banner_text

  } = imgs



  return (

    <>
      <Head>
        <title>زمكان</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="استكشف الشعراء
عبر المناطق" />
        <meta name="description" content="شُعراء العصور الأَدبيّة في مَناطِق المملكة العربيّة السُّعوديّة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      < section id='landingPage' className={styles.landingPage} >
        <div className={styles.sec_wrap}>


          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            className={styles.sec_container}>
            <Container maxWidth={false} >
              <div className={styles.sec_title}>
                <h1>
                  زمكان الشعر
                  <span>  زمان ومكان الشعر العربي
                    {` `}
                    <br />
                    في  المملكة العربية السُّعوديّة</span>
                </h1>


              </div>
            </Container>



            <div className={styles.palm}>
              <PalmSvg />
            </div>

            <div className={styles.palm_left}>
              <img src={Palm.src} alt="" />
            </div>

          </motion.div>
          <Container maxWidth={false} >
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, }}

              className={styles.boxes_container}>
              <Link href='/literary-eras' className={styles.box}>
                <div className={styles.icon_container}>
                  <FaCalendarAlt />
                </div>
                <div className={styles.title}>
                  <Typography variant='h4'>
                    زمان الشعر
                  </Typography>
                </div>
                <div className={styles.arrow}>
                  <LeftArrow />
                </div>
              </Link>
              <Link href='/places' className={styles.box}>
                <div className={styles.icon_container}>
                  <SmallSaudiMap />

                </div>
                <div className={styles.title}>
                  <Typography variant='h4'>
                    مكان الشعر
                  </Typography>
                </div>
                <div className={styles.arrow}>
                  <LeftArrow />
                </div>
              </Link>
            </motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, }}

              className={styles.boxes_container}>
              <Link href='/public-treasury' className={styles.box1}>
                <div className={styles.icon_container}>
                  <SmallSaudiMap />

                </div>
                <div className={styles.title}>
                  <Typography variant='h4'>
                    خزانة العام
                  </Typography>
                </div>
                <div className={styles.arrow}>
                  <LeftArrow />
                </div>
              </Link>
            </motion.div>
          </Container >
        </div>

      </section >



    </>

  )
}

export default LandingPage