import { Box, Container, Grid, Typography, Avatar, Tab, Tabs, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import styles from './index.module.scss'; // Make sure you have the corresponding SCSS file
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SliderVerses from "../../components/PoetDetails/SliderVerses";
import imgs from '../../assets/constants/imgs'
import Feather from '../../assets/svgsComponents/Feather'
import Profile from '../../assets/svgsComponents/Profile'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { styled } from '@mui/system';
import { motion } from 'framer-motion'


export default function Poet() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { ra3y, } = imgs;
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const [age, setAge] = useState('all_ages');
  const [city, setCity] = useState('all_cities');

  const handleChange = (event) => {
    setAge(event.target.value);
    setCity(event.target.value)
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
      borderColor: '#E5E6F2', // or any other color you want
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2', // or any other color you want
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

  // Animation
  const variants = {
    enter: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,

      }
    },
    center: {
      zIndex: 1,
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.5,

      }
    }
  };

  return (
    <>
      <Navbar />

      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className={styles.poetDetails}>
        <Box className={styles.headerImage}>
          <div className={styles.text_container}>
            <ul>
              <li>
                <a href="/">الشاعر كثير عزة</a>
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
            <Avatar src={ra3y.src} className={styles.avatar} />
          </Grid>
          <Grid spacing={0} item>
            <Typography variant="h5" className={styles.profileName}>
              الأعشى
            </Typography>

            <div className={styles.tags_container}>
              <div className={styles.tag}>
                <Typography>صناجة العرب</Typography>
              </div>
              <div className={styles.tag}>
                <Typography>العصر الأموي</Typography>
              </div>
            </div>

            <div className={styles.desc} dir='rtl'>
              <Typography>
                شاعر عظيم من أصحاب المعلقات، كان غزير الشعر، وفد إلى الملوك مادحاً، وكان أول المتكسبين بالشعر ، غنَّى شعرَه، وعمي في آخر حياته، توفي سنة 7ه/629م.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Paper square className={styles.tabsSection} dir={'rtl'}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            sx={{
              backgroundColor: 'transparent',
              boxShadow: 'unset',
              '.MuiAvatar-root': {
                marginLeft: '10px'
              }
            }}
          >
            <Tab
              disableRipple
              disableFocusRipple
              icon={<div className={styles.iconWrapper}>
                <Profile />
              </div>} label="عن الشاعر"
              id='about'
            />

            <Tab
              id='poets-btn'
              disableRipple
              disableFocusRipple
              icon={<div className={styles.iconWrapper}>
                <Feather />
              </div>} label="أبيات ذكرت فيها المملكة" />

          </Tabs>
          {selectedTab === 0 && (
            <motion.div
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              className={styles.tabContent_container} dir='rtl'>
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
                        <Typography>ميمون بن قيس </Typography>
                      </div>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.title}>
                        <Typography>اللقب</Typography>
                      </div>
                      <div className={styles.name}>
                        <Typography>الأعشى</Typography>
                      </div>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.title}>
                        <Typography>سبب اللقب</Typography>
                      </div>
                      <div className={styles.name}>
                        <Typography>لضعف بصره</Typography>
                      </div>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.title}>
                        <Typography>تاريخ الميلاد</Typography>
                      </div>
                      <div className={styles.name}>
                        <Typography>23 هـجريًا - 644 ميلاديًا</Typography>
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
                        <Typography>105 هـجريًا - 723 ميلاديًا</Typography>
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
                      ميمون بن قيس، من بني بكر، لُقِّب بالأعشى لضعف بصره، وُلِدَ في نجد بقرية المنفوحة في اليمامة، وعاش فيها، وكان كثير الوفود على ملوك العرب والفرس، وكثُرت في شعره الألفاظ الفارسية، كان من أغزر الشعراء شِعرًا، ولا يُعرف قبله من هو أكثر منه شِعرًا، ولا من تكسب بشعره قبله، يجيد جميع أنواع الشعر، اشتهر بغنائه لشعره، فسموه: صَنَّاجة العرب (والصناجة صفيحتان من النحاس يضرب بهما للطرب) ، أدرك الإسلام ولم يدخل فيه، فقد خرج يريد مدح النبي صلى الله عليه وسلم فاعترضه بعض المشركين وحذروه من أن رسول الله يمنع الخمر وأعطوه مائة ناقة ليرجع فقال أرجع وأرتوي سنة من الخمر ثم أعود فأسلم فمات في تلك السنة، عاش طويلًا، وأصيب بالعمى في آخر حياته، ومات في المنفوحة سنة 7ه/629م.
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
                      غناء الشعر ، ووفوده على ملوك العرب والفرس والتكسب بشعره – استخدام الألفاظ الفارسية في شعره
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
                      خرج يريد مدح النبي صلى الله عليه وسلم فاعترضه بعض المشركين وحذروه من أن رسول الله يمنع الخمر وأعطوه مائة ناقة ليرجع فقال أرجع وأرتوي سنة من الخمر ثم أعود فأسلم فمات في تلك السنة.
                    </Typography>
                  </div>
                </div>
              </section>

            </motion.div>
          )}
          {selectedTab === 1 && (
            <motion.div
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              className={styles.tabContent_container} dir='rtl'>
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
                            defaultValue='كل العصور'
                            sx={selectBoxStyles}
                            onChange={handleChange}
                            IconComponent={CustomArrowIcon}

                          >
                            <MenuItem value="all_ages">كل العصور</MenuItem>
                            <MenuItem value={10}>كل العصور</MenuItem>
                            <MenuItem value={20}>كل العصور</MenuItem>
                            <MenuItem value={30}>كل العصور</MenuItem>
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
                    <SliderVerses />
                  </div>
                </div>
              </section>



            </motion.div>
          )}

        </Paper>
      </Container>

      <Footer />

    </>

  );
}