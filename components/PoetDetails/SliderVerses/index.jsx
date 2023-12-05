
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

import styles from './index.module.scss'; // Make sure this path is correct
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link'
import { imgs } from '@/assets/constants';

const ITEMS_PER_PAGE = 10;
import { motion } from 'framer-motion'
export default function SliderVerses({ filtredPoets }) {
  const { ra3y1 } = imgs;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(filtredPoets.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const poetsToShow = filtredPoets.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );


  const adjustImageUrl = (imageUrl) => {
    if (imageUrl?.startsWith('https')) {
      return imageUrl;
    } else {
      return `https://zamakan.suwa.io${imageUrl}`;
    }
  };


  return (
    <>

      {/* <Swiper
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
        spaceBetween={24}
        slidesPerView={2.2}
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

        <SwiperSlide >
          <div className={styles.box}>
            <div className={styles.poet_info}>
              <div className={styles.img_container}>
                <img src={ra3y1.src} alt="" />
              </div>

              <div className={styles.text_container}>
                <Link href='/poet' className={styles.name}>
                  <Typography>الراعي</Typography>
                  <div className={styles.date}>
                    <Typography>٢٣ هـ - ١٠٥ هـ</Typography>
                  </div>
                </Link>
                <div className={styles.tag}>
                  <Typography>
                    العصر الأموي
                  </Typography>

                </div>
              </div>
            </div>

            <hr />

            <div className={styles.desc}>
              <Typography>
                شاعرٌ عربي متيم من أهل المدينة المنورة وشعراء الدولة الأموية، اشتهر بعشقه عزة بنت جميل بن حفص بن إياس الغفارية الكنانية.
              </Typography>
            </div>


          </div>
        </SwiperSlide>

        {Array.isArray(filtredPoets) ? (
          filtredPoets.map((poet) => (
            <SwiperSlide key={poet.id}>
              <div className={styles.box}>
                <div className={styles.poet_info}>
                  <div className={styles.img_container}>
                    <img src={ra3y1.src} alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <Link href={`/poet/${poet.placeId}`} className={styles.name}>
                      <Typography>{poet.poetName}</Typography>
                      <div className={styles.date}>
                        <Typography>{poet.fromH} هـ - {poet.toH} هـ</Typography>
                      </div>
                    </Link>
                    <div className={styles.tag}>
                      <Typography>
                        {poet.zamanName}
                      </Typography>

                    </div>
                  </div>
                </div>

                <hr />

                <div className={styles.desc}>
                  <Typography>
                    {poet.entrance}
                  </Typography>
                </div>


              </div>
            </SwiperSlide>
          ))
        ) : (
          <div style={{ textAlign: 'center' }} dir='ltr'>Loading...</div>
        )}

      </Swiper> */}
      {/* <div className={styles.pagination_arrows}>
        <Box ref={nextRef} className={styles.swiperButtonPrev} id='swiperButton'>
          <HiArrowLeft />
        </Box>
        <Box ref={prevRef} className={styles.swiperButtonNext} id='swiperButton'>
          <HiArrowRight />
        </Box>
      </div> */}


      <div className={styles.sliderContainer}>
        {poetsToShow.map((poet) => (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            className={styles.box}>
            <div className={styles.poet_info}>
              <div className={styles.img_container}>
                <img src={adjustImageUrl(poet.icon)} alt={poet.name} />
              </div>

              <div className={styles.text_container}>
                <Link href={`https://zamakan.suwa.io${poet.icon}`} className={styles.name}>
                  <Typography>{poet.name}</Typography>
                  <div className={styles.date}>
                    <Typography>{poet.fromH} هـ - {poet.toH} هـ</Typography>
                  </div>
                </Link>
                <div className={styles.tag}>
                  <Typography>
                    {poet.zamanName}
                  </Typography>

                </div>
              </div>
            </div>

            <hr />

            <div className={styles.desc}>
              <Typography>
                {poet.descShort}
              </Typography>
            </div>


          </motion.div>
        ))}
      </div>

      {filtredPoets.length > 1
        &&
        <div className={styles.paginationBox}>

          <div className={styles.paginationContainer}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className={styles.arrow_btn}
            >
              <HiArrowRight />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={index === currentPage ? styles.active : ''}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className={styles.arrow_btn}
            >
              <HiArrowLeft />

            </button>
          </div>
        </div>
      }



    </>
  );
}