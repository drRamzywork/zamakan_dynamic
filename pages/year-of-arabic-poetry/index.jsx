import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Image from 'next/image';
import styles from './index.module.scss';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from 'framer-motion';
import AboutSection from '@/components/YearOfArabicPoetry/AboutSection/index.jsx';
import MinisterSpeech from '@/components/YearOfArabicPoetry/MinisterSpeech';
import Head from "next/head";
import { useRouter } from 'next/router';
import Navbar from '@/components/YearOfArabicPoetry/Navbar';

const desc = `نؤمن في منظومة الثقافة بالمكانة الحضارية المهمة للجزيرة العربية، ودورها المؤثر في نشأة الشعر العربي ونهضته الكبرى التي جعلت من هذا الفن البديع ديواناً للعرب، ومجنى لثمر العقول، ببحوره وفنونه وأساليبه وقصائده، التي وثقت المعاني الجليلة، ونقلت مآثر العرب، وصاغت مشاعرهم وأفكارهم وتطلعاتهم نحو الخير والحياة والجمال.

وانطلاقاً من رؤية السعودية 2030، التي يقودها سمو ولي العهد -يحفظه الله، نسعى في وزارة الثقافة إلى تعزيز هذه المكانة للشعر العربي في ثقافة الفرد، والتأكيد على مكانته الكبيرة في مدار الشعر الإنساني بشكلٍ عام، وإثراء الإبداع الشعري المتطور والمستدام بكل قوالبه وأشكاله، ونفخر بإبراز المكوّن الحضاري الشعريّ العربي المتميز عن بقية الفنون بكونه وعاء الحكمة والمعرفة والتأثير الاجتماعي الأكبر، وتجذره في تاريخ الجزيرة العربية، كما نعتز بقيمة الشعر السعودي المعاصر ومكانته البارزة على مستوى العالم العربي.

وتأتي تسمية عام 2023م بــ''عام الشعر العربي'' للاحتفاء بذلك كله، عبر فعاليات وأنشطة ومبادرات تقام على مدار العام، وبشراكة فاعلة من أفراد المجتمع وكافة الجهات المعنية، في سبيل إحياء تاريخ الشعر العربي العريق، وتعزيز حضوره في الحضارة الإنسانية، وإرساء قواعد ثرائه المستقبلي، وإحلاله مكانته المستحقة بين آداب العالم وفنونه، وقبل ذلك التأكيد على مرجعية المملكة العربية السعودية باعتبارها راعية للثقافة العربية وداعمة لها.

بدر بن عبدالله بن فرحان آل سعود
وزير الثقافة`;

const YearOfArabicPoetry = () => {
  const router = useRouter();


  return (
    <>
      <Head>
        <title>عام الشعر العربي</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={'عام العشر العربي'}
        />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content="https://zamakanwebnew.suwa.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={'/assets/imgs/dark_logo.png'}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content={'/assets/imgs/dark_logo.png'}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'عام العشر العربي'} />
        <meta name="twitter:description" content={desc} />
        <meta
          name="twitter:image"
          content={'/assets/imgs/dark_logo.png'}
        />
        <link rel="alternate" href={`https://islam-web.vercel.app/${router.query.topic}`} hreflang={router.locale} />
        <link rel="alternate" href={`https://islam-web.vercel.app/${router.locale}/${router.query.topic}`} hreflang={router.locale} />

      </Head>
      <Navbar />

      <header id='year-of-arabic-poetry' className={styles.year_of_arabic_poetry}>
        <Container maxWidth={false}>
          <div className={styles.sec_container}>

            <motion.div initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }}

              className={styles.logo}>
              <Image width={500} height={200} src="/assets/imgs/dark_logo.png" alt="Year of Arabic poetry" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.docs}>

              <Image width={500} height={200} src="/assets/imgs/docs_2.png" alt="Year of Arabic poetry" />
            </motion.div>
          </div>
        </Container>
      </header>

      <AboutSection />
      <MinisterSpeech />
    </>
  );
}

export default YearOfArabicPoetry;

export async function getStaticProps({ locale }) {
  const langIdEnvKey = `LANG_ID_${locale?.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      langId
    },
    revalidate: 10,
  };
}
