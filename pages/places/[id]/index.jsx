import { Container, Typography, } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../index.module.scss'
import imgs from '../../../assets/constants/imgs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Svg from '@/components/SVGParts/Svg';
import Link from 'next/link'
import { Button } from '@mui/base'
import { PageHeader } from '@/components/PlacesComponents'
import { useRouter } from 'next/router';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


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

  } = imgs
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
  };
  const resetTransformRef = useRef(null);


  return (

    <>
      <PageHeader />
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >

        <section id='Places' className={styles.Places} dir='rtl'>
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
                    slidesPerView: 8,
                    spaceBetween: 40,

                  },
                }}

                pagination={true} className="mySwiper">
                <SwiperSlide>
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
                </SwiperSlide>
                {dataAllCitiesMap.map((city, index) =>
                  <SwiperSlide key={city.id}>
                    <Link
                      scroll={false}
                      href={`/places/${city.id}`} className={`${styles.slider} ${city.id === placeID ? styles.active : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                      <div className={styles.img_container}>
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


                      </div>
                      <div className={styles.name}>
                        <Typography>{city.name}</Typography>
                      </div>
                    </Link>
                  </SwiperSlide >
                )}


              </Swiper>
            </div>
            <div className={styles.map_container}>
              <div className={styles.map} dir='ltr'>
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
                  wrapperStyle={{ maxWidth: "100%", maxHeight: "calc(100vh - 50px)", overflow: 'unset !important' }}

                >
                  {({ zoomIn, zoomOut, resetTransform }) => {
                    resetTransformRef.current = resetTransform;

                    return (
                      <>
                        <TransformComponent>
                          <Svg dataAllCitiesMap={dataAllCitiesMap}
                            dataAllPlacesMap={dataAllPlacesMap} />
                        </TransformComponent>
                      </>
                    );
                  }}
                </TransformWrapper >
              </div >
              <div className={styles.text_container}>
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


              </div>
            </div>
          </div>
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