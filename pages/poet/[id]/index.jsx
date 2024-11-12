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

  useEffect(() => {
    const list = document.querySelectorAll("#list");

    async function activelink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activelink));


  }, []);





  const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN;
  const description = "استكشف الشعراء عبر العصور";
  const imagePath = dataPoet?.icon;

  return (
    <>


      <Head>
        <title>{dataPoet?.name}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="csrf-token"
          content="JdDvDc4LUJomFM4T7QE0hFlH9CeKOHDXMoxV3wer"
        />
        <meta name="title" content="" />
        <link rel="icon" type="image/ico" href={`/logo_mobile_footer.ico`} />
        <meta name="theme-color" content="#cd5827" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={t("yearOfArabicPoetry")} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="apple-mobile-web-app-title"
          content={t("yearOfArabicPoetry")}
        />
        <link rel="apple-touch-icon" href={`${imagePath}`} />
        <link
          rel="apple-touch-startup-image"
          href={`${imagePath}`}
        />
        <meta name="author" content={t("yearOfArabicPoetry")} />
        <meta name="description" content={description} />
        <link rel="canonical" href={`${appDomain}/`} />
        <meta name="msapplication-TileColor" content="#cd5827" />
        <meta
          name="msapplication-TileImage"
          content={`${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content={t("yearOfArabicPoetry")} />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="ar" />
        <meta property="og:url" content={`${appDomain}/`} />
        <meta property="og:title" content={t("yearOfArabicPoetry")} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${imagePath}`} />
        <meta itemProp="name" content={t("yearOfArabicPoetry")} />
        <meta itemProp="author" content={t("yearOfArabicPoetry")} />
        <meta itemProp="image" content={`${imagePath}`} />
        <meta itemProp="description" content={description} />
        <meta name="twitter:image" content={`${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={t("yearOfArabicPoetry")} />
        <meta name="twitter:image:src" content={`${imagePath}`} />
        <meta name="twitter:description" content={description} />
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
                        <SliderVerses dataPoetry={dataPoetry} />
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
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const langIdEnvKey = `LANG_ID_${locale?.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];
  const { id } = params;

  const resPoet = await fetch(`${apiDomain}/api/Poets/GetPoetFullData?id=${id}&lang=${langId}`);
  const dataPoet = await resPoet.json();

  const resPoetry = await fetch(`${apiDomain}/api/Poetries/GetAllPoetries?poet=${id}&lang=${langId}&pagenum=1&pagesize=50`);
  const dataPoetry = await resPoetry.json();




  return {
    props: {
      dataPoet,
      dataPoetry,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 10,
  };
}


export async function getStaticPaths() {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  const response = await fetch(`${apiDomain}/api/Poets/GetAllPoetsIds`);
  const placeIds = await response.json();

  const paths = placeIds.map((id) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: 'blocking'
  };
}



