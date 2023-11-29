import { Container, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import styles from './index.module.scss'
import imgs from '@/assets/constants/imgs';
import Link from 'next/link';




const PoetsSlider = () => {
  const { ra3y, Feather_big, place } = imgs;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div id='simlar_poets' className={styles.simlar_poets}>


        <div className={styles.slider_container}>
          <div className={styles.slider}>
            <Swiper
              slidesPerView={1.3}
              spaceBetween={24}

              dir='rtl'
              className={styles.swiper_container} >
              <SwiperSlide>
                <div className={styles.box}>

                  <div className={styles.tag}>
                    <Typography>بنبان</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      مقيم على <span>بنبان</span> يمنع ماءه ... وماء وشيع ماء عطشان مرمل
                    </Typography>
                  </div>

                  <Link href='/poetry' className={styles.link_container}>
                    <Typography>تفاصيل القصيدة</Typography>

                    <div className={styles.icon_container}>
                      <HiArrowLeft />
                    </div>
                  </Link>
                  <hr />


                  <div className={styles.poet_info}>
                    <div className={styles.img_container}>
                      <img src={ra3y.src} alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <Link href='/poet' className={styles.name}>
                        <Typography>الراعي</Typography>
                      </Link>
                      <div className={styles.poet_tag}>
                        <Typography>
                          العصر الأموي
                        </Typography>

                      </div>
                    </div>
                  </div>





                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.box}>

                  <div className={styles.tag}>
                    <Typography>بنبان</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      مقيم على <span>بنبان</span> يمنع ماءه ... وماء وشيع ماء عطشان مرمل
                    </Typography>
                  </div>

                  <Link href='/poetry' className={styles.link_container}>
                    <Typography>تفاصيل القصيدة</Typography>

                    <div className={styles.icon_container}>
                      <HiArrowLeft />
                    </div>
                  </Link>
                  <hr />


                  <div className={styles.poet_info}>
                    <div className={styles.img_container}>
                      <img src={ra3y.src} alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <Link href='/poet' className={styles.name}>
                        <Typography>الراعي</Typography>
                      </Link>
                      <div className={styles.poet_tag}>
                        <Typography>
                          العصر الأموي
                        </Typography>

                      </div>
                    </div>
                  </div>





                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.box}>

                  <div className={styles.tag}>
                    <Typography>بنبان</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      مقيم على <span>بنبان</span> يمنع ماءه ... وماء وشيع ماء عطشان مرمل
                    </Typography>
                  </div>

                  <Link href='/poetry' className={styles.link_container}>
                    <Typography>تفاصيل القصيدة</Typography>

                    <div className={styles.icon_container}>
                      <HiArrowLeft />
                    </div>
                  </Link>
                  <hr />


                  <div className={styles.poet_info}>
                    <div className={styles.img_container}>
                      <img src={ra3y.src} alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <Link href='/poet' className={styles.name}>
                        <Typography>الراعي</Typography>
                      </Link>
                      <div className={styles.poet_tag}>
                        <Typography>
                          العصر الأموي
                        </Typography>

                      </div>
                    </div>
                  </div>





                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.box}>

                  <div className={styles.tag}>
                    <Typography>بنبان</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      مقيم على <span>بنبان</span> يمنع ماءه ... وماء وشيع ماء عطشان مرمل
                    </Typography>
                  </div>

                  <Link href='/poetry' className={styles.link_container}>
                    <Typography>تفاصيل القصيدة</Typography>

                    <div className={styles.icon_container}>
                      <HiArrowLeft />
                    </div>
                  </Link>
                  <hr />


                  <div className={styles.poet_info}>
                    <div className={styles.img_container}>
                      <img src={ra3y.src} alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <Link href='/poet' className={styles.name}>
                        <Typography>الراعي</Typography>
                      </Link>
                      <div className={styles.poet_tag}>
                        <Typography>
                          العصر الأموي
                        </Typography>

                      </div>
                    </div>
                  </div>





                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.box}>

                  <div className={styles.tag}>
                    <Typography>بنبان</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      مقيم على <span>بنبان</span> يمنع ماءه ... وماء وشيع ماء عطشان مرمل
                    </Typography>
                  </div>

                  <Link href='/poetry' className={styles.link_container}>
                    <Typography>تفاصيل القصيدة</Typography>

                    <div className={styles.icon_container}>
                      <HiArrowLeft />
                    </div>
                  </Link>
                  <hr />


                  <div className={styles.poet_info}>
                    <div className={styles.img_container}>
                      <img src={ra3y.src} alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <Link href='/poet' className={styles.name}>
                        <Typography>الراعي</Typography>
                      </Link>
                      <div className={styles.poet_tag}>
                        <Typography>
                          العصر الأموي
                        </Typography>

                      </div>
                    </div>
                  </div>





                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.box}>

                  <div className={styles.tag}>
                    <Typography>بنبان</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      مقيم على <span>بنبان</span> يمنع ماءه ... وماء وشيع ماء عطشان مرمل
                    </Typography>
                  </div>

                  <Link href='/poetry' className={styles.link_container}>
                    <Typography>تفاصيل القصيدة</Typography>

                    <div className={styles.icon_container}>
                      <HiArrowLeft />
                    </div>
                  </Link>
                  <hr />


                  <div className={styles.poet_info}>
                    <div className={styles.img_container}>
                      <img src={ra3y.src} alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <Link href='/poet' className={styles.name}>
                        <Typography>الراعي</Typography>
                      </Link>
                      <div className={styles.poet_tag}>
                        <Typography>
                          العصر الأموي
                        </Typography>

                      </div>
                    </div>
                  </div>





                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.box}>

                  <div className={styles.tag}>
                    <Typography>بنبان</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      مقيم على <span>بنبان</span> يمنع ماءه ... وماء وشيع ماء عطشان مرمل
                    </Typography>
                  </div>

                  <Link href='/poetry' className={styles.link_container}>
                    <Typography>تفاصيل القصيدة</Typography>

                    <div className={styles.icon_container}>
                      <HiArrowLeft />
                    </div>
                  </Link>
                  <hr />


                  <div className={styles.poet_info}>
                    <div className={styles.img_container}>
                      <img src={ra3y.src} alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <Link href='/poet' className={styles.name}>
                        <Typography>الراعي</Typography>
                      </Link>
                      <div className={styles.poet_tag}>
                        <Typography>
                          العصر الأموي
                        </Typography>

                      </div>
                    </div>
                  </div>





                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.box}>

                  <div className={styles.tag}>
                    <Typography>بنبان</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      مقيم على <span>بنبان</span> يمنع ماءه ... وماء وشيع ماء عطشان مرمل
                    </Typography>
                  </div>

                  <Link href='/poetry' className={styles.link_container}>
                    <Typography>تفاصيل القصيدة</Typography>

                    <div className={styles.icon_container}>
                      <HiArrowLeft />
                    </div>
                  </Link>
                  <hr />


                  <div className={styles.poet_info}>
                    <div className={styles.img_container}>
                      <img src={ra3y.src} alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <Link href='/poet' className={styles.name}>
                        <Typography>الراعي</Typography>
                      </Link>
                      <div className={styles.poet_tag}>
                        <Typography>
                          العصر الأموي
                        </Typography>

                      </div>
                    </div>
                  </div>





                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.box}>

                  <div className={styles.tag}>
                    <Typography>بنبان</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      مقيم على <span>بنبان</span> يمنع ماءه ... وماء وشيع ماء عطشان مرمل
                    </Typography>
                  </div>

                  <Link href='/poetry' className={styles.link_container}>
                    <Typography>تفاصيل القصيدة</Typography>

                    <div className={styles.icon_container}>
                      <HiArrowLeft />
                    </div>
                  </Link>
                  <hr />


                  <div className={styles.poet_info}>
                    <div className={styles.img_container}>
                      <img src={ra3y.src} alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <Link href='/poet' className={styles.name}>
                        <Typography>الراعي</Typography>
                      </Link>
                      <div className={styles.poet_tag}>
                        <Typography>
                          العصر الأموي
                        </Typography>

                      </div>
                    </div>
                  </div>





                </div>
              </SwiperSlide>




            </Swiper>

          </div>
        </div>

      </div>
    </>
  )
}

export default PoetsSlider