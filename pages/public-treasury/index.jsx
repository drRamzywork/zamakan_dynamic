import { LeftPlants, PageSection, RightPlants } from '@/components/PublicTreasuryComponents';
import { Container, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';


const PublicTreasury = ({ AllMainTopics }) => {
  const { t } = useTranslation('common')
  const animation = useAnimation();

  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0
        }
      })
    }

    if (!inView) {
      animation.start({ x: '-100vw' })
    }

  }, [inView]);

  const rightPlantsRef = useRef(null);
  const leftPlantsRef = useRef(null);




  return (
    <>

      <Container maxWidth={false} >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <header id={styles.header}>
            <div className={styles.sec_title}>
              <div className={styles.img_container}>
                <Image width={100} height={100} src={"/assets/imgs/star.png"} alt="star" />
              </div>

              <Typography variant='h1'>
                {t('poetryarchive')}
              </Typography>

              <div className={styles.img_container}>
                <Image width={100} height={100} src={"/assets/imgs/star.png"} alt="star" />
              </div>
            </div>

            <div className={styles.red_bird}>
              <Image width={100} height={100} src={"/assets/imgs/redBird.png"} alt="red bird" />
            </div>
          </header>
        </motion.div>

        <div id='PublicTreasury'>
          <PageSection AllMainTopics={AllMainTopics} />
        </div >

      </Container>
      <section id='footer' className={styles.footer} ref={ref}>
        <div className={styles.imgs_container}>
          <LeftPlants redPlants={"/assets/imgs/redPlants.png"} ref={leftPlantsRef} />
          <motion.div
            animate={animation} className={styles.deer} >
            <Image width={592} height={408} src={"/assets/imgs/BrownDeer.png"} alt="" />
          </motion.div>

          <RightPlants redPlants={"/assets/imgs/redPlants.png"} ref={rightPlantsRef} />
        </div>

      </section>
    </>

  )
}

export default PublicTreasury


export async function getStaticProps({ locale }) {
  const langIdEnvKey = `LANG_ID_${locale?.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];

  const resAllMainTopics = await fetch(`https://api4z.suwa.io/api/Media/GetAllMainTopics?lang=${langId}&withPlaces=true&pagenum=1&pagesize=50`);
  const AllMainTopics = await resAllMainTopics.json();




  return {
    props: {
      AllMainTopics,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 10,
  };
}
