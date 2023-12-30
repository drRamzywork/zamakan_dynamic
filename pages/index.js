import Head from "next/head";
import styles from "@/styles/Home.module.css";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <div className={`${styles.main} `} dir="rtl">
        <LandingPage />
      </div>
    </>
  );
}
