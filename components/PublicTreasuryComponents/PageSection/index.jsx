import { Button, Container, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Pagination } from 'swiper/modules';
import styles from './index.module.scss'
import Link from 'next/link';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import { useTranslation } from 'next-i18next';


const PageSection = ({ title, AllMainTopics, data = [] }) => {
  // Thumbs logic
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");
  const [backgroundFullScreen, setBackgroundFullScreen] = useState("");
  const [ImagesGallery, setImagesGallery] = useState("");

  const { t } = useTranslation('common');

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const openGallery = (topicIndex, sliderIndex) => {
    setActiveIndex(sliderIndex);
    setGalleryOpen(true);

    const selectedTopic = AllMainTopics[topicIndex];
    const selectedSlider = selectedTopic.sliders[sliderIndex];

    setBackgroundFullScreen(selectedSlider.imagesVideos.split(',')[0]);
    setImagesGallery(selectedSlider.imagesVideos.split(','));
  };






  const handleImageLoad = cityId => {
    setImageLoadingStates(prev => ({ ...prev, [cityId]: false }));
  };

  useEffect(() => {
    if (data[activeIndex] && data[activeIndex].gallery.length > 0) {
      setBackgroundImageUrl(data[activeIndex].gallery[0].img); // Assuming the first image is the default
    }
  }, [activeIndex, data]);

  const imgRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (imgRef.current && !imgRef.current.contains(event.target)) {
        setGalleryOpen(false);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [imgRef]);



  const parseMedia = (mediaString) => {
    return mediaString?.split(',')?.map(mediaUrl => {
      const isVideo = mediaUrl.endsWith('.mp4');

      return { url: mediaUrl, isVideo };
    });


  };
  const getFirstMediaUrl = (mediaString) => {

    return mediaString?.split(',')[0];
  };


  return (
    <>
      {AllMainTopics.map((topic, topicIndex) =>
        <section id={title} className={styles.section} key={topicIndex}>
          <div className={styles.sec_title}>
            <Typography variant="h3" >
              {topic.name}
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

              {topic?.sliders?.map((item, sliderIndex) => (
                <SwiperSlide key={sliderIndex} >
                  <div className={styles.box_sec}>
                    <div className={styles.rotated_img}>
                      <img src={getFirstMediaUrl(item?.imagesVideos)} alt={item?.name} />
                    </div>
                    <div className={styles.img_container} onClick={() => openGallery(topicIndex, sliderIndex)}>
                      {parseMedia(item?.imagesVideos)?.map((media, mediaIndex) => (
                        <div key={mediaIndex}
                          className={media.isVideo ? styles.video_container : styles.img_container}
                          onClick={() => openGallery(topicIndex, sliderIndex, mediaIndex)}>
                          {media.isVideo ? (
                            <video src={media.url} controls></video>
                          ) : (
                            <img src={media.url} alt={item.name} />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className={styles.title}>
                      <Typography variant="h4">{item.name}</Typography>
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
                    <img src={backgroundFullScreen} alt='' />
                  </div>


                  <Container
                    ref={imgRef}

                    className={styles.gallery_container} sx={{ maxWidth: "1400px" }} maxWidth={false}>
                    <Button onClick={closeGallery} className={styles.close_btn}>
                      <IoClose />

                    </Button>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={16}
                      navigation={true}
                      modules={[FreeMode, Navigation, Thumbs, Pagination]}
                      className="gallery-swiper"
                      pagination={{ clickable: true }}
                      dir="rtl"
                      centeredSlides={true}
                      ref={swiperRef}

                    >
                      {ImagesGallery?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className={styles.box}>
                            <div className={styles.img_container}>
                              {/* Check if the item is a video or an image */}
                              {item.endsWith('.mp4') ? (
                                // Render a video tag for mp4 files
                                <video
                                  style={{ display: imageLoadingStates[item.id] ? 'none' : 'block' }}
                                  onLoadedData={() => handleImageLoad(item.id)}
                                  onError={(e) => {
                                    console.error(`Error loading video: ${item}`);
                                    handleImageLoad(item.id); // Set the video as loaded to remove the loader
                                  }}
                                  controls
                                >
                                  <source src={item} type="video/mp4" />
                                </video>
                              ) : (
                                // Render an image tag for image files
                                <img
                                  style={{ display: imageLoadingStates[item.id] ? 'none' : 'block' }}
                                  onLoad={() => handleImageLoad(item.id)}
                                  onError={(e) => {
                                    console.error(`Error loading image: ${item}`);
                                    handleImageLoad(item.id);
                                  }}
                                  src={item}
                                  alt={`Gallery Image ${index + 1}`}
                                />
                              )}
                            </div>
                          </div>
                        </SwiperSlide>

                      ))}



                    </Swiper>
                  </Container>

                </motion.div>



              )}



            <div className={styles.more_btn}>
              <Link href={`/public-treasury/${topic.id}`} >{t('readMore')}</Link>
            </div>

          </motion.div>



        </section >
      )}
    </>

  )
}

export default PageSection
