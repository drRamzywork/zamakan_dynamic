
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import styles from './index.module.scss'; // Make sure this path is correct
import { Typography } from '@mui/material';
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function SliderVerses({ results }) {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [expandedStates, setExpandedStates] = useState({});

  const toggleExpanded = (index) => {
    setExpandedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  return (
    <>

      <Swiper
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

        spaceBetween={0}
        slidesPerView={2}
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

        {results.map((poetry, index) => {
          const [beforeDots, afterDots] = poetry.poetryParts.split('...');
          return (

            <SwiperSlide key={index}>
              {/* <div className={styles.box}>
                <div className={styles.tag}>
                  <Typography>{poetry.placeName}</Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {beforeDots}
                  </Typography>
                  <br />
                  <Typography>
                    {afterDots}
                  </Typography>
                </div>


              </div> */}

              <div className={styles.box}>
                <div className={styles.box_container}>
                  <div className={styles.info}>
                    <Link href={`/poet/${poetry.poetId}`} className={styles.img_container}>
                      <img src={poetry.poetIcon} alt={poetry.poetName} />
                    </Link>

                    <div className={styles.text_container}>
                      <div className={styles.name}>
                        <Typography>{poetry.poetName}</Typography>
                      </div>
                      <Link href={`/city/${poetry.placeId}`} className={styles.type}>
                        <Typography>{poetry.placeName}</Typography>
                      </Link >
                    </div>
                  </div>

                  <motion.div
                    className={`${styles.desc_container} ${expandedStates[index] ? styles.expanded : ''}`}
                    initial={{ height: '70px' }}
                    animate={{ height: expandedStates[index] ? 'auto' : '70px' }}
                    transition={{ duration: 0.5 }}
                  >
                    <Typography >{poetry.entrance}</Typography>
                  </motion.div>
                  <div className={styles.more_btn} onClick={() => toggleExpanded(index)}>
                    <Typography>{expandedStates[index] ? 'أقل' : 'المزيد'}</Typography>
                  </div>


                  <Link href={`/poetry/${poetry.id}`} className={styles.said}>

                    <div className={styles.desc}>
                      <Typography>
                        {beforeDots}
                      </Typography>
                      <br />
                      <Typography>
                        {afterDots}
                      </Typography>

                    </div>
                  </Link>

                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}