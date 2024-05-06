import React from 'react'
import PageHeader from '@/components/Cities/PageHeader'
import Verses from '@/components/Cities/Verses'
import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const Cities = ({ dataCityData, dataCityPoetry }) => {



  return (
    <>
      <Head>
        <title>{dataCityData.name}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="استكشف الشعراء
عبر العصور" />
        <meta name="description" content="شُعراء العصور الأَدبيّة في مَناطِق المملكة العربيّة السُّعوديّة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader dataCityPoetry={dataCityPoetry} dataCityData={dataCityData} />
      <Verses dataCityPoetry={dataCityPoetry} dataCityData={dataCityData} />
    </>
  )
}

export default Cities;


export async function getStaticPaths() {
  const response = await fetch('https://api4z.suwa.io/api/Makan/GetAllPlacesIds');




  if (!response.ok) {
    throw new Error(`API call failed: ${response.status}`);
  }

  const ids = await response.json();

  // Generate the paths
  const paths = ids.map(id => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, locale }) {
  const langIdEnvKey = `LANG_ID_${locale?.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];
  const { id } = params;

  const resCityData = await fetch(`https://api4z.suwa.io/api/Makan/GetMakanFullData?makan=${id}&lang=${langId}`);
  const dataCityData = await resCityData.json();

  const resCityPoetry = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?place=${id}&lang=${langId}&pagenum=1&pagesize=50`);
  const dataCityPoetry = await resCityPoetry.json();

  return {
    props: {
      dataCityData,
      dataCityPoetry,
      ...(await serverSideTranslations(locale, ["common"])),
    },

    revalidate: 10,
  };
}
