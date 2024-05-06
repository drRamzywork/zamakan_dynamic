import styles from "@/styles/Home.module.css";
import LandingPage from "@/components/LandingPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const defaultLocale = locale || "ar";

  return {
    props: {
      ...(await serverSideTranslations(defaultLocale, ["common"])),
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
