import Layout from "@/components/Layout";
import "@/styles/globals.scss";

// export default function App({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

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
