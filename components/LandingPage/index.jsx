import { Container, Typography, } from '@mui/material'
import React from 'react'
import localFont from 'next/font/local'
import styles from './index.module.scss'
import PoetryIn from '../PoetryIn';
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
      < section id='landingPage' className={styles.landingPage} style={...Effra.style}>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, }}

          className={styles.sec_container}>
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >
            <div className={styles.sec_title}>
              <img src={Landing_Banner_text.src} alt="" />
            </div>
          </Container>

          {/* <div className={styles.img_container}>
            <img src={land_banner.src} alt="" />
          </div> */}

          <div className={styles.palm}>
            <PalmSvg />
          </div>

          <div className={styles.palm_left}>
            <img src={Palm.src} alt="" />
          </div>

        </motion.div>

      </section >

      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className='disable_container'>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, }}

          className={styles.boxes_container}>
          <Link href='/literary-eras' className={styles.box}>
            <div className={styles.icon_container}>
              <Feather />
            </div>
            <div className={styles.title}>
              <Typography variant='h4'>
                استكشف الشعراء
                <br />
                عبر العصور
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
                استكشف الشعراء
                <br />
                عبر المناطق
              </Typography>
            </div>
            <div className={styles.arrow}>
              <LeftArrow />
            </div>
          </Link>
        </motion.div>
      </Container>

    </>

  )
}

export default LandingPage