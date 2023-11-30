import { Box, Container, Link, Typography } from '@mui/material'
import React, { useRef } from 'react'
import imgs from '../../assets/constants/imgs';
import { Navigation, Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import styles from './index.module.scss'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  LeftArrow,
  RightArrow,
  Check,
  Checked,
  Location
} from '@/assets/svgsComponents';
import Slider from '@/components/PoetryPageComponents/Slider'
const Poetry = () => {
  const { ra3y, Feather_big, place } = imgs;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
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
            <div className={styles.poet_info}>
              <div className={styles.img_container}>
                <img src={ra3y.src} alt="" />
              </div>
              <div className={styles.text_container}>
                <div className={styles.name}>
                  <Typography>
                    كثير عزة
                  </Typography>

                </div>
                <Link href='/poet' >
                  <div className={styles.tag}>
                    <Typography>العصر الأموي</Typography>
                  </div>
                </Link>
              </div>
            </div>
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
                        <Typography>العصر الأموي</Typography>
                      </div>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.title}>
                        <Typography>مطلع القصيدة</Typography>
                      </div>
                      <div className={styles.name}>
                        <Typography>شكيسنتبا</Typography>
                      </div>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.title}>
                        <Typography>المكان المذكور ببيت الشعر</Typography>
                      </div>
                      <div className={styles.name}>
                        <Typography>بنبان</Typography>
                      </div>
                    </div>
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
                      ينحدر بنبان نحو الشرق حيث يصب سيله في الروضة المسماة باسمه «روضة بنبان»، وإذا فاض ماء الروضة انحدر جنوباً نحو روضة العقلة، ثم روضة المونسية، ثم روضة الجنادرية التي ينحدر إليها أيضاً واديان صغيران هما: «أبا الجرفان» وأبا الهليم، وهما وسط منطقة المطار الآن
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
                      ينحدر بنبان نحو الشرق حيث يصب سيله في الروضة المسماة باسمه «روضة بنبان»، وإذا فاض ماء الروضة انحدر جنوباً نحو روضة العقلة، ثم روضة المونسية، ثم روضة الجنادرية التي ينحدر إليها أيضاً واديان صغيران هما: «أبا الجرفان» وأبا الهليم، وهما وسط منطقة المطار الآن                    </Typography>
                  </div>
                </div>
              </section>



            </div >

            <div className={styles.place_info}>
              <div className={styles.container}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>بنبان</Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>تعد قرية بنبان المفضلة لسكان العاصمة للتوجه والتنزه بها كونها تضم مزارع قديمة وشعيباً يحمل اسم القرية يشتهر بجريانه عند نزول الأمطار.</Typography>
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
                        <Typography>حي بنبان</Typography>
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
                        <Typography>قرية بنبان القديمة</Typography>
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
                        <Typography>تعتبر أحدث أحياء العاصمة، حيث تشتهر بمظهرها الصحراوي الجذاب، إذ تعد وجهة سياحية جديدة، بضمها 11 فندقًا، ومن أهم مناطقها، متنزه الأمير سلمان البري.</Typography>
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
                        <Typography>تبعد عن الرياض نحو 25 كيلومترًا شمالًا</Typography>
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

      <Slider />

    </>

  )
}

export default Poetry