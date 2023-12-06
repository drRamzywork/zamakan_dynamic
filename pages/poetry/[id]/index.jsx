import { Box, Container, Link, Typography } from '@mui/material'
import React, { useRef } from 'react'
import imgs from '../../../assets/constants/imgs';
import { Navigation, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './index.module.scss'
import {
  LeftArrow,
  RightArrow,
  Check,
  Checked,
  Location
} from '@/assets/svgsComponents';
import Slider from '@/components/PoetryPageComponents/Slider'
import Head from 'next/head';
const Poetry = ({ dataPoetry, dataPlace, additionalData }) => {
  const { ra3y, Feather_big, place } = imgs;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [beforeDots, afterDots] = dataPoetry.poetryParts.split('...')
  const adjustImageUrl = (imageUrl) => {
    if (imageUrl?.startsWith('https')) {
      return imageUrl;
    } else {
      return `https://zamakan.suwa.io${imageUrl}`;
    }
  };

  { console.log(dataPoetry, 'dataPoetry') }
  return (
    <>

      <Head>
        <title>بيت الشعر</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="استكشف الشعراء
عبر العصور" />
        <meta name="description" content="شُعراء العصور الأَدبيّة في مَناطِق المملكة العربيّة السُّعوديّة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id={'poetry_page'} className={styles.poetry_page} dir='rtl'>
        <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
          <div className={styles.slider_container} >
            <div className={styles.sec_title}>
              <Typography variant='h3'>بيت الشعر</Typography>
            </div>
            <div className={styles.slider}>
              <Swiper
                modules={[Navigation,]}

                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                slidesPerView={1}

                dir='rtl'
                className={styles.swiper_container} >
                <SwiperSlide>


                  <div className={styles.box}>
                    <div className={styles.content_container}>

                      <div className={styles.img_container}>
                        <img src={Feather_big.src} alt="" />
                      </div>
                      <div className={styles.text_container}>
                        <Typography>
                          {beforeDots}
                        </Typography>
                        <span>... </span>
                        <Typography>{afterDots}</Typography>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>


                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.content_container}>

                      <div className={styles.img_container}>
                        <img src={Feather_big.src} alt="" />
                      </div>
                      <div className={styles.text_container}>
                        <Typography>مقيم على  <span>بنبان</span>    يمنع ماءه</Typography>
                        <span>... </span>
                        <Typography>وماء وشيع ماء عطشان مرمل</Typography>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.content_container}>

                      <div className={styles.img_container}>
                        <img src={Feather_big.src} alt="" />
                      </div>
                      <div className={styles.text_container}>
                        <Typography>مقيم على  <span>بنبان</span>    يمنع ماءه</Typography>
                        <span>... </span>
                        <Typography>وماء وشيع ماء عطشان مرمل</Typography>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>



              </Swiper>
              <Box ref={nextRef} className={styles.prevbtn} id={styles.swiperbtn}>
                <RightArrow />
              </Box>
              <Box ref={prevRef} className={styles.nextbtn} id={styles.swiperbtn}>
                <RightArrow />
              </Box>
            </div>
            <hr />
            <Link href={`/poet/${dataPoetry.poetId}`} className={styles.poet_info}>
              <div className={styles.img_container}>
                <img src={adjustImageUrl(dataPoetry.poetIcon)} alt={dataPoetry.poetName} />
              </div>
              <div className={styles.text_container}>
                <div className={styles.name}>
                  <Typography>
                    {dataPoetry.poetName}
                  </Typography>

                </div>
                <div className={styles.tag}>
                  <Typography>
                    {dataPoetry.zamanName}
                  </Typography>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.info_container}>
            <div className={styles.poet_info}  >
              <section className={styles.timelineSection}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>معلومات عن بيت الشعر</Typography>
                </div>

                <div className={styles.info_sec}>

                  <div className={styles.boxes_container}>

                    <div className={styles.box}>
                      <div className={styles.title}>
                        <Typography >العصر الأدبي </Typography>
                      </div>
                      <div className={styles.name}>
                        <Typography>{dataPoetry.zamanName}</Typography>
                      </div>
                    </div>
                    {/* <div className={styles.box}>
                      <div className={styles.title}>
                        <Typography>مطلع القصيدة</Typography>
                      </div>
                      <div className={styles.name}>
                        <Typography>شكيسنتبا</Typography>
                      </div>
                    </div> */}
                    <div className={styles.box}>
                      <div className={styles.title}>
                        <Typography>المكان المذكور ببيت الشعر</Typography>
                      </div>
                      <div className={styles.name}>
                        <Typography>{dataPoetry.placeName}</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles.timelineSection}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>مدخل البيت</Typography>
                </div>
                <div className={styles.sec_container}>
                  <div className={styles.desc}>
                    <Typography>
                      {dataPoetry.entrance}
                    </Typography>
                  </div>
                </div>
              </section>
              <section className={styles.timelineSection}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>المقصد من البيت</Typography>
                </div>

                <div className={styles.sec_container}>
                  <div className={styles.desc}>
                    <Typography>
                      {dataPoetry.meaning}
                    </Typography>
                  </div>
                </div>
              </section>


              <section className={styles.timelineSection}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>سبب كتابة الشاعر للبيت</Typography>
                </div>

                <div className={styles.sec_container}>
                  <div className={styles.desc}>
                    <Typography>
                      {dataPoetry.reason}
                    </Typography>
                  </div>
                </div>
              </section>



            </div >

            <div className={styles.place_info}>
              <div className={styles.container}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>
                    {dataPoetry.placeName}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>

                    {dataPlace?.descriptionShort}

                  </Typography>
                </div>
                <ul className={styles.list_container}>
                  <li>
                    <div className={styles.icon_container}>
                      <Checked />
                    </div>
                    <div className={styles.text_container}>
                      <div className={styles.name}>
                        <Typography>اسم المنطقة الحالي</Typography>
                      </div>
                      <div className={styles.answer}>
                        <Typography>{dataPlace?.name}</Typography>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon_container}>
                      <Checked />
                    </div>
                    <div className={styles.text_container}>
                      <div className={styles.name}>
                        <Typography>اسم المنطقة سابقًا</Typography>
                      </div>
                      <div className={styles.answer}>
                        <Typography>{dataPlace?.otherNames}</Typography>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon_container}>
                      <Check />
                    </div>
                    <div className={styles.text_container}>
                      <div className={styles.name}>
                        <Typography>وصف المنطقة</Typography>
                      </div>
                      <div className={styles.answer}>
                        <Typography>{dataPlace?.description}</Typography>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon_container}>
                      <Location />
                    </div>
                    <div className={styles.text_container}>
                      <div className={styles.name}>
                        <Typography>الموقع</Typography>
                      </div>
                      <div className={styles.answer}>
                        <Typography>{dataPlace?.site}</Typography>
                      </div>
                    </div>
                  </li>
                </ul>


                <div className={styles.imgs_container}>
                  <div className={styles.img_container}>
                    <img src={place.src} alt="" />
                  </div>
                  <div className={styles.img_container}>
                    <img src={place.src} alt="" />
                  </div>
                  <div className={styles.img_container}>
                    <img src={place.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section >

      <Slider additionalData={additionalData} />

    </>

  )
}

export default Poetry

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    // Fetch data from the poetry API
    const resPoetry = await fetch(`https://api4z.suwa.io/api/Poetries/GetPoetryFullData?id=${id}&lang=2`);
    if (!resPoetry.ok) {
      throw new Error(`Error fetching poetry data: ${resPoetry.status}`);
    }
    const dataPoetry = await resPoetry.json();

    let dataPlace = null;
    let additionalData = null;  // Initialize additional data

    // Check if placeId is available
    if (dataPoetry.placeId) {
      // Second API request using placeId
      const resPlace = await fetch(`https://api4z.suwa.io/api/Makan/GetMakanFullData?makan=${dataPoetry.placeId}&lang=2`);
      if (!resPlace.ok) {
        throw new Error(`Error fetching place data: ${resPlace.status}`);
      }
      dataPlace = await resPlace.json();

      // Third API request using placeId
      const resAdditional = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?place=${dataPoetry.placeId}&lang=2&pagenum=1&pagesize=50`);
      if (!resAdditional.ok) {
        throw new Error(`Error fetching additional data: ${resAdditional.status}`);
      }
      additionalData = await resAdditional.json();
    }

    return {
      props: {
        dataPoetry,
        dataPlace,
        additionalData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: error.message,
      },
    };
  }
}
