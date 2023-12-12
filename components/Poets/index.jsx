import { Container, Typography, Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import localFont from 'next/font/local'
import styles from './index.module.scss'
import imgs from '../../assets/constants/imgs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Svg from '../SVGParts/Svg'
import { LeftArrow, CloseIcon } from '@/assets/svgsComponents'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import PoetsSlider from '../PoetsSlider';



const Poets = ({ dataPoetsByEra, dataAllCitiesMap }) => {
  const [activePoet, setActivePoet] = useState(null);
  const { ra3y1, smallCity } = imgs;

  const [activeCity, setActiveCity] = useState(null);


  const [landElments, setLandElemnts] = useState([])
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPointsActive, seIsPointsActive] = useState(false);
  const [cityNames, setCityNames] = useState([]);
  const [places, setPlaces] = useState(null);
  const [isCityLoading, setIsCityLoading] = useState(false);


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


  const handleBoxClick = (poetID) => {
    setCityData(null);
    setActivePoet(poetID);
    setActiveIndex(poetID); // Set the active index
    seIsPointsActive(false)

  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {

    // Detect Safari browser
    setIsSafari(navigator.vendor.includes("Apple"));


  }, []);



  const convertSVGPathsToJSX = (svgString) => {
    const paths = svgString.split("</path>");
    return paths.map((path, index) => (
      <g key={index} dangerouslySetInnerHTML={{ __html: path + "</path>" }} />
    ));
  };




  const [cityData, setCityData] = useState(null)
  const [poetriesData, setPoetriesData] = useState(null)



  const handlePlaceWindow = async (placeId) => {
    setActiveCity(placeId);
    try {
      const response = await fetch(`/api/fetchCityData?placeId=${placeId}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const { cityData, poetryData } = await response.json();

      setCityData(cityData);
      setPoetriesData(poetryData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setIsCityLoading(false)
  };





  const handlePoetData = async (poetID) => {
    const resPoetPlaces = await fetch(`https://api4z.suwa.io/api/Makan/GetAllPlaces?poet=${poetID}&lang=2&pagenum=1&pagesize=50`);
    const dataPoetPlaces = await resPoetPlaces.json();

    setPlaces(dataPoetPlaces)
  }


  const popUpRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setCityData(null);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popUpRef]);


  return (
    <>
      < section id='Poets' className={styles.Poets} dir='rtl'>
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
                    slidesPerView: 2.4,
                    spaceBetween: 10,
                  },
                  400: {
                    slidesPerView: 2.4,
                    spaceBetween: 10,
                  },
                  414: {
                    slidesPerView: 2.8,
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
                {
                  Array.isArray(dataPoetsByEra) &&
                  dataPoetsByEra?.map((poet, index) => (
                    <SwiperSlide key={index} onClick={() => handlePoetData(poet.id)} className={styles.swiper_slide_box}>
                      <div onClick={() => handleBoxClick(index)} className={`${styles.box_container} `}>
                        <div className={`${styles.box} ${activePoet === index ? styles.active : ''}`}>
                          <div className={styles.img_container}>
                            <img src={poet.icon} alt={poet.name} />
                          </div>
                          <div className={styles.name}>
                            <Typography>{poet.name}</Typography>
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
                    {dataPoetsByEra[activePoet]?.name}
                  </Typography>
                  {
                    dataPoetsByEra[activePoet]?.nickname !== null &&
                    <div className={styles.tag}>
                      <Typography>
                        {dataPoetsByEra[activePoet]?.nickname}
                      </Typography>
                    </div>
                  }
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {dataPoetsByEra[activePoet]?.descShort}
                    <Link href={`/poet/${dataPoetsByEra[activePoet]?.id}`} className={styles.more}>
                      <Typography>
                        المزيد عن {dataPoetsByEra[activePoet]?.name}
                        <div className={styles.icon_container}>
                          <LeftArrow />
                        </div>
                      </Typography>

                    </Link>
                  </Typography>

                </div>
              </div>
            }

            <div className={styles.svg_wrap} dir='ltr'>
              <div id='map-boxes'>

                <xml version="1.0" encoding="UTF-8" standalone="no" />
                <svg
                  id="svg1"
                  width="858"
                  height="724"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${isSafari ? "saudi-map safari" : "saudi-map"}`}
                  viewBox="90 90 758 624"
                >
                  {dataAllCitiesMap?.map((land, index) => (
                    <g className="land" key={index} id={land.svgPathId} >
                      {convertSVGPathsToJSX(land.svgPath)}
                    </g>
                  ))}
                  {
                    places?.map((place, index) =>
                      <foreignObject x={place.svgX} y={place.svgY} width="100" height="100" id="1" key={place.id}>
                        <div className="city-container" xmlns="http://www.w3.org/1999/xhtml">
                          <div onClick={() => handlePlaceWindow(place.id)}

                            className={`city-name ${activeCity === place.id ? 'active' : ''}`} id="p1">

                            <div>
                              <p>{place.name}</p>
                              <svg
                                width="15"
                                height="6"
                                viewBox="0 0 15 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.956299 0.882812H14.8405H12.9973C11.8578 0.882812 10.8162 1.52659 10.3066 2.54573L9.14027 4.87844C8.6286 5.90177 7.16825 5.90178 6.65658 4.87844L5.49023 2.54573C4.98065 1.52659 3.939 0.882812 2.79956 0.882812H0.956299Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                    )}
                </svg>

              </div >


              <AnimatePresence >
                {cityData && (
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className={styles.custom_box}
                    dir='rtl'
                    ref={popUpRef}

                  >

                    <div className={styles.box_container}>
                      <div className={styles.box_header}>
                        <div className={styles.img_container}>
                          <img src={cityData.icon} alt={""} />

                        </div>
                        <div className={styles.title}>
                          <h3>{cityData?.name}</h3>

                          <div className={styles.desc}>
                            <p>
                              {cityData?.descriptionShort}
                              <Link href={`/city/${cityData?.id}`} className={styles.more}>
                                <span>المزيد عن {cityData?.name}</span>
                                <LeftArrow />
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>

                      <PoetsSlider poetriesData={poetriesData} />

                      <div className={styles.close_btn} onClick={() => setCityData(null)}>
                        <CloseIcon />
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </Container>
      </section >

    </>

  )
}

export default Poets

