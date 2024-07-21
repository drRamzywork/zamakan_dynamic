import { Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, } from 'framer-motion';
import stylesMain from '../index.module.scss'
// import styles from '../../../components/PublicTreasuryComponents/PageSection/index.module.scss';
import stylesPage from './index.module.scss'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination'
import { IoClose } from "react-icons/io5";
import { useRouter } from 'next/router';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Treasury = ({ sectionData }) => {
  const router = useRouter();
  const sectionPageData = sectionData[0];
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [ImagesGallery, setImagesGallery] = useState("");
  const [backgroundFullScreen, setBackgroundFullScreen] = useState("");

  const openGallery = (index) => {
    setGalleryOpen(true);

    setBackgroundFullScreen(sectionPageData?.sliders[index]?.imagesVideos?.split(',')[0])
    setImagesGallery(sectionPageData?.sliders[index]?.imagesVideos?.split(','))
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const parseMedia = (mediaString) => {
    return mediaString?.split(',')?.map(mediaUrl => {
      const isVideo = mediaUrl.endsWith('.mp4');

      return { url: mediaUrl, isVideo };
    });


  };

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

  return (
    <>
      <Head>
        <title>{sectionPageData.name}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="عام الشعر العربي 2023" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="استكشف الشعراء عبر العصور التاريخية الأدبية"
        />
        <meta property="og:description" content="عام الشعر العربي 2023" />
        <meta
          property="og:image"
          content="https://zamakanwebnew.suwa.io/logo_mobile_footer.png"
        />
        <meta property="og:url" content="https://zamakanwebnew.suwa.io" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="استكشف الشعراء عبر مناطق المملكة العربية السعودية"
        />
        <meta name="twitter:description" content="عام الشعر العربي 2023" />
        <meta
          name="twitter:image"
          content={sectionPageData.icon}
        />
      </Head>


      <header id={stylesMain.header}>
        <div className={stylesMain.sec_title}>
          <div className={stylesMain.img_container}>
            <img src={"/assets/imgs/star.png"} alt="star" />
          </div>

          <Typography variant='h1'>
            {sectionPageData.name}
          </Typography>

          <div className={stylesMain.img_container}>
            <img src={"/assets/imgs/star.png"} alt="star" />
          </div>
        </div>


      </header>

      <Container maxWidth={false} >
        <section id={sectionPageData.name} className={stylesMain.section} >

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }} className={stylesMain.boxes_container}>
            {sectionPageData.sliders.map((item, index) =>

              <div className={stylesMain.box}>
                <div className={stylesMain.rotated_img}>
                  <img src={(item?.imagesVideos).split(',')[0]} alt={item?.name} />
                </div>

                <div className={stylesMain.img_container} onClick={() => openGallery(index)}>

                  {parseMedia(item?.imagesVideos)?.map((media, mediaIndex) => (
                    <div key={mediaIndex} className={`${stylesMain.img_container} `} onClick={() => openGallery(index)}>

                      <img src={media.url} alt={item.name} />
                    </div>
                  ))}


                </div>

                <div className={stylesMain.title}>
                  <Typography variant="h4">{item.name}</Typography>
                </div>

              </div>
            )}

            {
              galleryOpen && (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className={stylesMain.fullscreengallery}
                >
                  <div className={stylesMain.gallery_wrap}>
                    <img src={backgroundFullScreen} alt='' />
                  </div>

                  <Container
                    ref={imgRef} className={stylesMain.gallery_container} sx={{ maxWidth: "1400px" }} maxWidth={false}>

                    <Button onClick={closeGallery} className={stylesMain.close_btn}>
                      <IoClose />
                    </Button>

                    <Swiper
                      slidesPerView={1}
                      spaceBetween={16}
                      navigation={true}
                      modules={[FreeMode, Navigation, Thumbs, Pagination]}
                      className='gallery-swiper'
                      pagination={{ clickable: true }}
                      dir="rtl"
                      centeredSlides={true}
                    >

                      {ImagesGallery?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className={stylesMain.box}>
                            <div className={stylesMain.img_container}>

                              {item.endsWith('.mp4') ? (
                                // Render a video tag for mp4 files
                                <video

                                  controls
                                >
                                  <source src={item} type="video/mp4" />
                                </video>
                              ) : (
                                <Image

                                  src={item}
                                  alt={`Gallery Image ${index + 1}`}
                                  layout="fill"
                                  objectFit="cover"
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




          </motion.div>



        </section >




        <section id='footer' className={stylesPage.footer} >
          <div className={stylesPage.imgs_container}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, type: "tween" }} className={stylesPage.middle} >
              {router.query.id === '1' &&
                <img src={"/assets/imgs/docs_1.png"} alt="" />
              }
              {router.query.id === '2' &&
                <img src={"/assets/imgs/docs_2.png"} alt="" />
              }
              {router.query.id === '3' &&
                <img src={"/assets/imgs/docs_3.png"} alt="" />
              }
            </motion.div>

          </div>

        </section>
      </Container>

    </>
  )
}

export default Treasury

export async function getStaticPaths() {


  const response = await fetch('https://api4z.suwa.io/api/Media/GetAllMainTopics?lang=2&withPlaces=true&pagenum=1&pagesize=50');


  const data = await response.json();
  const ids = data.map((topic) => topic.id)
  // Generate the paths
  const paths = ids.map(id => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, locale }) {
  const { id } = params;
  const langIdEnvKey = `LANG_ID_${locale?.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];




  const resPageData = await fetch(`https://api4z.suwa.io/api/Media/GetAllMainTopics?lang=${langId}&withPlaces=true&pagenum=1&pagesize=50`);
  const dataPageData = await resPageData.json();

  const numericId = parseInt(id, 10);
  const sectionData = dataPageData.filter((topic) => topic.id === numericId);

  return {
    props: {
      sectionData,
      ...(await serverSideTranslations(locale, ["common"])),

    },
    revalidate: 10,
  };
}