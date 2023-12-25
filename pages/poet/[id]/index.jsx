import { Box, Container, Grid, Typography, Avatar, Tab, Tabs, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Feather from '../../../assets/svgsComponents/Feather'
import Profile from '../../../assets/svgsComponents/Profile'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { styled } from '@mui/system';
import { motion } from 'framer-motion'
import SliderVerses from '@/components/PoetsDetailsComponents/SliderVerses';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FaUserLarge } from "react-icons/fa6";

export default function Poet({ dataPoet, dataPoetry, dataPlaces }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const router = useRouter();

  const [age, setAge] = useState(0);
  const [results, setResults] = useState(dataPoetry);

  const handleChange = async (event) => {
    const selectedValue = event.target.value;
    const res = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?poet=${router.query.id}&${selectedValue !== 0 ? `place=${selectedValue}` : ''}&lang=2&pagenum=1&pagesize=50 `);
    const filteredData = await res.json();

    setAge(selectedValue);
    setResults(filteredData)
    router.push(`/poet/${router.query.id}?verse=${selectedValue}`, undefined, { shallow: true });
  };


  const selectBoxStyles = {
    m: 1,
    minWidth: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '10px 16px',
    width: '199px',
    height: '47px',
    borderRadius: '30px',
    marginRight: '0 !important',
    '@media (max-width: 600px)': {
      width: '140px',
      marginTop: '0',
      padding: '10px',
      paddingRight: '26px',
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2',
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2',
    },


    '.MuiSelect-select': {
      display: 'flex',
      flexDirection: 'row-reverse',
      outline: 'none !important',
      justifyContent: 'space-between',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0px',
      width: '167px',
      height: '27px',
      paddingRight: '0px !important',


    },
    '#demo-select-small': {
      color: 'var(--main-blue-color)',
      fontFamily: 'var(--effra-font)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'right',
    },


  }

  const CustomArrowIcon = styled(MdOutlineKeyboardArrowDown)({
    width: '25px',
    height: '25px',
    right: '82% !important',
    top: '19% !important',
    color: ' #11292F',
  });


  useEffect(() => {
    const list = document.querySelectorAll("#list");

    async function activelink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activelink));

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const menuItemStyle = {
    fontFamily: 'var(--effra-font)',
    direction: 'rtl',
    textAlign: 'right',
    fontSize: '16px'
  };


  return (
    <>
      <Head>
        <title> {dataPoet?.name} </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="استكشف الشعراء
عبر العصور" />
        <meta name="description" content="شُعراء العصور الأَدبيّة في مَناطِق المملكة العربيّة السُّعوديّة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container dir="rtl" maxWidth={false} className={styles.poetDetails}>
          <Box className={styles.headerImage} >
          </Box>
          <Grid container className={styles.profileSection}>
            <Grid item>
              <div className={styles.img_container}>
                <img src={dataPoet.icon} alt="" />
              </div>
            </Grid>
            <Grid spacing={0} item>
              <Typography variant="h5" className={styles.profileName}>
                {dataPoet.name}
              </Typography>

              <div className={styles.tags_container}>
                <div className={styles.tag}>
                  <Typography>
                    {dataPoet.nickname}
                  </Typography>
                </div>

              </div>

              <div className={styles.desc} dir='rtl'>


                <Typography>
                  {
                    dataPoet &&
                    dataPoet?.description?.split('.').map((sentence, index, array) => (
                      <span key={index}>
                        {sentence.trim()}
                        {index < array?.length - 1 && <>&nbsp;.&nbsp;<br /></>}
                      </span>
                    ))}
                </Typography>


              </div>
            </Grid>
          </Grid>



          <div className={styles.navigation}>
            <ul>
              <li className={`${styles.list} ${1 === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(1)}>
                <button >
                  <span className={styles.iconWrapper}>
                    <FaUserLarge />
                  </span>
                  <p>عن الشاعر</p>
                </button>
              </li>


              <li className={`${styles.list} ${0 === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(0)}>
                <button >
                  <span className={styles.iconWrapper}>
                    <Feather />
                  </span>
                  <p>
                    أبيات ذُكرت فيها أماكن في المملكة
                  </p>
                </button>
              </li>
              <div className={`${styles.indicator} ${styles[`indicator-${activeIndex}`]}`}><span></span></div>
            </ul>
          </div>
          <div className={styles.tabsSection}>
            {activeIndex === 1 && (
              <div
                className={styles.tabContent_container} dir='rtl'>
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, }}
                >

                  <section className={styles.timelineSection}>
                    <div className={styles.sec_title}>
                      <Typography variant='h3'>معلوماته الشخصية</Typography>
                    </div>

                    <div className={styles.info_sec}>

                      <div className={styles.boxes_container}>

                        <div className={styles.box}>
                          <div className={styles.title}>
                            <Typography >الاسم </Typography>
                          </div>
                          <div className={styles.name}>
                            <Typography>
                              {dataPoet.fullName}
                            </Typography>
                          </div>
                        </div>
                        <div className={styles.box}>
                          <div className={styles.title}>
                            <Typography>اللقب</Typography>
                          </div>
                          <div className={styles.name}>
                            <Typography>
                              {dataPoet.nickname}
                            </Typography>
                          </div>
                        </div>
                        <div className={styles.box}>
                          <div className={styles.title}>
                            <Typography>سبب اللقب</Typography>
                          </div>
                          <div className={styles.name}>
                            <Typography>{dataPoet.nicknameReason}</Typography>
                          </div>
                        </div>


                      </div>
                    </div>
                  </section>



                  <section className={styles.timelineSection}>
                    <div className={styles.sec_title}>
                      <Typography variant='h3'>مما تميز به الشاعر:</Typography>
                    </div>

                    <div className={styles.sec_container}>
                      <div className={styles.desc}>
                        <Typography>
                          {dataPoet.specialist}
                        </Typography>
                      </div>
                    </div>
                  </section>

                  <section className={styles.timelineSection}>
                    <div className={styles.sec_title}>
                      <Typography variant='h3'>مما اُشتهر به الشاعر:
                      </Typography>
                    </div>

                    <div className={styles.sec_container}>
                      <div className={styles.desc}>
                        <Typography>
                          {dataPoet.storySayEvent}
                        </Typography>
                      </div>
                    </div>
                  </section>

                </motion.div>

              </div>
            )}
            {activeIndex === 0 && (
              <div
                className={styles.tabContent_container} dir='rtl'>
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, }}
                >
                  <section className={styles.timelineSection}>
                    <div className={styles.slider_container}>
                      <div className={styles.filter_sec}>
                        <div className={styles.shows}>
                          <Typography dir='ltr'>
                            <span>{results.length}</span> يتم عرض <span>{dataPoetry.length}</span> من
                          </Typography>
                        </div>
                        <div className={styles.filter_methods}>
                          <div className={styles.box}>

                          </div>
                          <div className={styles.box}>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                              <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={age}
                                sx={selectBoxStyles}
                                onChange={handleChange}
                                IconComponent={CustomArrowIcon}

                              >
                                <MenuItem value={0} sx={menuItemStyle}>الجميع</MenuItem>
                                {dataPlaces?.map((place, index) => (
                                  <MenuItem key={place.id} value={place.id} sx={menuItemStyle}>
                                    {place.name}
                                  </MenuItem>
                                ))}

                              </Select>
                            </FormControl>
                          </div>
                        </div>

                      </div>
                      <div className="slider">
                        <SliderVerses results={results} />
                      </div>
                    </div>
                  </section>
                </motion.div>

              </div>
            )}
          </div>
        </Container >
      </motion.div>

    </>

  );
}


export async function getStaticProps(context) {
  const { id } = context.params;

  const resPoet = await fetch(`https://api4z.suwa.io/api/Poets/GetPoetFullData?id=${id}&lang=2`);
  const dataPoet = await resPoet.json();

  const resPoetry = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?poet=${id}&lang=2&pagenum=1&pagesize=50`);
  const dataPoetry = await resPoetry.json();

  const resAllEras = await fetch('https://api4z.suwa.io/api/Zaman/GetAllEras?lang=2&pagenum=1&pagesize=50');
  const dataAllEras = await resAllEras.json();

  const resPlaces = await fetch(`https://api4z.suwa.io/api/Makan/GetAllPlaces?type=6&poet=${id}&lang=2&pagenum=1&pagesize=50`);
  const dataPlaces = await resPlaces.json();

  return {
    props: {
      dataPoet,
      dataPoetry,
      dataAllEras,
      dataPlaces
    },
    revalidate: 10
  };
}


export async function getStaticPaths() {
  const response = await fetch(`https://api4z.suwa.io/api/Poets/GetAllPoetsIds`);
  const placeIds = await response.json();

  const paths = placeIds.map((id) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: 'blocking'
  };
}



