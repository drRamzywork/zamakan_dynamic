import { Container, Typography, } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mountains } from '@/assets/svgsComponents';
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'


const LiteraryEras = ({ erasAllEras }) => {


  return (
    <>
      <Head>
        <title>العصور الأدبية التاريخية</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="استكشف الشعراء
عبر العصور" />
        <meta name="description" content="شُعراء العصور الأَدبيّة في مَناطِق المملكة العربيّة السُّعوديّة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      < section id='LiteraryEras' className={styles.LiteraryEras} >
        <Container maxWidth={false} >
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            className={styles.sec_container}>
            <div className={styles.sec_title}>
              <Typography variant='h1'>
                استكشف الشعراء
                <br />
                <span>
                  عبر العصور
                </span>
              </Typography>
            </div>

            <div className={styles.imags_container}>
              <div className={styles.right_branch}>
                <img src={"/assets/imgs/right_branch.png"} objectFit='contain' alt='' />

              </div>
              <div className={styles.left_branch}>
                <img src={"/assets/imgs/left_branch.png"} objectFit='contain' alt='' />

              </div>
              <div className={styles.horse}>
                <img src={"/assets/imgs/horse.png"} objectFit='contain' alt='' />

              </div>
              <div className={styles.mountains}>
                <Mountains />
              </div>
            </div>
          </motion.div>
        </Container>
      </section >



      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, }}
        className={styles.swiper_container}>
        <Container maxWidth={false} className={styles.leftSide}>
          <Swiper
            dir="rtl"
            breakpoints={{
              300: {
                slidesPerView: 1.2,
                spaceBetween: 24,
              },
              400: {
                slidesPerView: 1.2,
                spaceBetween: 24,
              },
              607: {
                slidesPerView: 1.8,
                spaceBetween: 24,
              },
              700: {
                slidesPerView: 2.2,
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

            pagination={true} className={"swiper"}>
            {erasAllEras?.map((era) => (
              <SwiperSlide key={era.id} className={styles.swiper_slide_box}>
                <Link href={`/literary-eras/era/${era.id}`} className={styles.box}>
                  <div className={styles.img_container}>
                    <Image width={277} height={326} src={era.icon} alt={era.name} />
                  </div>



                  <div className={styles.title}>
                    <Typography variant='h4'>
                      {era.name}
                    </Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      {era.desc}
                    </Typography>
                  </div>
                </Link>
              </SwiperSlide>
            ))}

          </Swiper>
        </Container>
      </motion.div>

    </>

  )
}

export default LiteraryEras


export async function getStaticProps() {
  try {
    const resAllEras = await fetch('https://api4z.suwa.io/api/Zaman/GetAllEras?lang=2&pagenum=1&pagesize=50');

    if (!resAllEras.ok) {
      throw new Error(`HTTP error! Status: ${resAllEras.status}`);
    }

    const erasAllEras = await resAllEras.json();

    return {
      props: {
        erasAllEras,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Failed to fetch API:', error);

    return {
      props: {
        erasAllEras: [],
        error: 'API fetch failed',
      },
      revalidate: 10,
    };
  }
}

