import { Container, Typography, } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import imgs from '../../assets/constants/imgs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Svg from '@/components/SVGParts/Svg';
import Link from 'next/link'
import { Button } from '@mui/base'
import { PageHeader } from '@/components/PlacesComponents'
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon, LeftArrow } from '@/assets/svgsComponents';
import PoetsSlider from '@/components/PoetsSlider';
import { useRouter } from 'next/router';



const Places = ({ dataAllCitiesMap,
  dataAllPlacesMap }) => {
  const router = useRouter()



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

  const resetTransformRef = useRef(null);



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

  const handleZoomToLand = (landIndex) => {
    const elementId = `land-${landIndex}`;
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(elementId);
    }
    setActiveIndex(landIndex);
    seIsPointsActive(false)
  };

  const [cityData, setCityData] = useState(null)
  const [poetriesData, setPoetriesData] = useState(null)
  const [isSafari, setIsSafari] = useState(false);
  const [activeCity, setActiveCity] = useState(null);

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

  const handlePlaceWindow = async (placeId) => {
    setActiveCity(placeId);

    try {
      const response = await fetch(`/api/fetchCityData?placeId=${placeId}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const { cityData, poetryData } = await response.json();

      setPoetriesData(poetryData);
      setCityData(cityData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const adjustImageUrl = (imageUrl) => {
    if (imageUrl?.startsWith('https')) {
      return imageUrl;
    } else {
      return `https://zamakan.suwa.io${imageUrl}`;
    }
  };


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

  console.log(dataAllCitiesMap[activeIndex], "dataAllCitiesMap")


  return (

    <>
      <Head>
        <title>مناطق المملكة العربية السعودية</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="استكشف الشعراء
عبر العصور" />
        <meta name="description" content="شُعراء العصور الأَدبيّة في مَناطِق المملكة العربيّة السُّعوديّة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader dataAllCitiesMap={dataAllCitiesMap[activeIndex]} />
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >

        < section id='Places' className={styles.Places} dir='rtl'>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            className={styles.sec_container}>

            <div className={styles.slider_container}>
              <Swiper
                breakpoints={{
                  300: {
                    slidesPerView: 2.8,
                    spaceBetween: 10,
                  },
                  400: {
                    slidesPerView: 3.2,
                    spaceBetween: 10,
                  },
                  414: {
                    slidesPerView: 3.4,
                    spaceBetween: 11,
                  },
                  450: {
                    slidesPerView: 3.4,
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

                pagination={true} className="mySwiper">
                {/* <SwiperSlide>
                  <div className={`${styles.slider} ${activeIndex === null ? styles.active : ''}`} onClick={() => {
                    resetTransformRef.current && resetTransformRef.current()
                    setActiveIndex(null);
                    setActiveLand(null);
                    seIsPointsActive(false);

                    landElments.forEach((element) => {
                      element.classList.remove('activeLand', 'hiddenPoints');
                    });
                  }} >

                    <div className={styles.img_container}>
                      <img src={saudiAllPieces.src} alt='المملكة' />
                    </div>

                    <div className={styles.name}>
                      <Typography>المملكة</Typography>
                    </div>

                  </div>
                </SwiperSlide> */}

                {dataAllCitiesMap?.map((city, index) =>
                  <SwiperSlide key={index}>
                    {console.log(city.id, "activeIndexID")}
                    <div className={`${styles.slider} ${index === activeIndex ? styles.active : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                      <div className={styles.img_container}>
                        <img src={city.icon} alt={city.name} />
                      </div>
                      <div className={styles.name}>
                        <Typography>{city.name}</Typography>
                      </div>
                    </div>

                  </SwiperSlide >
                )}

              </Swiper>
            </div>

            <div className={styles.map_container}>
              <div className={styles.map} dir='ltr'>
                <TransformWrapper
                  ref={transformComponentRef}
                  wheel={{ wheelDisabled: true }}
                  zoomIn={{ step: 100 }}
                  zoomOut={{ step: 100 }}
                  minScale={0.5}
                  maxScale={1.5}
                  initialScale={1}
                  doubleClick={{ disabled: false, mode: "reset" }}
                  wrapperStyle={{ maxWidth: "100%", maxHeight: "calc(100vh - 50px)", overflow: 'unset !important' }}
                  panning={{ disabled: true }}

                >

                  {({ zoomIn, zoomOut, resetTransform }) => {
                    resetTransformRef.current = resetTransform;

                    return (
                      <>
                        <TransformComponent>
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
                              <g className="land" key={index} id={land.svgPathId} onClick={() => handleZoomToLand(index)}>
                                {activeIndex !== null &&
                                  land.places.map((place, index) =>
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
                                  )
                                }
                                {convertSVGPathsToJSX(land.svgPath)}


                              </g>
                            ))}
                          </svg>
                        </TransformComponent>
                      </>
                    );
                  }}
                </TransformWrapper >

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
                            <img src={adjustImageUrl(cityData.icon)} alt={""} />

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


              </div >

              {/* 
              <div className={styles.text_container}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>
                    أبرز ما قيل في {activeIndex !== null && dataAllCitiesMap[activeIndex]?.name}  {activeIndex === null && "المملكة"}
                  </Typography>
                </div>

                <div className={styles.sec_info}>
                  <div className={styles.inner_info}>
                    <div className={styles.tag}>
                      <Typography>{activeIndex !== null && dataAllCitiesMap[activeIndex]?.name}  {activeIndex === null && "المملكة"}</Typography>
                    </div>
                    <div className={styles.desc}>
                      <Typography>
                        مقـــــيم على
                        {` `}
                        <span>
                          بنبــــــان
                        </span>
                        {` `}
                        يمنــــع مـــــاءه
                        وماء وشيع ماء عطشان مرمل
                      </Typography>
                    </div>
                    <hr />
                    <div className={styles.poet_info}>
                      <div className={styles.img_container}>
                        <img src={ra3y.src} alt="" />
                      </div>

                      <div className={styles.text_container}>
                        <Link href='/poet' className={styles.name}>
                          <Typography>الراعي</Typography>
                        </Link>
                        <div className={styles.tag}>
                          <Typography>
                            العصر الأموي
                          </Typography>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.explore}>

                  <div className={styles.sec_title}>
                    <Typography variant='h3'>
                      مناطق {activeIndex !== null && dataAllCitiesMap[activeIndex]?.name}  {activeIndex === null && "المملكة"}
                    </Typography>
                  </div>

               
                </div>


              </div> */}

            </div>
          </motion.div>
        </section >
      </Container>

    </>

  )
}

export default Places


export async function getStaticProps() {
  try {
    const resAllCitiesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=6&lang=2&withPlaces=true&pagenum=1&pagesize=50`);
    if (!resAllCitiesMap.ok) {
      throw new Error(`HTTP error! Status: ${resAllCitiesMap.status}`);
    }
    const dataAllCitiesMap = await resAllCitiesMap.json();

    // Ensure the URL is correct and different from resAllCitiesMap if they are supposed to fetch different data
    const resAllPlacesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=6&lang=2&withPlaces=true&pagenum=1&pagesize=50`);
    if (!resAllPlacesMap.ok) {
      throw new Error(`HTTP error! Status: ${resAllPlacesMap.status}`);
    }
    const dataAllPlacesMap = await resAllPlacesMap.json();

    return {
      props: {
        dataAllCitiesMap,
        dataAllPlacesMap
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Failed to fetch API:', error);

    return {
      props: {
        dataAllCitiesMap: [],
        dataAllPlacesMap: [],
        error: 'API fetch failed',
      },
      revalidate: 10,
    };
  }
}
