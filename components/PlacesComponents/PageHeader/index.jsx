import React from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material'
import { imgs } from '@/assets/constants'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const PageHeader = ({ dataAllCitiesMap }) => {
  const { Central,
    Eastern,
    North,
    Northwest,
    South,
    Western,
  } = imgs
  const router = useRouter();

  const filterCity = dataAllCitiesMap?.filter(city => city.id === Number(router.query.id));



  return (
    <div id='page-header' className={styles.page_header}>
      <div className={styles.img_container}>
        {filterCity &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}

            src={filterCity[0]?.images} alt="" />
        }

        {router.query.id === undefined &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}

            src={Central.src} alt="" />
        }

        {/* {router.query.id === "1" &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }} src={North.src} alt="" />
        }

        {router.query.id === "2" &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }} src={Northwest.src} alt="" />
        }

        {router.query.id === "3" &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }} src={Eastern.src} alt="" />
        }
        {router.query.id === "4" &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }} src={South.src} alt="" />
        }
        {router.query.id === "5" &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }} src={Central.src} alt="" />
        }
        {router.query.id === "6" &&
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }} src={Western.src} alt="" />
        } */}

      </div>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <div className={styles.sec_title}>
          <Typography variant='h3'>
            مناطق المملكة
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default PageHeader