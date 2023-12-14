import React from 'react'
import LiteraryBanner from '@/components/LiteraryBanner'
import Poets from '@/components/Poets'
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../../index.module.scss'
const Era = ({ dataAllEras, eraDetails, dataPoetsByEra, dataAllPlacesMap, dataAllCitiesMap }) => {



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
      >


        <LiteraryBanner eraDetails={eraDetails} dataAllEras={dataAllEras} />
        <Poets dataPoetsByEra={dataPoetsByEra} dataAllCitiesMap={dataAllCitiesMap} dataAllPlacesMap={dataAllPlacesMap} />
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

  const resAllPlacesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllPlaces?type=6&lang=2&pagenum=1&pagesize=50`);
  const dataAllPlacesMap = await resAllPlacesMap.json();

  return {
    props: {
      dataAllEras: dataAllEras,
      eraDetails,
      dataPoetsByEra,
      dataAllCitiesMap: dataAllCitiesMap,
      dataAllPlacesMap: dataAllPlacesMap,
    },
    revalidate: 10
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
