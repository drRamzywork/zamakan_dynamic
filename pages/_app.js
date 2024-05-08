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
        <meta
          name="description"
          content="استكشف الشعراء عبر العصور التاريخية الأدبية"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="عام الشعر العربي" />
        <meta
          property="og:description"
          content="استكشف الشعراء عبر العصور التاريخية الأدبية"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://zamakanwebnew.suwa.io/logo_mobile_footer.png"
        />
        <meta property="og:url" content="https://zamakanwebnew.suwa.io/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="عام الشعر العربي" />
        <meta
          name="twitter:description"
          content="استكشف الشعراء عبر مناطق المملكة العربية السعودية"
        />
        <meta
          name="twitter:image"
          content="https://zamakanwebnew.suwa.io/logo_mobile_footer.png"
        />
      </Head>
      <DataContext.Provider>
        <Component {...pageProps} />
      </DataContext.Provider>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
