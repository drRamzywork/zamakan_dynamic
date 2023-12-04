import { Box, Container, Grid, Typography, Avatar, Tab, Tabs, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Feather from '../../../assets/svgsComponents/Feather'
import Profile from '../../../assets/svgsComponents/Profile'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { styled } from '@mui/system';
import { motion } from 'framer-motion'
import { imgs } from '@/assets/constants';
import SliderVerses from '@/components/PoetsDetailsComponents/SliderVerses';
import { useRouter } from 'next/router';

export default function Poet({ dataPoet, dataPoetry, dataAllEras }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  const router = useRouter();
  console.log(router.query.id)
  const { ra3y, } = imgs;
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  console.log(dataAllEras, "dataDefaultEr22a")

  const [age, setAge] = useState(0);
  const [city, setCity] = useState('all_cities');
  const [results, setResults] = useState([]);

  const handleChange = async (event) => {
    const selectedValue = event.target.value;

    const res = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?${selectedValue !== 0 ? `era=${selectedValue}` : ''}&lang=2&pagenum=1&pagesize=50`);
    const res1 = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?poet=${router.query.id}&${selectedValue !== 0 ? `era=${selectedValue}` : ''}&lang=2&pagenum=1&pagesize=50 `);

    const filteredData = await res1.json();

    setAge(selectedValue);
    setResults(filteredData)
    router.push(`/poet/${router.query.id}?era=${selectedValue}`, undefined, { shallow: true });
  };

  { console.log(results, "resultssss") }

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
    function activelink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activelink));

  }, [])

  return (
    <>
      <Container sx={{ maxWidth: "1400px" }} dir="rtl" maxWidth={false} className={styles.poetDetails}>
        <Box className={styles.headerImage} >
          <div className={styles.text_container}>
            <ul>
              <li>
                <a href="/">الشاعر {dataPoet.name}</a>
              </li>
              <li>
                <a href="/">العصور الأدبية</a>
              </li>
              <li>
                <a href="/">الرئيسية</a>
              </li>
            </ul>
          </div>
        </Box>
        <Grid container className={styles.profileSection}>
          <Grid item>
            <Avatar src={dataPoet.icon} className={styles.avatar} />
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
              <div className={styles.tag}>
                <Typography>{dataPoet.zamanName}</Typography>
              </div>
            </div>

            <div className={styles.desc} dir='rtl'>
              <Typography>
                {dataPoet.description}
              </Typography>
            </div>
          </Grid>
        </Grid>



        <div className={styles.navigation}>
          <ul>


            <li className={`${styles.list} ${1 === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(1)}>
              <button >
                <span className={styles.iconWrapper}>
                  <Profile />
                </span>
                <p>عن الشاعر</p>
              </button>
            </li>


            <li className={`${styles.list} ${0 === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(0)}>
              <button >
                <span className={styles.iconWrapper}>
                  <Feather />
                </span>
                <p>أبيات ذكرت فيها المملكة
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
                      <div className={styles.box}>
                        <div className={styles.title}>
                          <Typography>تاريخ الميلاد</Typography>
                        </div>
                        <div className={styles.name}>
                          <Typography>{dataPoet.fromM} هـجريًا - {dataPoet.fromH} ميلاديًا</Typography>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.title}>
                          <Typography>محل الميلاد</Typography>
                        </div>
                        <div className={styles.name}>
                          <Typography>المدينة المنورة</Typography>
                        </div>
                      </div>

                      <div className={styles.box}>
                        <div className={styles.title}>
                          <Typography>تاريخ الوفاة</Typography>
                        </div>

                        <div className={styles.name}>
                          <Typography>{dataPoet.toM} هـجريًا - {dataPoet.toH} ميلاديًا</Typography>
                        </div>
                      </div>

                      <div className={styles.box}>
                        <div className={styles.title}>
                          <Typography>محل الوفاة</Typography>
                        </div>
                        <div className={styles.name}>
                          <Typography>المدينة المنورة</Typography>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.title}>
                          <Typography>عمره عند الوفاة</Typography>
                        </div>
                        <div className={styles.name}>
                          <Typography>79 عام</Typography>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>

                <section className={styles.timelineSection}>
                  <div className={styles.sec_title}>
                    <Typography variant='h3'>نبذة عن حياته</Typography>
                  </div>

                  <div className={styles.sec_container}>
                    <div className={styles.desc}>
                      <Typography>
                        {dataPoet.description}
                      </Typography>
                    </div>
                  </div>
                </section>

                <section className={styles.timelineSection}>
                  <div className={styles.sec_title}>
                    <Typography variant='h3'>ما يميّزه</Typography>
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
                    <Typography variant='h3'>ما اشتهر به الشاعر</Typography>
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
                          <span>18</span> يتم عرض <span>10</span> من
                        </Typography>
                      </div>
                      <div className={styles.filter_methods}>
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
                              <MenuItem value={0}>كل العصور</MenuItem>
                              {dataAllEras.map((era, index) => (
                                <MenuItem key={era.id} value={era.id}>
                                  {era.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                        <div className={styles.box}>
                          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <Select
                              labelId="demo-select-small-label"
                              id="demo-select-small"
                              value={city}
                              defaultValue='المملكة'
                              sx={selectBoxStyles}
                              onChange={handleChange}
                              IconComponent={CustomArrowIcon}

                            >
                              <MenuItem value="all_cities">المملكة</MenuItem>
                              <MenuItem value={10}>الرياض</MenuItem>
                              <MenuItem value={20}>تابوك</MenuItem>
                              <MenuItem value={30}>مكة المكرمة</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>

                    </div>
                    <div className="slider">
                      <SliderVerses dataPoetry={dataPoetry} results={results} />
                    </div>
                  </div>
                </section>
              </motion.div>

            </div>
          )}
        </div>


      </Container >
    </>

  );
}


export async function getServerSideProps(context) {
  const { id } = context.query;
  const resPoet = await fetch(`https://api4z.suwa.io/api/Poets/GetPoetFullData?id=${id}&lang=2  `);
  const dataPoet = await resPoet.json();

  const resPoetry = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?poet=${id}&lang=2&pagenum=1&pagesize=50`);
  const dataPoetry = await resPoetry.json();

  const resAllEras = await fetch('https://api4z.suwa.io/api/Zaman/GetAllEras?lang=2&pagenum=1&pagesize=50');
  const dataAllEras = await resAllEras.json();

  return {
    props: {
      dataPoet,
      dataPoetry,
      dataAllEras
    },
  };
}