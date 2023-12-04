import React from 'react'
import LiteraryBanner from '@/components/LiteraryBanner'
import Poets from '@/components/Poets'
import { useRouter } from 'next/router';

const Era = ({ dataAllEras, eraDetails, dataPoetsByEra, dataAllPlacesMap, dataAllCitiesMap }) => {
  const router = useRouter();
  const { index } = router.query;


  return (
    <>
      <LiteraryBanner eraDetails={eraDetails} dataAllEras={dataAllEras} />
      <Poets dataPoetsByEra={dataPoetsByEra} dataAllCitiesMap={dataAllCitiesMap} dataAllPlacesMap={dataAllPlacesMap} />

    </>
  )
}

export default Era

export async function getServerSideProps(context) {
  const { index } = context.query;
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

  const resAllCitiesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=13&lang=2&withPlaces=true&pagenum=1&pagesize=50  `);
  const dataAllCitiesMap = await resAllCitiesMap.json();


  const resAllPlacesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllPlaces?type=13&lang=2&pagenum=1&pagesize=50`);
  const dataAllPlacesMap = await resAllPlacesMap.json();


  return {
    props: {
      dataAllEras: dataAllEras,
      eraDetails,
      dataPoetsByEra,
      dataAllCitiesMap: dataAllCitiesMap,
      dataAllPlacesMap: dataAllPlacesMap

    },
  };
}


