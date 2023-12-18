import { Button, Container, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Pagination } from 'swiper/modules';
import styles from './index.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";


const PageSection = ({ title, data = [] }) => {
  // Thumbs logic
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);


  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const openGallery = (index) => {
    setActiveIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setGalleryOpen(true);
  };


  useEffect(() => {
    if (activeIndex != null && swiperRef.current) {
      const index = data.findIndex(city => city.id === activeIndex);
      if (index !== -1) {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  }, [activeIndex]);







  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;
    const newIndex = swiper.realIndex;
    const newActiveCity = data[newIndex].id;
    setActiveIndex(newActiveCity);
  };






  return (
    <section id={title} className={styles.section}>
      <div className={styles.sec_title}>
        <Typography variant="h3" >
          {title}
        </Typography>
      </div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, }} className={styles.swiper_container}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          dir='rtl'
          onSlideChange={handleSlideChange}
          ref={swiperRef}

          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            400: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,

            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 16,

            },
            1800: {
              slidesPerView: 3,
              spaceBetween: 16,

            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} onClick={() => openGallery(index)}>

              <div className={styles.box}>
                <div className={styles.img_container}>
                  <Image width={318} height={183} src={item.img} alt={item.title} />
                </div>

                <div className={styles.title}>
                  <Typography variant="h4">{item.title}</Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {
          galleryOpen &&
          (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, }} className={styles.fullscreengallery}>
              <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
                <Button onClick={closeGallery} className={styles.close_btn}>
                  <IoClose />

                </Button>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={16}
                  navigation={true}
                  modules={[FreeMode, Navigation, Thumbs, Pagination]} // 
                  className="mySwiper2"
                  pagination={{ clickable: true }}
                  dir="rtl"
                  centeredSlides={true}
                  initialSlide={activeIndex}
                >
                  {data && data.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className={styles.box}>
                        <div className={styles.img_container}>
                          <Image width={318} height={183} src={item.img} alt={item.title} />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Container>

            </motion.div>



          )}
        <div className={styles.more_btn}>
          <Link href='/' >المزيد</Link>
        </div>

      </motion.div>



    </section>
  )
}

export default PageSection