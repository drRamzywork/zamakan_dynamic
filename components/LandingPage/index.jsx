import { Container, Typography, } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'
import imgs from '../../assets/constants/imgs'
import { LeftArrow, PalmSvg, } from '@/assets/svgsComponents';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SmallSaudiMap from '@/assets/svgsComponents/SmallSaudiMap';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from "react-icons/fa";





const LandingPage = () => {
  const router = useRouter();
  const {
    Palm,
  } = imgs



  return (

    <>


      < section id='landingPage' className={styles.landingPage} >
        <div className={styles.sec_wrap}>


          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            className={styles.sec_container}>
            <Container sx={{ maxWidth: "1400" }} maxWidth={false}>
              <div className={styles.sec_title}>
                <h1>
                  زمكان الشعر
                  <span>  زمان ومكان الشعر العربي
                    {` `}
                    <br />
                    في  المملكة العربية السُّعوديّة</span>
                </h1>


              </div>
            </Container>



            <div className={styles.palm}>
              <PalmSvg />
            </div>

            <div className={styles.palm_left}>
              <img src={Palm.src} alt="" />
            </div>

          </motion.div>
          <Container maxWidth={false} >
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, }}

              className={styles.boxes_container}>
              <Link href='/literary-eras' className={styles.box}>
                <div className={styles.icon_container}>
                  <FaCalendarAlt />
                </div>
                <div className={styles.title}>
                  <Typography variant='h4'>
                    زمان الشعر
                  </Typography>
                </div>
                <div className={styles.arrow}>
                  <LeftArrow />
                </div>
              </Link>
              <Link href='/places' className={styles.box}>
                <div className={styles.icon_container}>
                  <SmallSaudiMap />

                </div>
                <div className={styles.title}>
                  <Typography variant='h4'>
                    مكان الشعر
                  </Typography>
                </div>
                <div className={styles.arrow}>
                  <LeftArrow />
                </div>
              </Link>


            </motion.div>


          </Container >
        </div>

      </section >



    </>

  )
}

export default LandingPage