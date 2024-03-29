import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import Head from "next/head";
import DataContext from "@/context/DataContext";
import { appWithTranslation, useTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Head>
        <title>{t("yearOfArabicPoetry")} </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="عام الشعر العربي 2023" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="استكشف الشعراء عبر العصور التاريخية الأدبية"
        />
        <meta property="og:description" content="عام الشعر العربي 2023" />
        <meta
          property="og:image"
          content="https://zamakanweb1.suwa.io/logo_mobile_footer.png"
        />
        <meta property="og:url" content="https://zamakanweb1.suwa.io" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="استكشف الشعراء عبر مناطق المملكة العربية السعودية"
        />
        <meta name="twitter:description" content="عام الشعر العربي 2023" />
        <meta
          name="twitter:image"
          content="https://zamakanweb1.suwa.io/logo_mobile_footer.png"
        />
      </Head>
      <DataContext.Provider>
        <Component {...pageProps} />
      </DataContext.Provider>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
