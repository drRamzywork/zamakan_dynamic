import React from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material'
import { imgs } from '@/assets/constants'
import Image from 'next/image'

const PageHeader = ({ dataAllCitiesMap }) => {
  const {
    KSA,
  } = imgs


  return (
    <div id='page-header' className={styles.page_header}>
      <div className={styles.img_container}>
        {dataAllCitiesMap &&
          <Image
            quality={100}

            width={900} height={200} src={dataAllCitiesMap.images} alt=" مناطق المملة العربية السعودية" />
        }

        {dataAllCitiesMap === undefined &&
          <Image
            quality={100}

            width={500} height={500} src={KSA.src} alt=" مناطق المملة العربية السعودية" />
        }

      </div>
      <Container maxWidth={false}>
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