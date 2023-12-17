import React from 'react'
import styles from './index.module.scss'
import { imgs } from '@/assets/constants'

const PageFooter = () => {
  const { BrownDeer, redPlants } = imgs;

  return (
    <section id='footer' className={styles.footer}>
      <div className={styles.imgs_container}>
        <div className={styles.leftPlants}>
          <img src={redPlants.src} alt="" />
        </div>
        <div className={styles.deer}>
          <img src={BrownDeer.src} alt="" />
        </div>
        <div className={styles.rightPlants}>
          <img src={redPlants.src} alt="" />
        </div>
      </div>

    </section>
  )
}

export default PageFooter