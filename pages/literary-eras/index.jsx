import { Container, Typography, } from '@mui/material'
import React from 'react'
import localFont from 'next/font/local'
import styles from './index.module.scss'
import imgs from '../../assets/constants/imgs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mountains } from '@/assets/svgsComponents';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'


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

const LiteraryEras = ({ erasAllEras }) => {
  const router = useRouter();
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


  const toArabicNumerals = (num) => {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumbers[digit]).join('');
  };


  return (

    <>



      < section id='LiteraryEras' className={styles.LiteraryEras} style={...Effra.style}>
        <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >
          <div className={styles.sec_container}>
            <div className={styles.sec_title}>
              <Typography variant='h1'>
                العصور الأدبية
                {` `}
                <br />
                {` `}
                التاريخية
              </Typography>
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



      <div className={styles.swiper_container}>
        <Swiper
          dir="rtl"
          breakpoints={{
            300: {
              slidesPerView: 1.3,
              spaceBetween: 24,
            },
            400: {
              slidesPerView: 1.3,
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
          slidesPerView={4.5}
          spaceBetween={24}

          pagination={true} className={"swiper"}>


          {erasAllEras.map((era) => (
            <SwiperSlide key={era.id} className={styles.swiper_slide_box}>
              <Link href={`/literary-eras/era/${era.id}`} className={styles.box}>
                <div className={styles.img_container}>
                  {/* <img src={pre_Islamic.src} alt="" /> */}
                  <Image src={pre_Islamic.src} alt={era.desc} width={277} height={346} />

                </div>

                <div className={styles.date_container}>
                  <Typography>  {toArabicNumerals(era.fromH)} - {toArabicNumerals(era.toH)}</Typography>

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
      </div>

    </>

  )
}

export default LiteraryEras


export async function getServerSideProps() {
  const resAllEras = await fetch('https://api4z.suwa.io/api/Zaman/GetAllEras?lang=2&pagenum=1&pagesize=50');
  const erasAllEras = await resAllEras.json();


  return {
    props: {
      erasAllEras: erasAllEras,
    },
  };
}

