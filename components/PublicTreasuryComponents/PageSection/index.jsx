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
import { RotatingLines } from 'react-loader-spinner';


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
    setGalleryOpen(true);

    const initialLoadStates = data[index].gallery.reduce((acc, img) => {
      acc[img.id] = true;
      return acc;
    }, {});
    setImageLoadingStates(initialLoadStates);
  };


  useEffect(() => {
    if (activeIndex != null && swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex, galleryOpen]);

  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;
    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);
  };




  const [imageLoadingStates, setImageLoadingStates] = useState({});


  const handleImageLoad = cityId => {
    setImageLoadingStates(prev => ({ ...prev, [cityId]: false }));
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
              slidesPerView: 1,
              spaceBetween: 16,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1,
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
                <div className={styles.rotated_img}>
                  <img src={item.img} alt={item.title} />
                </div>

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
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                  className="mySwiper2"
                  pagination={{ clickable: true }}
                  dir="rtl"
                  centeredSlides={true}
                >
                  {data[activeIndex].gallery.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className={styles.box}>
                        <div className={styles.img_container}>
                          {imageLoadingStates[item.id] && (
                            <RotatingLines
                              strokeColor="grey"
                              strokeWidth="5"
                              animationDuration="0.75"
                              width="96"
                              visible={true}
                            />
                          )}
                          <Image
                            style={{ display: imageLoadingStates[item.id] ? 'none' : 'block' }}
                            onLoad={() => handleImageLoad(item.id)}
                            onError={(e) => {
                              console.error(`Error loading image: ${item.img}`);
                              handleImageLoad(item.id); // Set the image as loaded to remove the loader
                            }} width={318} height={183} src={item.img} alt={`Gallery Image ${index + 1}`} />

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