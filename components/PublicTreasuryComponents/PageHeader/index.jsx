import React from 'react'
import styles from './index.module.scss'
import { imgs } from '@/assets/constants'
import { Container, Typography } from '@mui/material';


const PageHeader = () => {
  const { star, redBird, BrownDeer } = imgs;

  return (
    <header id={styles.header}>
      <Container maxWidth={false} >
        <div className={styles.sec_title}>
          <div className={styles.img_container}>
            <img src={star.src} alt="" />
          </div>

          <Typography variant='h1'>
            خزانة العام
          </Typography>

          <div className={styles.img_container}>
            <img src={star.src} alt="" />
          </div>
        </div>
      </Container>

      <div className={styles.red_bird}>
        <img src={redBird.src} alt="" />
      </div>
    </header>
  )
}

export default PageHeader