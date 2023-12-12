import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import { Router } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log("Route is changing to:", url);
    };

    const handleRouteComplete = (url) => {
      console.log("Route change complete:", url);
    };

    const handleRouteChangeError = (err, url) => {
      console.error("Route change error:", err, "URL:", url);
    };

    Router.events.on("routeChangeStart", handleRouteChange);
    Router.events.on("routeChangeComplete", handleRouteComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    // Clean up
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
      Router.events.off("routeChangeComplete", handleRouteComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
