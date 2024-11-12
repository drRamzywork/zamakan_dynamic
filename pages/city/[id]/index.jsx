import React from 'react'
import PageHeader from '@/components/Cities/PageHeader'
import Verses from '@/components/Cities/Verses'
import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'react-i18next';


const Cities = ({ dataCityData, dataCityPoetry }) => {
  const { t } = useTranslation("common");

  const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN;
  const description = "شُعراء العصور الأَدبيّة في مَناطِق المملكة العربيّة السُّعوديّة";
  const imagePath = dataCityData?.icon;


  return (
    <>
      <Head>
        <title>{dataCityData?.name}</title>
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
        <link rel="apple-touch-icon" href={`${appDomain}/${imagePath}`} />
        <link
          rel="apple-touch-startup-image"
          href={`${appDomain}/${imagePath}`}
        />
        <meta name="author" content={t("yearOfArabicPoetry")} />
        <meta name="description" content={description} />
        <link rel="canonical" href={`${appDomain}/`} />
        <meta name="msapplication-TileColor" content="#cd5827" />
        <meta
          name="msapplication-TileImage"
          content={`${appDomain}/${imagePath}`}
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
        <meta property="og:image" content={`${appDomain}/${imagePath}`} />
        <meta itemProp="name" content={t("yearOfArabicPoetry")} />
        <meta itemProp="author" content={t("yearOfArabicPoetry")} />
        <meta itemProp="image" content={`${appDomain}/${imagePath}`} />
        <meta itemProp="description" content={description} />
        <meta name="twitter:image" content={`${appDomain}/${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={t("yearOfArabicPoetry")} />
        <meta name="twitter:image:src" content={`${appDomain}/${imagePath}`} />
        <meta name="twitter:description" content={description} />
      </Head>

      <PageHeader dataCityPoetry={dataCityPoetry} dataCityData={dataCityData} />
      <Verses dataCityPoetry={dataCityPoetry} dataCityData={dataCityData} />
    </>
  )
}

export default Cities;


export async function getStaticPaths() {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  const response = await fetch(`${apiDomain}/api/Makan/GetAllPlacesIds`);




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
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  const langIdEnvKey = `LANG_ID_${locale?.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];
  const { id } = params;

  const resCityData = await fetch(`${apiDomain}/api/Makan/GetMakanFullData?makan=${id}&lang=${langId}`);
  const dataCityData = await resCityData.json();

  const resCityPoetry = await fetch(`${apiDomain}/api/Poetries/GetAllPoetries?place=${id}&lang=${langId}&pagenum=1&pagesize=50`);
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
