import React from 'react'
import styles from './index.module.scss'
import { Container, } from '@mui/material';
import { useAnimateOnInView, useSectionInView } from '../../hooks/useAnimateOnInView';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const animationDefault = useAnimateOnInView('default');
  const animationSlideUp = useAnimateOnInView('slideUp');

  const animationStar1 = useAnimateOnInView('star1');
  const animationStar2 = useAnimateOnInView('star2');
  const animationStar3 = useAnimateOnInView('star3');

  return (
    <section id='about' className={styles.about}>
      <Container maxWidth={false}>


        <motion.div {...animationSlideUp} className={styles.stars_container}>
          <motion.div  {...animationStar1}>
            <img src="/assets/imgs/star.png" alt="Star 1" />
          </motion.div>
          <motion.div {...animationStar2}>
            <img src="/assets/imgs/star.png" alt="Star 2" />
          </motion.div>
          <motion.div {...animationStar3}>
            <img src="/assets/imgs/star.png" alt="Star 3" />
          </motion.div>


        </motion.div>

        <motion.div
          {...animationSlideUp}
          className={styles.title}>
          <h1> عن عام الشعر العربي</h1>
        </motion.div>

        <motion.div {...animationDefault} className={styles.desc}>
          <p>
            على مدى عقود مضت احتلّ الشعر العربي مكانة ثقافية باعتباره من أهم المكونات الحضارية للثقافة العربية، وحتى وقتنا المعاصر يتصدر الشعر العربي المحافل الأدبية، ومن أجل ترسيخ هذا المكون الحضاري تسعى المملكة العربية السعودية إلى جعله حاضراً في الحياة اليومية للثقافة السعودية والعربية؛ وعليه تقررت تسمية عام 2023 ليكون "عام الشعر العربي".

          </p>
        </motion.div>

        <motion.div
          {...animationSlideUp}
          className={styles.title}>
          <h1>الرؤية</h1>
        </motion.div>

        <motion.div {...animationDefault} className={styles.desc}>
          <p>
            شعرٌ عربيٌ أصيل، ذو ماضٍ عريق، وحاضر حي، ومستقبل مزدهر.

          </p>
        </motion.div>

      </Container>
    </section>)
}

export default AboutSection