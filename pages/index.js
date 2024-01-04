import styles from "@/styles/Home.module.css";
import LandingPage from "@/components/LandingPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  return (
    <>
      <div className={`${styles.main} `} dir="rtl">
        <LandingPage />
      </div>
    </>
  );
}
