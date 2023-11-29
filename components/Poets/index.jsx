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
  console.log(cityNames)
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
    const elementId = `land-${index}`;
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(elementId);
    }
    setActiveIndex(index); // Set the active index
    seIsPointsActive(false)
  };

  useEffect(() => {
    const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
    const elementsWithLandClassOnly = document.querySelectorAll('.land:not(.activeLand)');

    if (activeLand) {
      activeLand.classList.remove('activeLand');
      seIsPointsActive(false)


    }

    if (dataIndex) {
      setActiveLand(dataIndex);
      dataIndex.classList.add('activeLand');
      seIsPointsActive(true)
    }

    if (isPointsActive === true) {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.add('hiddenPoints');
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
                spaceBetween={24}
                slidesPerView={8.5}
                dir={'rtl'}
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
                  </Typography>

                  <Link href='/city' className={styles.more}>
                    <Typography>
                      المزيد عن كثير عزة
                    </Typography>

                    <div className={styles.icon_container}>
                      <LeftArrow />
                    </div>
                  </Link>
                </div>
              </div>
            }
            <div className={styles.svg_wrap}>
              <div id='map-boxes'>
                <TransformWrapper
                  ref={transformComponentRef}
                  wheel={{ wheelDisabled: true }}
                  initialPositionX={0}
                  initialPositionY={0}
                  pan={{ disabled: false }}
                  zoomIn={{ step: 100 }}
                  zoomOut={{ step: 100 }}

                  minScale={0.5}
                  maxScale={2}
                  initialScale={1}

                  doubleClick={{ disabled: false, mode: "reset" }}
                  wrapperStyle={{ maxWidth: "100%", maxHeight: "calc(100vh - 50px)" }}

                >
                  <>
                    <TransformComponent>
                      <Svg />
                    </TransformComponent>
                  </>

                </TransformWrapper >



              </div >
            </div>

          </div>

        </Container>
      </section >





    </>

  )
}

export default Poets