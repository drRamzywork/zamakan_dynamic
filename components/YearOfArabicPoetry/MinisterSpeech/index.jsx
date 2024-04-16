import React from 'react'
import styles from './index.module.scss';
import { Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from "react-fast-marquee";

const MinisterSpeech = () => {
  return (
    <section id='ministerSpeech' className={styles.ministerSpeech}>

      <div className={styles.content_container}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, type: "tween" }}
          className={styles.title}>
          <h1>كلمة سمو الوزير</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "tween" }}
          className={styles.desc}>

          <p>
            نؤمن في منظومة الثقافة بالمكانة الحضارية المهمة للجزيرة العربية، ودورها المؤثر في نشأة الشعر العربي ونهضته الكبرى التي جعلت من هذا الفن البديع ديواناً للعرب، ومجنى لثمر العقول، ببحوره وفنونه وأساليبه وقصائده، التي وثقت المعاني الجليلة، ونقلت مآثر العرب، وصاغت مشاعرهم وأفكارهم وتطلعاتهم نحو الخير والحياة والجمال.
          </p>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "tween" }}
          className={styles.desc}>

          <p>
            وانطلاقاً من رؤية السعودية 2030، التي يقودها سمو ولي العهد -يحفظه الله، نسعى في وزارة الثقافة إلى تعزيز هذه المكانة للشعر العربي في ثقافة الفرد، والتأكيد على مكانته الكبيرة في مدار الشعر الإنساني بشكلٍ عام، وإثراء الإبداع الشعري المتطور والمستدام بكل قوالبه وأشكاله، ونفخر بإبراز المكوّن الحضاري الشعريّ العربي المتميز عن بقية الفنون بكونه وعاء الحكمة والمعرفة والتأثير الاجتماعي الأكبر، وتجذره في تاريخ الجزيرة العربية، كما نعتز بقيمة الشعر السعودي المعاصر ومكانته البارزة على مستوى العالم العربي.
          </p>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "tween" }}
          className={styles.desc}>

          <p>
            وتأتي تسمية عام 2023م بــ''عام الشعر العربي'' للاحتفاء بذلك كله، عبر فعاليات وأنشطة ومبادرات تقام على مدار العام، وبشراكة فاعلة من أفراد المجتمع وكافة الجهات المعنية، في سبيل إحياء تاريخ الشعر العربي العريق، وتعزيز حضوره في الحضارة الإنسانية، وإرساء قواعد ثرائه المستقبلي، وإحلاله مكانته المستحقة بين آداب العالم وفنونه، وقبل ذلك التأكيد على مرجعية المملكة العربية السعودية باعتبارها راعية للثقافة العربية وداعمة لها.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, type: "tween" }}
          className={styles.title}>
          <h2>بدر بن عبدالله بن فرحان آل سعود</h2>
          <h2>وزير الثقافة</h2>
        </motion.div>



      </div>

      <Container maxWidth={false}>
        <div className={styles.stars_container}>
          <motion.div initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <Image width={80} height={80} src="/assets/imgs/star.png" alt="Star 1" priority />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "tween" }}
          >
            <Image width={80} height={80} src="/assets/imgs/star.png" alt="Star 2" priority />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "tween" }}
          >
            <Image width={80} height={80} src="/assets/imgs/star.png" alt="Star 3" priority />
          </motion.div>


        </div>


        <div className={styles.goals}>
          <div className={styles.wrapper}>
            <div className={styles.title_container}>

              <motion.div
                initial={{ opacity: 0, y: -150, }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.8, type: "tween" }}
                className={styles.red_bird}>
                <Image width={200} height={200} src="/assets/imgs/red_bird2.png" alt="bird" />
              </motion.div>
              <div


                className={styles.title}>
                <motion.h4
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "tween" }}
                >
                  الأهداف
                </motion.h4>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.8, type: "tween" }}
                className={styles.blue_bird}>
                <Image width={200} height={200} src="/assets/imgs/blue_bird.png" alt="bird" />
              </motion.div>


            </div>


            <div className={styles.boxes_container}>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.4, type: "tween" }}
                className={styles.box}>
                <div className={styles.img_container}>
                  <Image width={80} height={80} src="/assets/imgs/star.png" alt="Star 1" />

                </div>
                <div className={styles.text_container}>
                  <p>تعزيز مكانة الشعر العربي في ثقافة الفرد.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.2, type: "tween" }} className={styles.box}>
                <div className={styles.img_container}>
                  <Image width={80} height={80} src="/assets/imgs/star.png" alt="Star 1" />

                </div>
                <div className={styles.text_container}>
                  <p>إثراء الإبداع الشعري المتطور والمستدام.</p>
                </div>
              </motion.div >

              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, type: "tween" }} className={styles.box}>
                <div className={styles.img_container}>
                  <Image width={80} height={80} src="/assets/imgs/star.png" alt="Star 1" priority />

                </div>
                <div className={styles.text_container}>
                  <p>إبراز المكوّن الحضاري الشعريّ وتجذره في تاريخ الجزيرة العربية.</p>
                </div>
              </motion.div >
            </div>

          </div>
        </div>

        <div className={styles.guidance_guides}>
          <div className={styles.header}>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.img_container}>
              <Image width={80} height={80} src="/assets/imgs/star.png" alt="Star 1" priority />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.title}>
              <h4>الأدلة التوجيهية</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.img_container}>
              <Image width={80} height={80} src="/assets/imgs/star.png" alt="Star 1" priority />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "tween" }} className={styles.btns_container}>
            <div className={styles.btn}>
              <Button>
                تحميل الشعار
              </Button>
            </div>
            <div className={styles.btn}>
              <Link href={'https://axc1qs8rzqmq.compat.objectstorage.me-jeddah-1.oraclecloud.com/moc-applications/engage/custom_uploads/The%20Year%20of%20Arabic%20Poetry%20Guidelines%203.pdf'} target='__blank'>
                دليل الهوية

              </Link>
            </div>
          </motion.div>


        </div>



        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "tween" }}
          className={styles.plasms_container}>
          <Image src='/assets/imgs/Plasms.png' width={1192} height={673} />
        </motion.div>

      </Container>

      <Marquee speed={200} pauseOnHover={true} gradient={true} gradientColor={'#f9f4e0'} gradientWidth={100} pauseOnClick={true} className={styles.marquee_container}>
        <Image src='/assets/imgs/Amana.png' width={237} height={237} />
        <Image src='/assets/imgs/ethar.png' width={237} height={237} />
        <Image src='/assets/imgs/FederationOfSaudiChambers.png' width={237} height={237} />
        <Image src='/assets/imgs/HajAndUmrah.png' width={237} height={237} />
        <Image src='/assets/imgs/HR.png' width={237} height={237} />
        <Image src='/assets/imgs/kingAbdulaziz.png' width={237} height={237} />
        <Image src='/assets/imgs/kingAbdulaziz2.png' width={237} height={237} />
        <Image src='/assets/imgs/KIngSalman.png' width={237} height={237} />
        <Image src='/assets/imgs/mac.png' width={237} height={237} />
        <Image src='/assets/imgs/MinistryOfCommerce.png' width={237} height={237} />
        <Image src='/assets/imgs/MinistryOfDevelopment.png' width={237} height={237} />
        <Image src='/assets/imgs/MinistryOfDevelopment2.png' width={237} height={237} />
        <Image src='/assets/imgs/MinistryOfMunicipalRualAffairsAndHosting.png' width={237} height={237} />
        <Image src='/assets/imgs/MinistryOfSport.png' width={237} height={237} />
        <Image src='/assets/imgs/ministryOfTourism.png' width={237} height={237} />
        <Image src='/assets/imgs/monshaat.png' width={237} height={237} />
        <Image src='/assets/imgs/MusicHouse.png' width={237} height={237} />
        <Image src='/assets/imgs/royalCommisionForJubail.png' width={237} height={237} />
        <Image src='/assets/imgs/royalCommissionForAlUla.png' width={237} height={237} />
        <Image src='/assets/imgs/SA.png' width={237} height={237} />
        <Image src='/assets/imgs/SARailways.png' width={237} height={237} />
        <Image src='/assets/imgs/SaudiAuthority.png' width={237} height={237} />
        <Image src='/assets/imgs/SaudiGames.png' width={237} height={237} />
        <Image src='/assets/imgs/SaudiIrrigationOrganization.png' width={237} height={237} />
        <Image src='/assets/imgs/SaudiTourism.png' width={237} height={237} />
        <Image src='/assets/imgs/snapChat.png' width={237} height={237} />
        <Image src='/assets/imgs/SPL.png' width={237} height={237} />
        <Image src='/assets/imgs/starBucks.png' width={237} height={237} />
        <Image src='/assets/imgs/stc.png' width={237} height={237} />
        <Image src='/assets/imgs/trust.png' width={237} height={237} />
      </Marquee>

    </section >
  )
}

export default MinisterSpeech