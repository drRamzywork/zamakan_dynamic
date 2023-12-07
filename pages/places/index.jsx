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



const Places = ({ dataAllCitiesMap,
  dataAllPlacesMap }) => {
  const {
    ra3y,
    saudiAllPieces,
    mapPiece1,
    mapPiece2,
    mapPiece3,
    mapPiece4,
    mapPiece5,
    mapPiece6,
    mapPiece7,

  } = imgs


  const landData = [
    { name: 'الرياض', image: mapPiece1 },
    { name: 'مكة المكرمة', image: mapPiece2 },
    { name: 'المدينة المنورة', image: mapPiece3 },
    { name: 'الشرقية', image: mapPiece4 },
    { name: 'القصيم', image: mapPiece5 },
    { name: 'عسير', image: mapPiece6 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
  ];

  const [landElments, setLandElemnts] = useState([])
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState(null);

  const [isPointsActive, seIsPointsActive] = useState(false);

  const [cityNames, setCityNames] = useState([]);
  // useEffect(() => {
  //   // Select all elements with the class name .land
  //   const elements = document.querySelectorAll('.land');
  //   const city = document.querySelectorAll('.city-name');
  //   setCityNames(city)
  //   setLandElemnts(elements)

  //   // Add dynamic IDs to the selected elements
  //   elements.forEach((element, index) => {
  //     element.setAttribute('id', `land-${index}`);
  //   });
  // }, []);

  const transformComponentRef = useRef(null);


  const handleBoxClick = (index) => {
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

  const handleZoomToLand = (landIndex) => {

    const elementId = `land-${landIndex}`;
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(elementId);
    }
    setActiveIndex(landIndex);
    seIsPointsActive(false)
  };
  const resetTransformRef = useRef(null);

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

  // ------
  const [activeLand1, setActiveLand1] = useState(null);

  // const handleLandClick = (land, index) => {
  //   // Calculate the position and scale
  //   const bbox = land.getBBox();
  //   const centerX = bbox.x + bbox.width / 2;
  //   const centerY = bbox.y + bbox.height / 2;

  //   setActiveLand1({ id: land.id, centerX, centerY });
  // };

  const handleLandClick = (index) => {
    const landId = `land-${index}`;
    const landElement = document.getElementById(landId);
    setActiveIndex(index);
    seIsPointsActive(false)

    if (landElement) {

      const bbox = landElement.getBBox();
      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;

      setActiveLand1({ id: landElement.id, centerX, centerY });
    }
  };

  const getSVGTransform = () => {
    if (!activeLand1) return '';

    const scale = 1.2; // Example scale factor
    const offsetX = window.innerWidth / 2 - activeLand1.centerX * scale;
    const offsetY = window.innerHeight / 2 - activeLand1.centerY * scale;

    return `translate(${offsetX - 100}px, ${offsetY}px) scale(${scale})`;
  };


  const adjustImageUrl = (imageUrl) => {
    if (imageUrl?.startsWith('https')) {
      return imageUrl;
    } else {
      return `https://zamakan.suwa.io${imageUrl}`;
    }
  };



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

      <PageHeader />
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >

        < section id='Places' className={styles.Places} dir='rtl'>
          <div className={styles.sec_container}>

            <div className={styles.slider_container}>
              <Swiper
                dir="rtl"
                breakpoints={{
                  300: {
                    slidesPerView: 4,
                    spaceBetween: 14,
                  },
                  400: {
                    slidesPerView: 4,
                    spaceBetween: 14,
                  },
                  640: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 9.1,
                    spaceBetween: 40,

                  },
                }}

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
                {dataAllCitiesMap.map((city, index) =>
                  <SwiperSlide key={index}>
                    <div className={`${styles.slider} ${index === activeIndex ? styles.active : ''}`} key={index} onClick={() => handleLandClick(index)}

                    >
                      {/* <div className={styles.img_container}>
                        <svg
                          id="svg1"
                          width="858"
                          height="724"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 758 624"
                        >
                          <g dangerouslySetInnerHTML={{ __html: city.svgPath }} />
                        </svg>
                      </div> */}
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
                <xml version="1.0" encoding="UTF-8" standalone="no" />
                <svg
                  id="svg1"
                  width="858"
                  height="724"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${isSafari ? "saudi-map safari" : "saudi-map"}`}
                  viewBox="90 90 758 624"
                  style={{ transform: getSVGTransform(), transition: 'transform 0.5s' }}

                >
                  {dataAllCitiesMap?.map((land, index) => (
                    <g
                      className="land"
                      key={index}
                      onClick={(e) => handleLandClick(index)}
                      id={`land-${index}`}
                    >
                      {convertSVGPathsToJSX(land.svgPath)}
                      {land.places.map((place, index) =>
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

                    </g>
                  ))}
                </svg>


                <AnimatePresence >
                  {cityData && (
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                      className={styles.custom_box}
                      dir='rtl'
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

              </div>
            </div>
            s

          </div>
        </section >
      </Container >

    </>

  )
}

export default Places





export async function getServerSideProps() {

  const resAllCitiesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=6&lang=2&withPlaces=true&pagenum=1&pagesize=50  `);
  const dataAllCitiesMap = await resAllCitiesMap.json();


  const resAllPlacesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=6&lang=2&withPlaces=true&pagenum=1&pagesize=50  `);
  const dataAllPlacesMap = await resAllPlacesMap.json();



  return {
    props: {
      dataAllCitiesMap: dataAllCitiesMap,
      dataAllPlacesMap: dataAllPlacesMap
    },
  };
}