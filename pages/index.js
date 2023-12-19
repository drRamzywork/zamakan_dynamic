import Head from "next/head";
import { Tajawal } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LandingPage from "@/components/LandingPage";

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export default function Home() {
  return (
    <>
      <div className={`${styles.main} ${tajawal.className}`} dir="rtl">
        <LandingPage />
      </div>
    </>
  );
}
