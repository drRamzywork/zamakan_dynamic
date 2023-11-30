import { Container, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import styles from './index.module.scss'
import imgs from '@/assets/constants/imgs';
import Link from 'next/link';




const Slider = () => {
  const { ra3y, Feather_big, place } = imgs;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section id='simlar_poets' className={styles.simlar_poets}>
        <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
          <div className={styles.sec_title}>
            <Typography variant='h3'>
              شعراء آخرون تحدثوا عن المكان
            </Typography>
          </div>
        </Container>

        <Container maxWidth={false} sx={{ maxWidth: "1400px" }} className='disable_container'>
          <div className={styles.slider_container}>
            <div className={styles.slider}>
              <Swiper
                slidesPerView={3.3}
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
        </Container>

      </section>
    </>
  )
}

export default Slider