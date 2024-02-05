import { Container, Typography, } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Link from 'next/link'
import { PageHeader } from '@/components/PlacesComponents'
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon, LeftArrow } from '@/assets/svgsComponents';
import PoetsSlider from '@/components/PoetsSlider';
import { ErasPlacesSlider } from '@/components/ErasComponents';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import { RotatingLines } from 'react-loader-spinner';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';




const Places = ({ dataAllCitiesMap, dataAllPlaces,
  dataAllPoetries }) => {
  const { t } = useTranslation("common");

  const [isImageLoading, setIsImageLoading] = useState(true);
  const [landElments, setLandElemnts] = useState([])
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState(null);
  const [places, setPlaces] = useState(null);
  const [isPointsActive, seIsPointsActive] = useState(false);
  const [cityNames, setCityNames] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (activeIndex !== null) {
      setPlaces(dataAllCitiesMap[activeIndex]?.places)
    }
  }, [activeIndex])

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

    // Check if dataAllPlaces is an array before using the find method
    const filtredPlaces = Array.isArray(dataAllPlaces)
      ? dataAllPlaces.find((place) => place.id === placeId)
      : null;

    // Proceed only if filtredPlaces is not null
    if (filtredPlaces) {
      const filteredPoetries = dataAllPoetries.filter((poetry) => poetry.placeId === placeId);

      setCityData(filtredPlaces);
      setPoetriesData(filteredPoetries);
    } else {
      // Handle the case where filtredPlaces is null
      // e.g., set some default data, show a message, etc.
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

  const handlePlaceActive = async (placeId) => {
    setActiveCity(placeId);
  };

  const svgRef = useRef(null);
  const [landCenters, setLandCenters] = useState([]);

  useEffect(() => {
    if (svgRef.current) {
      const lands = svgRef.current.querySelectorAll('.land');
      const centers = Array.from(lands).map(land => {
        const bbox = land.getBBox();
        return {
          x: bbox.x + bbox.width / 2,
          y: bbox.y + bbox.height / 2,
          name: land.getAttribute('data-name')
        };
      });
      setLandCenters(centers);
    }
  }, []);


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
      <section id='Places' className={styles.Places} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        {cityData && (
          <div className={styles.layer} />
        )}
        <Container maxWidth={false} >


          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            className={styles.sec_container}
            dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}
          >

            <div className={styles.slider_container}>
              <Swiper
                breakpoints={{
                  300: {
                    slidesPerView: 3.4,
                    spaceBetween: 10,
                  },
                  400: {
                    slidesPerView: 3.4,
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
                dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}
                pagination={true} className="mySwiper">

                {dataAllCitiesMap?.map((city, index) =>
                  <SwiperSlide key={index}>
                    <div className={`${styles.slider} ${index === activeIndex ? styles.active : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                      <div className={styles.img_container}>
                        <Image width={200} height={200} src={city.icon} alt={city.name}
                          onLoad={() => setIsImageLoading(false)}
                        />
                        {isImageLoading === true ? < RotatingLines
                          strokeColor="grey"
                          strokeWidth="5"
                          animationDuration="0.75"
                          width="96"
                          visible={true}
                        /> :
                          ""
                        }
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
                  wrapperStyle={{ width: "100%", }}
                  panning={{ disabled: true }}

                >

                  {({ zoomIn, zoomOut, resetTransform }) => {
                    resetTransformRef.current = resetTransform;
                    return (
                      <>
                        <TransformComponent>
                          <xml version="1.0" encoding="UTF-8" standalone="no" />
                          <svg
                            // id="svg1"
                            width="858"
                            height="724"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${isSafari ? "saudi-map safari" : "saudi-map"}`}
                            viewBox="90 90 758 624"
                            ref={svgRef}
                          >
                            {dataAllCitiesMap?.map((land, index) => (
                              <g className="land" data-name={land.name} key={index} id={land.svgPathId} onClick={() => handleZoomToLand(index)}>
                                {convertSVGPathsToJSX(land.svgPath)}
                              </g>
                            ))}


                            {
                              activeIndex === null || typeof activeIndex === 'number'
                              &&
                              landCenters.map((land, index) => (
                                <foreignObject key={index} x={land.x} y={land.y}>


                                  {activeIndex !== index &&

                                    <div className="city-container" xmlns="http://www.w3.org/1999/xhtml" onClick={() => handleZoomToLand(index)}>
                                      <div
                                        className={`city-name `} id="p1">
                                        <div id='name'>
                                          <p>
                                            {land.name}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  }

                                </foreignObject>
                              ))}


                            {
                              activeIndex === null &&
                              landCenters.map((land, index) => (
                                <foreignObject key={index} x={land.x} y={land.y}>


                                  {activeIndex !== index &&

                                    <div className="city-container" xmlns="http://www.w3.org/1999/xhtml" onClick={() => handleZoomToLand(index)}>
                                      <div
                                        className={`city-name `} id="p1">
                                        <div id='name'>
                                          <p>
                                            {land.name}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  }

                                </foreignObject>
                              ))}

                            {activeIndex !== null &&
                              places?.map((place, index) =>
                                <foreignObject x={place.svgX} y={place.svgY} key={place.id}
                                >
                                  <div className="city-container" xmlns="http://www.w3.org/1999/xhtml">
                                    <div
                                      className={`city-name ${activeCity === place.id ? 'active' : ''}`} id="p1">
                                      <div className={styles.wrapper}>
                                        {activeCity === place.id
                                          &&
                                          <div className={styles.icon_container}>
                                            <MdLocationPin />
                                          </div>
                                        }
                                        <div
                                          onClick={() => handlePlaceActive(place.id)}
                                          className={`${styles.city_point} ${activeCity === place.id ? `${styles.active} 'active' ` : ''}`}
                                        >

                                        </div>

                                      </div>
                                    </div>
                                  </div>


                                </foreignObject>
                              )
                            }
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
                      dir={router.locale === 'ar' ? 'rtl' : 'ltr'}
                      ref={popUpRef}
                    >

                      <div className={styles.box_container}>
                        <div className={styles.box_header}>
                          <div className={styles.img_container}>
                            <img src={cityData.icon} alt={cityData.name} />
                          </div>
                          <div className={styles.title}>
                            <h3>{cityData?.name}</h3>

                            <div className={styles.desc}>
                              <p>
                                {cityData?.descriptionShort}
                                <Link href={`/city/${cityData?.id}`} className={styles.more}>
                                  <span>{t("moreAbout")} {cityData?.name}</span>
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
              {places !== null &&
                <AnimatePresence >
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className={styles.slider_wrap}
                  >
                    <ErasPlacesSlider places={places}
                      setActiveCity={setActiveCity}
                      activeCity={activeCity} onPlaceClick={handlePlaceWindow} />

                  </motion.div>
                </AnimatePresence>
              }

            </div>

          </motion.div>

        </Container>

      </section >




    </>

  )
}

export default Places


export async function getStaticProps({ locale }) {
  let dataAllPlaces = [];
  let dataAllPoetries = [];
  let dataAllCitiesMap = [];

  const langIdEnvKey = `LANG_ID_${locale.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];

  try {
    // Fetch data for all places
    const resAllPlaces = await fetch(`https://api4z.suwa.io/api/Makan/GetMakanFullData?lang=${langId}`);
    if (!resAllPlaces.ok) {
      throw new Error(`Failed to fetch places: ${resAllPlaces.status}`);
    }
    dataAllPlaces = await resAllPlaces.json();

    // Fetch all poetries
    const resAllPoetries = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?lang=${langId}&pagenum=1&pagesize=50`);
    if (!resAllPoetries.ok) {
      throw new Error(`Failed to fetch poetries: ${resAllPoetries.status}`);
    }
    dataAllPoetries = await resAllPoetries.json();

    // Fetch all cities map
    const resAllCitiesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=6&lang=${langId}&withPlaces=true&pagenum=1&pagesize=50`);
    if (!resAllCitiesMap.ok) {
      throw new Error(`Failed to fetch cities map: ${resAllCitiesMap.status}`);
    }
    dataAllCitiesMap = await resAllCitiesMap.json();

  } catch (error) {
    console.error('API fetch error:', error);


    return {
      props: {
        dataAllPlaces: [],
        dataAllPoetries: [],
        dataAllCitiesMap: [],
        ...(await serverSideTranslations(locale, ["common"])),

        error: error.message
      },
      revalidate: 10,
    };
  }

  // Return the fetched data as props
  return {
    props: {
      dataAllPlaces,
      dataAllPoetries,
      dataAllCitiesMap,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 10,
  };
}
