import { Search } from '@/assets/svgsComponents'
import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RotatingLines } from 'react-loader-spinner';
import Image from 'next/image'

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [poetsData, setPoetsData] = useState(null);
  const [placesData, setPlacesData] = useState(null);
  const [isDataLoading, setIsdataLoading] = useState(false)

  const handleSearch = async (e) => {
    const query = e.target.value;
    setQuery(query);
    setIsdataLoading(true);

    if (query.length > 0) {
      try {
        const res = await fetch(`/api/search?query=${query}`);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        setPlacesData(data.places.data);
        setPoetsData(data.poets.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsdataLoading(false);
      }
    } else {
      setIsdataLoading(false);
    }
  };

  const filteredPlaces = placesData?.filter(place => place.icon !== null && place.icon !== '');


  return (
    <>
      <nav id='search' className={styles.search} dir='rtl'>
        <header>
          <Container maxWidth={false}>
            <div className={styles.nav_container}>
              <Link className={styles.logo} href={'/'}>
                <Image width={185} priority height={85} src={"/assets/imgs/logo.png"} alt="" />
              </Link>

              <div className={styles.input_container}>
                <div className={styles.icon_container}>
                  <Search />
                </div>
                <input type="text" placeholder='ابحث عن شعراء,أماكن' value={query}
                  onChange={handleSearch}
                />

              </div>


            </div>


          </Container>
        </header>
      </nav>
      {isDataLoading === true ?



        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, }}
          className={styles.loader_container}>
          < RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </motion.div>
        :


        <section id='results' className={styles.results} dir='rtl'>
          <Container maxWidth={false}>
            {placesData && filteredPlaces?.length !== 0 &&
              <>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>الأماكن</Typography>
                </div>

                <div className={styles.places_container}>
                  {filteredPlaces.map((place) =>
                    <Link href={`/city/${place.id}`} key={place.id} >
                      <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1, }}
                        className={styles.box}
                      >
                        <div className={styles.title}>
                          <Typography variant='h4'>{place.name}</Typography>
                          <div className={styles.img_container}>
                            <img src={place.images} alt="" />
                          </div>
                        </div>
                        <div className={styles.desc}>
                          <Typography>{place.desc}</Typography>
                        </div>
                      </motion.div>

                    </Link>
                  )}
                </div>
              </>
            }
            {poetsData &&
              poetsData?.length !== 0 &&
              <div className={styles.sec_title}>
                <Typography variant='h3'>الشعراء</Typography>
              </div>
            }
            <div className={styles.poets_container}>

              {poetsData &&
                poetsData.map((poet) =>
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, }}
                    className={styles.box} key={poet.id}>
                    <a href={`/poet/${poet.id}`} >
                      <div className={styles.poet_info}>
                        <div className={styles.img_container}>
                          <img src={poet.icon} alt={poet.name} />
                        </div>

                        <div className={styles.text_container}>
                          <div className={styles.name}>
                            <Typography>{poet.name}</Typography>
                          </div>
                          <div className={styles.tag}>
                            <Typography>
                              {poet.zamanName}
                            </Typography>

                          </div>
                        </div>
                      </div>
                      <hr />

                      <div className={styles.desc}>
                        <Typography>
                          {poet.descShort}
                        </Typography>
                      </div>

                    </a>

                  </motion.div>


                )
              }
            </div>
            {placesData?.length === 0 &&
              poetsData?.length === 0 &&
              query !== '' &&
              <div className={styles.notfound}>
                <Typography variant='h4'>لا توجد نتيجة عن :<span>{query}</span></Typography>
              </div>
            }

          </Container>
        </section>
      }
    </>
  )
}

export default SearchPage


