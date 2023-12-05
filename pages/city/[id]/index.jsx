import PageHeader from '@/components/Cities/PageHeader'
import Verses from '@/components/Cities/Verses'
import React from 'react'

const Cities = ({ dataCityData, dataCityPoetry }) => {

  return (
    <>
      <PageHeader dataCityPoetry={dataCityPoetry} dataCityData={dataCityData} />
      <Verses dataCityPoetry={dataCityPoetry} dataCityData={dataCityData} />
    </>
  )
}

export default Cities

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

export async function getStaticProps({ params }) {
  const { id } = params;

  const resCityData = await fetch(`https://api4z.suwa.io/api/Makan/GetMakanFullData?makan=${id}&lang=2`);
  const dataCityData = await resCityData.json();

  const resCityPoetry = await fetch(`https://api4z.suwa.io/api/Poetries/GetAllPoetries?place=${id}&lang=2&pagenum=1&pagesize=1`);
  const dataCityPoetry = await resCityPoetry.json();

  return {
    props: {
      dataCityData,
      dataCityPoetry
    },
    revalidate: 3600,
  };
}
