import React from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material'
import { imgs } from '@/assets/constants'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const PageHeader = ({ dataAllCitiesMap }) => {
  const {
    KSA,
  } = imgs

  return (
    <div id='page-header' className={styles.page_header}>
      <div className={styles.img_container}>
        {dataAllCitiesMap &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            src={dataAllCitiesMap?.images} alt="" />
        }

        {dataAllCitiesMap === undefined &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            src={KSA.src} alt="" />
        }

      </div>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <div className={styles.sec_title}>
          <Typography variant='h3'>
            استكشف الأماكن
            < br />
            عبر المناطق
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default PageHeader