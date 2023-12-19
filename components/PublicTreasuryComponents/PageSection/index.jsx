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
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  const [activeImgURL, setActiveImgURL] = useState(false);
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


  const handleImageLoad = cityId => {
    console.log(cityId)
    setImageLoadingStates(prev => ({ ...prev, [cityId]: false }));
  };
  // useEffect(() => {
  //   if (data[activeIndex] && data[activeIndex].gallery.length > 0) {
  //     setBackgroundImageUrl(data[activeIndex].gallery[0].img); // Assuming the first image is the default
  //   }
  // }, [activeIndex, data]);

  // useEffect(() => {
  //   // Check if data is available and activeIndex is within the range
  //   if (data && data.length > activeIndex && data[activeIndex].gallery.length > 0) {
  //     // Set the background image URL to the image of the active slide
  //     setBackgroundImageUrl(data[activeIndex].gallery[0].img);
  //   }
  // }, [activeIndex, data]);


  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const onSlideChange = () => {
        const currentIndex = swiperInstance.activeIndex;
        setActiveImgURL(data[activeIndex].gallery[0].img)
        // if (data && data.length > currentIndex && data[currentIndex].gallery.length > 0) {
        // }
      };

      swiperInstance.on('slideChange', onSlideChange);

      return () => {
        // Cleanup listener when component unmounts or dependencies change
        swiperInstance.off('slideChange', onSlideChange);
      };
    }

    console.log(activeImgURL, "activeImgURL")

  }, [swiperRef, data]); // Add any other dependencies if needed

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
                  <Image width={318} height={183} src={item.img} alt={item.title} />
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
              transition={{ duration: 1 }}
              className={styles.fullscreengallery}
            >
              <div className={styles.gallery_wrap}>
                <Image width={300} height={300}
                  quality={10}
                  layout="fixed"

                  src={activeImgURL} alt='' />
              </div>


              <Container className={styles.gallery_container} sx={{ maxWidth: "1400px" }} maxWidth={false}>
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
                  ref={swiperRef}

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
                            width={300}
                            height={300}
                            style={{ display: imageLoadingStates[item.id] ? 'none' : 'block' }}
                            onLoad={() => handleImageLoad(item.id)}
                            onError={(e) => {
                              console.error(`Error loading image: ${item.img}`);
                              handleImageLoad(item.id); // Set the image as loaded to remove the loader
                            }} src={item.img} alt={`Gallery Image ${index + 1}`} />

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