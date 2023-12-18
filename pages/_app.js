import Layout from "@/components/Layout";
import "@/styles/globals.scss";

import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // Call the page's `getInitialProps` and fill `pageProps`
  const pageProps = await App.getInitialProps(appContext);

  // Perform additional operations if needed

  return { pageProps };
};

export default MyApp;
