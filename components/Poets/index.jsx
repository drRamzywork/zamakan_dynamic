import { Container, Typography, Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import localFont from 'next/font/local'
// import Carousel from 'react-elastic-carousel';
import styles from './index.module.scss'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import imgs from '../../assets/constants/imgs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PoetryIn from '../PoetryIn'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Svg from '../SVGParts/Svg'
import { LeftArrow } from '@/assets/svgsComponents'
import Link from 'next/link'

const Effra = localFont({
  src: [
    {
      path: '../../fonts/Effra_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const Poets = () => {
  const [activePoet, setActivePoet] = useState(null);
  const { ra3y1 } = imgs;

  const slides = [
    { name: "كثير عزة", imageSrc: ra3y1.src },
    { name: "الأخطل", imageSrc: ra3y1.src },
    { name: "الأعشى", imageSrc: ra3y1.src },
    { name: "الراعي", imageSrc: ra3y1.src },
    { name: "الطرماح بن حكيم", imageSrc: ra3y1.src },
    { name: "الفرزدق", imageSrc: ra3y1.src },
    { name: "الكميت بن زيد", imageSrc: ra3y1.src },
    { name: "جرير", imageSrc: ra3y1.src },
    { name: "جرير", imageSrc: ra3y1.src },
    { name: "جرير", imageSrc: ra3y1.src },
    { name: "جرير", imageSrc: ra3y1.src },
    { name: "جرير", imageSrc: ra3y1.src },
  ];


  const [landElments, setLandElemnts] = useState([])
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState(null);

  const [isPointsActive, seIsPointsActive] = useState(false);

  const [cityNames, setCityNames] = useState([]);
  useEffect(() => {
    // Select all elements with the class name .land
    const elements = document.querySelectorAll('.land');
    const city = document.querySelectorAll('.city-name');
    setCityNames(city)
    setLandElemnts(elements)

    // Add dynamic IDs to the selected elements
    elements.forEach((element, index) => {
      element.setAttribute('id', `land-${index}`);
    });
  }, []);

  const transformComponentRef = useRef(null);

  useEffect(() => {
    if (activePoet === null) {
      cityNames.forEach(cityName => {
        cityName.style.display = 'none';
      });
    } else {
      cityNames.forEach(cityName => {
        cityName.style.display = '';
      });
    }
  }, [activePoet, cityNames]);



  const handleBoxClick = (index) => {
    setActivePoet(index);

    setActiveIndex(index); // Set the active index
    seIsPointsActive(false)
  };

  useEffect(() => {
    const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
    const elementsWithLandClassOnly = document.querySelectorAll('.land:not(.activeLand)');



    if (isPointsActive === true) {
      elementsWithLandClassOnly.forEach((element, index) => {
        // Only add 'hiddenPoints' to the first five elements
        if (index < 5) {
          element.classList.add('hiddenPoints');
        }
      });
    } else {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.remove('hiddenPoints');
      });

    }

  }, [activeIndex, activeLand])



  return (
    <>
      < section id='Poets' className={styles.Poets} style={...Effra.style} dir='rtl'>
        <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >
          <div className={styles.sec_container}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>
                شعراء العصر
              </Typography>
            </div>

            <div className={styles.tags_slider} id='carosuel'>

              <Swiper
                breakpoints={{
                  300: {
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                  },
                  400: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  414: {
                    slidesPerView: 3.5,
                    spaceBetween: 11,
                  },
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 8.5,
                    spaceBetween: 24,

                  },
                }}
                spaceBetween={24}
                slidesPerView={8.5}
                dir={'rtl'}
                className={styles.swiper_container}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index} className={styles.swiper_slide_box}>
                    <div onClick={() => handleBoxClick(index)} className={`${styles.box_container} `}>
                      <div className={`${styles.box} ${activePoet === index ? styles.active : ''}`}>
                        <div className={styles.img_container}>
                          <img src={slide.imageSrc} alt={slide.name} />
                        </div>
                        <div className={styles.name}>
                          <Typography>{slide.name}</Typography>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>


            </div>


            {activePoet !== null &&
              <div className={styles.poetInfo}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {slides[activePoet].name}
                  </Typography>

                  <div className={styles.tag}>
                    <Typography>صناجة العرب</Typography>
                  </div>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    شاعر عظيم من أصحاب المعلقات، كان غزير الشعر، وفد إلى الملوك مادحاً، وكان أول المتكسبين بالشعر ، غنَّى شعرَه، وعمي في آخر حياته، توفي سنة 7ه/629م.
                    <Link href='/poet' className={styles.more}>
                      <Typography>
                        المزيد عن كثير عزة
                        <div className={styles.icon_container}>
                          <LeftArrow />
                        </div>
                      </Typography>

                    </Link>
                  </Typography>

                </div>
              </div>
            }
            <div className={styles.svg_wrap}>
              <div id='map-boxes'>

                <Svg />




              </div >
            </div>

          </div>

        </Container>
      </section >





    </>

  )
}

export default Poets