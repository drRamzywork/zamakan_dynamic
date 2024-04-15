import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Image from 'next/image';
import styles from './index.module.scss';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import { useAnimateOnInView, useSectionInView } from '../../hooks/useAnimateOnInView'; // ensure the path is correct
import { motion } from 'framer-motion';
import AboutSection from '@/components/YearOfArabicPoetry/AboutSection';

const YearOfArabicPoetry = () => {

  const animationDefault = useAnimateOnInView('default');
  const animationSlideUp = useAnimateOnInView('slideUp');
  const animationSlideRight = useAnimateOnInView('slideRight');






  return (
    <>

      <motion.header {...animationDefault} id='year-of-arabic-poetry' className={styles.year_of_arabic_poetry}>
        <Container maxWidth={false}>
          <div className={styles.sec_container}>
            <div className={styles.logo}>
              <Image width={500} height={200} src="/assets/imgs/dark_logo.png" alt="Year of Arabic poetry" />
            </div>
            <motion.div {...animationSlideUp} className={styles.docs}>

              <Image width={500} height={200} src="/assets/imgs/docs_2.png" alt="Year of Arabic poetry" />
            </motion.div>
          </div>
        </Container>
      </motion.header>





      <AboutSection />

    </>
  );
}

export default YearOfArabicPoetry;

export async function getStaticProps({ locale }) {
  const langIdEnvKey = `LANG_ID_${locale.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      langId
    },
    revalidate: 10,
  };
}
