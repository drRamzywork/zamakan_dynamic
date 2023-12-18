import { imgs } from '@/assets/constants'
import { PageSection } from '@/components/PublicTreasuryComponents';
import { Container, Typography } from '@mui/material';
import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';
const PublicTreasury = () => {
  const { BrownDeer, place1, redPlants, star, redBird } = imgs;

  const sections = [
    {
      key: 'التوثيق المكاني',
      data: [
        { id: 1, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 1, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 1, title: "الشاعر طرفة بن العبد", img: place1.src },
      ]
    },
    {
      key: 'التوثيق البصري',
      data: [
        { id: 2, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 2, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 2, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 2, title: "الشاعر طرفة بن العبد", img: place1.src },
      ]
    },
    {
      key: 'من أبيات الشعراء',
      data: [
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
      ]
    },
  ];


  return (
    <>

      <Container maxWidth={false} >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <header id={styles.header}>
            <Container maxWidth={false} >
              <div className={styles.sec_title}>
                <div className={styles.img_container}>
                  <Image width={100} height={100} src={star.src} alt="star" />
                </div>

                <Typography variant='h1'>
                  خزانة العام
                </Typography>

                <div className={styles.img_container}>
                  <Image width={100} height={100} src={star.src} alt="star" />
                </div>
              </div>
            </Container>

            <div className={styles.red_bird}>
              <Image width={100} height={100} src={redBird.src} alt="red bird" />
            </div>
          </header>
        </motion.div>

        <div id='PublicTreasury'>



          {sections.map((section, index) => (
            <PageSection key={index} title={section.key} data={section.data} />
          ))}
        </div >
      </Container>
      <section id='footer' className={styles.footer}>
        <div className={styles.imgs_container}>
          <div className={styles.leftPlants}>
            <Image width={592} height={408} src={redPlants.src} alt="" />
          </div>
          <div className={styles.deer}>
            <Image width={592} height={408} src={BrownDeer.src} alt="" />
          </div>
          <div className={styles.rightPlants}>
            <Image width={592} height={408} src={redPlants.src} alt="" />
          </div>
        </div>

      </section>
    </>

  )
}

export default PublicTreasury