import React, { useState } from 'react'
import LiteraryBanner from '@/components/LiteraryBanner'
import Poets from '@/components/Poets'
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../../index.module.scss'
const Era = ({ dataAllEras, eraDetails, poetsData, dataPoetsByEra, dataAllCitiesMap, dataAllPlaces, dataAllPoetries }) => {
  const [isLayerActive, setIsLayerActive] = useState(false);
  return (
    <>
      <Head>
        <title>{eraDetails?.name}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="استكشف الشعراء
عبر العصور" />
        <meta name="description" content="شُعراء العصور الأَدبيّة في مَناطِق المملكة العربيّة السُّعوديّة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, }}
        className={styles.layer_wrap}
      >
        {isLayerActive && (
          <div className={styles.layer} />
        )}

        <LiteraryBanner eraDetails={eraDetails} dataAllEras={dataAllEras} />
        <Poets isLayerActive={isLayerActive}
          dataAllPlaces={dataAllPlaces} dataAllPoetries={dataAllPoetries}
          setIsLayerActive={setIsLayerActive} dataPoetsByEra={dataPoetsByEra} dataAllCitiesMap={dataAllCitiesMap} poetsData={poetsData} />
      </motion.div>

    </>
  )
}

export default Era

export async function getStaticProps({ params }) {
  const { index } = params;
  let eraDetails = null;



  try {
    const res = await fetch(`https://api4z.suwa.io/api/Zaman/GetEra?id=${index}&lang=2`);
    if (res.ok) {
      eraDetails = await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch era details:', error);
  }

  const resAllEras = await fetch('https://api4z.suwa.io/api/Zaman/GetAllEras?lang=2&pagenum=1&pagesize=50');
  const dataAllEras = await resAllEras.json();

  const resPoetsByEra = await fetch(`https://api4z.suwa.io/api/Poets/GetAllPoets?era=${index}&lang=2&pagenum=1&pagesize=50`);
  const dataPoetsByEra = await resPoetsByEra.json();

  const resAllCitiesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=6&lang=2&withPlaces=true&pagenum=1&pagesize=50`);
  const dataAllCitiesMap = await resAllCitiesMap.json();



  const resAllPlaces = await fetch('https://api4z.suwa.io/api/Makan/GetMakanFullData?lang=2');
  const dataAllPlaces = await resAllPlaces.json();

  const resAllPoetries = await fetch('https://api4z.suwa.io/api/Poetries/GetAllPoetries?lang=2&pagenum=1&pagesize=50');
  const dataAllPoetries = await resAllPoetries.json();


  let poetsData = {};

  try {


    for (const poet of dataPoetsByEra) {
      const resPoetPlaces = await fetch(`https://api4z.suwa.io/api/Makan/GetAllPlaces?poet=${poet.id}&lang=2&pagenum=1&pagesize=50`);
      if (resPoetPlaces.ok) {
        poetsData[poet.id] = await resPoetPlaces.json();
      }
    }
  } catch (error) {
    console.error('Error fetching poets data:', error);
  }


  return {
    props: {
      dataAllEras: dataAllEras,
      eraDetails,
      dataPoetsByEra,
      dataAllCitiesMap,
      dataAllPlaces,
      dataAllPoetries,
      poetsData
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const resAllErasIds = await fetch('https://api4z.suwa.io/api/Zaman/GetAllErasIds');
  const allErasIds = await resAllErasIds.json();

  const paths = allErasIds.map((id) => ({
    params: { index: id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}
