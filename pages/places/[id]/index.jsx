import { Container, Typography, } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../index.module.scss'
import imgs from '../../../assets/constants/imgs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Link from 'next/link'
import { PageHeader } from '@/components/PlacesComponents'
import { useRouter } from 'next/router';

import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon, LeftArrow } from '@/assets/svgsComponents';
import PoetsSlider from '@/components/PoetsSlider';


const Places = ({ dataAllCitiesMap,
  dataAllPlacesMap, dataPlacePoetry, dataDefaultPlacePoetry }) => {
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

  } = imgs;
  const [activeCity, setActiveCity] = useState(null);

  const router = useRouter();
  const [cityId, setCityId] = useState(null);
  const placeID = Number(router.query.id);
  useEffect(() => {
    const filtredCities = dataAllCitiesMap.filter((place) => (place.id === placeID))
    setCityId(filtredCities)
  }, [router, dataAllCitiesMap, placeID]);




  const [landElments, setLandElemnts] = useState([])
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState(null);

  const [isPointsActive, seIsPointsActive] = useState(false);
  const [cityData, setCityData] = useState(null)
  const [poetriesData, setPoetriesData] = useState(null)

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {

    // Detect Safari browser
    setIsSafari(navigator.vendor.includes("Apple"));


  }, []);

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

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    // Navigate to the new route
    router.push(`/places/${landIndex}`).then(() => {
      // Restore the scroll position
      window.scrollTo(scrollX, scrollY);
    });


  };

  const resetTransformRef = useRef(null);


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



  const convertSVGPathsToJSX = (svgString) => {
    const paths = svgString.split("</path>");
    return paths.map((path, index) => (
      <g key={index} dangerouslySetInnerHTML={{ __html: path + "</path>" }} />
    ));
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

      <PageHeader dataAllCitiesMap={dataAllCitiesMap} />

      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >

        <section id='Places' className={styles.Places} dir='rtl'>
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
                  <Link href='/places' className={`${styles.slider} `} onClick={() => {
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

                  </Link>
                </SwiperSlide> */}
                {dataAllCitiesMap.map((city, index) =>
                  <SwiperSlide key={city.id}>
                    <Link
                      scroll={false}
                      href={`/places/${city.id}`} className={`${styles.slider} ${city.id === placeID ? styles.active : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                      <div className={styles.img_container}>
                        <img src={city.icon} alt={city.name} />
                      </div>
                      <div className={styles.name}>
                        <Typography>{city.name}</Typography>
                      </div>
                    </Link>
                  </SwiperSlide >
                )}


              </Swiper>
            </div>
            <div className={styles.map_container1}>
              <div className={styles.map} dir='ltr' styles={{ width: "100%" }}>
                <TransformWrapper
                  ref={transformComponentRef}
                  wheel={{ wheelDisabled: true }}
                  initialPositionX={0}
                  initialPositionY={0}
                  panning={{ disabled: true }}
                  zoomIn={{ step: 100 }}
                  zoomOut={{ step: 100 }}
                  minScale={0.5}
                  maxScale={2}
                  initialScale={1}
                  styles={{ width: "100%" }}
                  doubleClick={{ disabled: false, mode: "reset" }}
                  wrapperStyle={{ maxWidth: "100%", maxHeight: "calc(100vh - 50px)", overflow: 'unset !important' }}

                >
                  {({ zoomIn, zoomOut, resetTransform }) => {
                    resetTransformRef.current = resetTransform;

                    return (
                      <>
                        <TransformComponent styles={{ width: "100%" }}>

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
                    >

                      <div className={styles.box_container}>
                        <div className={styles.box_header}>
                          <div className={styles.img_container}>
                            <img src={cityData?.icon} alt={cityData?.name}
                            />
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
              {/* <div className={styles.text_container}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>
                    أبرز ما قيل في   {cityId === null ? "المملكة" : cityId[0].name}
                  </Typography>
                </div>

                <div className={styles.sec_info}>
                  <div className={styles.inner_info}>
                    <div className={styles.tag}>
                      <Typography>
                        {cityId === null ? "المملكة" : cityId[0].name}
                      </Typography>
                    </div>
                    <div className={styles.desc}>
                      <Typography>
                        {dataPlacePoetry.length > 0 ? dataPlacePoetry[0]?.poetryParts :
                          dataDefaultPlacePoetry[0].poetryParts
                        }
                      </Typography>
                    </div>
                    <hr />
                    <div className={styles.poet_info}>
                      <div className={styles.img_container}>
                        <img src={dataPlacePoetry.length > 0 ? dataPlacePoetry[0]?.poetIcon :
                          dataDefaultPlacePoetry[0].poetIcon
                        } alt="" />
                      </div>

                      <div className={styles.text_container}>
                        <Link href={`/poet/${dataPlacePoetry[0]?.poetId}`} className={styles.name}>
                          <Typography>

                            {dataPlacePoetry.length > 0 ? dataPlacePoetry[0]?.poetName :
                              dataDefaultPlacePoetry[0].poetName
                            }

                          </Typography>
                        </Link>
                        <div className={styles.tag}>
                          <Typography>
                            {dataPlacePoetry.length > 0 ? dataPlacePoetry[0]?.zamanName :
                              dataDefaultPlacePoetry[0].zamanName
                            }
                          </Typography>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.explore}>

                  <div className={styles.sec_title}>
                    <Typography variant='h3'>
                      مناطق  {cityId === null ? "المملكة" : cityId[0].name}
                    </Typography>
                  </div>
                  <div className={styles.tags_container}>
                    {dataAllPlacesMap.map((city, idx) => (
                      <Button key={idx}>
                        <Link href={`/city/${city.id}`}>
                          {city.name}
                        </Link>
                      </Button>
                    ))}


                  </div>
                </div>


              </div> */}
            </div>
          </motion.div>
        </section >
      </Container >
    </>
  )
}

export default Places




export async function getStaticProps({ params }) {
  const { id } = params;
  const resAllCitiesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=6&lang=2&withPlaces=true&pagenum=1&pagesize=50`);
  const dataAllCitiesMap = await resAllCitiesMap.json();

  const resAllPlacesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=6&lang=2&withPlaces=true&pagenum=1&pagesize=50  `);
  const dataAllPlacesMap = await resAllPlacesMap.json();

  const resPlacePoetry = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?city=${id}&lang=2&pagenum=1&pagesize=1`);
  const dataPlacePoetry = await resPlacePoetry.json();

  const resDefaultPlacePoetry = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?lang=2&pagenum=1&pagesize=1`);
  const dataDefaultPlacePoetry = await resDefaultPlacePoetry.json();

  return {
    props: {
      dataAllCitiesMap,
      dataAllPlacesMap,
      dataPlacePoetry,
      dataDefaultPlacePoetry
    },
    revalidate: 10,

  };
}


export async function getStaticPaths() {
  const response = await fetch('https://api4z.suwa.io/api/Makan/GetAllPlacesIds');
  if (!response.ok) {
    throw new Error(`API call failed: ${response.status}`);
  }

  const ids = await response.json();

  // Generate the paths
  const paths = ids.map(id => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}