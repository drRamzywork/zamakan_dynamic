import { Container, Typography, Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import PoetsSlider from '../PoetsSlider';
import { ErasPlacesSlider } from '../ErasComponents';
import { MdLocationPin } from "react-icons/md";
import { CloseIcon, LeftArrow } from '@/assets/svgsComponents';
import { RotatingLines } from 'react-loader-spinner';
import { FaCheck } from "react-icons/fa6";


const Poets = ({ dataPoetsByEra, dataAllCitiesMap, isLayerActive
  , setIsLayerActive }) => {
  const [activePoet, setActivePoet] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [landElments, setLandElemnts] = useState([])
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPointsActive, seIsPointsActive] = useState(false);
  const [cityNames, setCityNames] = useState([]);
  const [places, setPlaces] = useState(null);
  const [isMapLoading, setIsMapLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [filteredPoets, setFilteredPoets] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  // const toggleFilter = () => {
  //   if (isFilterActive) {
  //     // Show all poets if the filter is currently active
  //     setFilteredPoets(dataPoetsByEra);
  //   } else {
  //     // Apply filter to show only poets born in Saudi
  //     setFilteredPoets(dataPoetsByEra.filter(poet => poet.bornInSaudi));
  //   }
  //   setIsFilterActive(!isFilterActive);
  // };


  useEffect(() => {
    if (dataPoetsByEra && dataPoetsByEra?.length > 0) {
      if (isFilterActive) {
        setFilteredPoets(dataPoetsByEra?.filter(poet => poet.bornInSaudi));

      } else {
        setFilteredPoets(dataPoetsByEra);
      }
    }
  }, [isFilterActive, dataPoetsByEra]);


  const toggleFilter = () => {
    setIsFilterActive(prev => !prev);
  };



  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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
    setIsLayerActive(false)
    setActiveCity(null)
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
  const [poetID, setPoetID] = useState(0);
  const handlePlaceWindow = async (placeId) => {
    setActiveCity(placeId);
    try {
      const response = await fetch(`/api/fetchCityData?placeId=${placeId}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const { cityData, poetryData } = await response.json();

      setCityData(cityData);
      setIsLayerActive(true)
      setPoetriesData(poetryData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handlePlaceActive = async (placeId) => {
    setActiveCity(placeId);
  };

  const handlePoetData = async (poetID) => {
    setIsMapLoading(true);
    setPoetID(poetID)
    try {
      const resPoetPlaces = await fetch(`https://api4z.suwa.io/api/Makan/GetAllPlaces?poet=${poetID}&lang=2&pagenum=1&pagesize=50`);

      if (resPoetPlaces.status === 200) {
        const dataPoetPlaces = await resPoetPlaces.json();
        setPlaces(dataPoetPlaces);
      } else {
        // Handle non-200 responses here
        console.error('Failed to fetch. Status:', resPoetPlaces.status);
        setPlaces(null);
      }
    } catch (error) {
      // Handle errors in fetching or JSON parsing
      console.error('Error fetching data or parsing JSON:', error);
      setPlaces(null);
    } finally {
      setIsMapLoading(false);
    }
  };

  const popUpRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setCityData(null);
        setIsLayerActive(false)
        setActiveCity(null)
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
      <section id='Poets' className={styles.Poets} dir='rtl'>
        <Container maxWidth={false} >
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            className={styles.sec_container}>
            <div className={styles.filter_btn} onClick={toggleFilter}>

              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, }} className={styles.icon_container}>
                {isFilterActive &&
                  <FaCheck />
                }

              </motion.div>
              <p className={isFilterActive && styles.active}>
                شعراء عاشوا في المملكة
              </p>
            </div>

            <div className={styles.tags_slider} id='carosuel'>
              <Swiper
                breakpoints={{
                  300: {
                    slidesPerView: 2.3,
                    spaceBetween: 10,
                  },
                  400: {
                    slidesPerView: 2.3,
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
                    spaceBetween: 10,
                  },
                }}
                dir={'rtl'}
                className={styles.swiper_container}
              >
                {
                  Array.isArray(filteredPoets) &&
                  filteredPoets.map((poet, index) => (
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
                <div className={`${styles.desc} ${showMore ? styles.showFull : ''}`}>
                  <Typography>
                    {dataPoetsByEra[activePoet]?.descShort}
                    <Link href={`/poet/${dataPoetsByEra[activePoet]?.id}`} className={styles.more}>
                      <Typography>
                        البطاقة التعريفية بالشاعر
                        <div className={styles.icon_container}>
                          <LeftArrow />
                        </div>
                      </Typography>

                    </Link>
                  </Typography>

                </div>
                <div className={styles.show_more} onClick={toggleShowMore}>
                  <Typography>
                    عرض
                    {` `}
                    {showMore ? "أقل" : "المزيد"}

                  </Typography>
                </div>
              </div>
            }

            <div className={styles.svg_wrap} dir='ltr'>
              <AnimatePresence >
                {cityData && (
                  <>
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
                            <img src={cityData.icon} alt={cityData?.name} />

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

                        <PoetsSlider poetriesData={poetriesData} poetID={poetID} />

                        <div className={styles.close_btn} onClick={() => {
                          setCityData(null)
                          setIsLayerActive(false)
                          setActiveCity(null)
                        }}>
                          <CloseIcon />
                        </div>
                      </div>

                    </motion.div>

                  </>

                )}
              </AnimatePresence>

              <div id='map-boxes' className={styles.map_box}>
                {isMapLoading &&
                  <div className={styles.svg_layer}>
                    <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}
                      className={styles.loader}
                    />
                  </div>
                }
                <xml version="1.0" encoding="UTF-8" standalone="no" />
                <svg
                  id="svg1"
                  width="858"
                  height="724"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.zaman_map} ${isSafari ? "saudi-map safari" : "saudi-map"}`}
                  viewBox="90 90 758 624"
                >
                  {dataAllCitiesMap?.map((land, index) => (
                    <g key={index} id={land.svgPathId} >
                      {convertSVGPathsToJSX(land.svgPath)}
                    </g>
                  ))}
                  {activeIndex !== null &&
                    places?.map((place, index) =>
                      <foreignObject x={place.svgX} y={place.svgY} key={place.id}
                      >
                        <div className="city-container" xmlns="http://www.w3.org/1999/xhtml">
                          <div
                            className={`city-name ${activeCity === place.id ? 'active' : ''}`} id="p1">
                            <div className={styles.wrapper} >
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

              </div >




              {places !== null &&
                <ErasPlacesSlider places={places}
                  setActiveCity={setActiveCity}
                  activeCity={activeCity} onPlaceClick={handlePlaceWindow} />
              }
            </div>
          </motion.div>
        </Container>
      </section >

    </>

  )
}

export default Poets

