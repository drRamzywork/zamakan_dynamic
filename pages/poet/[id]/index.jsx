import { Box, Container, Grid, Typography, } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Feather from '../../../assets/svgsComponents/Feather'
import { motion } from 'framer-motion'
import SliderVerses from '@/components/PoetsDetailsComponents/SliderVerses';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FaUserLarge } from "react-icons/fa6";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';


export default function Poet({ dataPoet, dataPoetry }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const router = useRouter();
  const { t } = useTranslation();
  const [results, setResults] = useState(dataPoetry);

  useEffect(() => {
    const list = document.querySelectorAll("#list");

    async function activelink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activelink));


  }, []);




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
        transition={{ duration: 1 }}>
        <Container dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`} maxWidth={false} className={styles.poetDetails}>
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



          <div className={styles.navigation} >
            <ul>
              <li className={`${styles.list} ${1 === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(1)}>
                <button >
                  <span className={styles.iconWrapper}>
                    <FaUserLarge />
                  </span>
                  <p>{t("aboutPoet")}</p>
                </button>
              </li>


              <li className={`${styles.list} ${0 === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(0)}>
                <button >
                  <span className={styles.iconWrapper}>
                    <Feather />
                  </span>
                  <p>
                    {t("versesInKSA")}
                  </p>
                </button>
              </li>
              <div className={`${styles.indicator} ${styles[`indicator-${activeIndex}`]}`}><span></span></div>
            </ul>
          </div>
          <div className={styles.tabsSection} >
            {activeIndex === 1 && (
              <div className={styles.tabContent_container} >
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, }}
                >
                  <section className={styles.timelineSection}>
                    <div className={styles.sec_title}>
                      <Typography variant='h3'>{t("personalInformation")}</Typography>
                    </div>

                    <div className={styles.info_sec}>

                      <div className={styles.boxes_container}>

                        <div className={styles.box}>
                          <div className={styles.title}>
                            <Typography >{t("name")} </Typography>
                          </div>
                          <div className={styles.name}>
                            <Typography>
                              {dataPoet.fullName}
                            </Typography>
                          </div>
                        </div>
                        <div className={styles.box}>
                          <div className={styles.title}>
                            <Typography>{t("title")}</Typography>
                          </div>
                          <div className={styles.name}>
                            <Typography>
                              {dataPoet.nickname}
                            </Typography>
                          </div>
                        </div>
                        <div className={styles.box}>
                          <div className={styles.title}>
                            <Typography>{t("reasonForTheTitle")}</Typography>
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
                      <Typography variant='h3'>{t("reasonForTheTitle")}:</Typography>
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
                      <Typography variant='h3'>{t("thePoetIsFamousFor")}:
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
                className={styles.tabContent_container} >
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, }}
                >
                  <section className={styles.timelineSection}>
                    <div className={styles.slider_container}>

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

export async function getStaticProps({ params, locale }) {
  const langIdEnvKey = `LANG_ID_${locale.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];
  const { id } = params;
  const resPoet = await fetch(`https://api4z.suwa.io/api/Poets/GetPoetFullData?id=${id}&lang=${langId}`);
  const dataPoet = await resPoet.json();

  const resPoetry = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?poet=${id}&lang=${langId}&pagenum=1&pagesize=50`);
  const dataPoetry = await resPoetry.json();

  const resAllEras = await fetch('https://api4z.suwa.io/api/Zaman/GetAllEras?lang=${langId}&pagenum=1&pagesize=50');
  const dataAllEras = await resAllEras.json();



  return {
    props: {
      dataPoet,
      dataPoetry,
      dataAllEras,
      ...(await serverSideTranslations(locale, ["common"])),

    },
    revalidate: 10,
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



