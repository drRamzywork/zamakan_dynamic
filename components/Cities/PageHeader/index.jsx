import { Container, Typography } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'
import imgs from '../../../assets/constants/imgs'
import Image from 'next/image'
const PageHeader = ({ dataCityData }) => {


  return (
    <header id={styles.cities} dir='rtl'>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <div className={styles.sec_container}>
          <div className={styles.img_container}>
            {/* <div className={styles.text_container}>
              <ul>
                <li>
                  <a href="/">الرئيسية</a>
                </li>
                <li>
                  <a href="/">الرئيسية</a>
                </li>
                <li>
                  <a href="/">الرئيسية</a>
                </li>
              </ul>
            </div> */}
            <div className={styles.img_box}>
              {/* <img src={backgroundCity.src} /> */}
              <Image src={dataCityData.icon} width={434} height={168.2} alt={dataCityData.name} />

            </div>

          </div>

          <div className={styles.text_container}>
            <div className={styles.title}>
              <Typography variant='h3'>{dataCityData.name}</Typography>

              <Typography >{dataCityData.placeType}</Typography>

            </div>

            <div className={styles.desc}>
              <Typography >{dataCityData.description}</Typography>

            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default PageHeader