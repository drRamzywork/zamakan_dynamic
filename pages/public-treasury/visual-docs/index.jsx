import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from '../index.module.scss'
import { imgs } from '@/assets/constants'
import { motion, useAnimation, useInView } from 'framer-motion';
import stylesMain from './index.module.scss'
import stylesPageSec from '../../../components/PublicTreasuryComponents/PageSection/index.module.scss';

const VisualDocs = () => {
  const { BrownDeer, redPlants, star, redBird, } = imgs;

  return (
    <>
      <header id={styles.header}>
        <div className={styles.sec_title}>
          <div className={styles.img_container}>
            <Image width={100} height={100} src={star.src} alt="star" />
          </div>

          <Typography variant='h1'>
            التوثيق البصري
          </Typography>

          <div className={styles.img_container}>
            <Image width={100} height={100} src={star.src} alt="star" />
          </div>
        </div>

        <div className={styles.red_bird}>
          <Image width={100} height={100} src={redBird.src} alt="red bird" />
        </div>
      </header>



    </>
  )
}

export default VisualDocs
