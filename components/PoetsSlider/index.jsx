import { Container, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import styles from './index.module.scss'
import imgs from '@/assets/constants/imgs';
import Link from 'next/link';




const PoetsSlider = ({ poetriesData }) => {
  const { ra3y, Feather_big, place } = imgs;


  const adjustImageUrl = (imageUrl) => {
    if (imageUrl?.startsWith('https')) {
      return imageUrl;
    } else {
      return `https://zamakan.suwa.io${imageUrl}`;
    }
  };

  return (
    <>
      <div id='simlar_poets' className={styles.simlar_poets}>


        <div className={styles.slider_container}>
          <div className={styles.slider}>
            <Swiper

              spaceBetween={24}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                400: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 1.3,
                  spaceBetween: 24,

                },
              }}
              dir='rtl'
              className={styles.swiper_container} >

              {poetriesData?.map((poetry, index) => {
                const [beforeDots, afterDots] = poetry.poetryParts.split('...');
                return (
                  <SwiperSlide key={poetry.id}>
                    <div className={styles.box}>
                      <div className={styles.tag}>
                        <Typography>{poetry.placeName}</Typography>
                      </div>

                      <div className={styles.desc}>
                        {/* <Typography>
                        {poetry.poetryParts}
                      </Typography> */}

                        <Typography>
                          {beforeDots}
                        </Typography>
                        <br />
                        <Typography>
                          {afterDots}
                        </Typography>
                      </div>

                      <Link href={`/poetry/${poetry.id} `} className={styles.link_container}>
                        <Typography>تفاصيل البيت</Typography>

                        <div className={styles.icon_container}>
                          <HiArrowLeft />
                        </div>
                      </Link>
                      <hr />


                      <div className={styles.poet_info}>
                        <div className={styles.img_container}>
                          <img src={adjustImageUrl(poetry.poetIcon)} alt={poetry.poetName} />
                        </div>

                        <div className={styles.text_container}>
                          <Link href={`/poet/${poetry.poetId}`} className={styles.name}>
                            <Typography>{poetry.poetName}</Typography>
                          </Link>
                          <div className={styles.poet_tag}>
                            <Typography>
                              {poetry.zamanName}
                            </Typography>

                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>

                )
              }
              )}



            </Swiper>

          </div>
        </div>

      </div >
    </>
  )
}

export default PoetsSlider