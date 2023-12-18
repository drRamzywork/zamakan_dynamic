import { imgs } from '@/assets/constants'
import { LeftPlants, PageSection, RightPlants } from '@/components/PublicTreasuryComponents';
import { Container, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
const PublicTreasury = () => {
  const { BrownDeer, place1, redPlants, star, redBird, Eastern, Western } = imgs;

  const sections = [
    {
      key: 'التوثيق المكاني',
      data: [

        {
          id: 1,
          gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/wsw4e33vx26dn1x2jp2r3/is-04-1-copy.webp?rlkey=8ylk9r0kafeykxm4b4m19nylq&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/x3wtbdxco7w8a6jkccns9/DS-21-2-copy.webp?rlkey=l5oa8svfk7qewb5ikszwn4cl9&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/wsxwmvcowx3a7g6ittx4k/DS-18-3-copy.webp?rlkey=fvo179ttqag91fer611rqop9p&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/krwp96ypec8l6itk7dmz0/DS-12-3-copy.webp?rlkey=7wymtzqxwet2rouq4n47002e7&dl=1" }],

          title: "الأحساء", img: "https://www.dropbox.com/scl/fi/wsw4e33vx26dn1x2jp2r3/is-04-1-copy.webp?rlkey=8ylk9r0kafeykxm4b4m19nylq&dl=1"
        },

        { id: 1, gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/3jdf7kuovfc662qmhj5cp/IMG_4832-copy.webp?rlkey=ybc5k7gcpnezla2blhi5yvs8x&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/w4lqy0jxqnelqzncx4ms0/IMG_4861-copy.webp?rlkey=jrwm99zwaq76tsvqm4qsjekyi&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/xwpo2ouqpab6tme3hi22v/IMG_4947-copy.webp?rlkey=uqgj8lv5p4a7s2onjgjhp2m1k&dl=1" }], title: "الباحة", img: "https://www.dropbox.com/scl/fi/3jdf7kuovfc662qmhj5cp/IMG_4832-copy.webp?rlkey=ybc5k7gcpnezla2blhi5yvs8x&dl=1" },
        { id: 1, gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/q7gealoj7mctp2gzd8r93/20231203_132207000_iOS-copy.webp?rlkey=0sxgsc0dcmqblv16y1rmx6781&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/9k2njbnobi2v19tv9gq6x/20231203_131551000_iOS-copy.webp?rlkey=o42umk754bdgmivxbf8t000nf&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/q7gealoj7mctp2gzd8r93/20231203_132207000_iOS-copy.webp?rlkey=0sxgsc0dcmqblv16y1rmx6781&dl=1" }], title: "الطائف", img: "https://www.dropbox.com/scl/fi/q7gealoj7mctp2gzd8r93/20231203_132207000_iOS-copy.webp?rlkey=0sxgsc0dcmqblv16y1rmx6781&dl=1" },
        { id: 1, gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/ljwent9qxv2thejjn8ny5/6A2A7968-copy.webp?rlkey=ik47glifm32w0rwsx5efwqggm&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/nvtj01zkebehwj6319hrk/6A2A7996-copy.webp?rlkey=zc9o1fw4q8l8vnuvkx11rut2o&dl=1" }], title: "القصيم", img: "https://www.dropbox.com/scl/fi/ljwent9qxv2thejjn8ny5/6A2A7968-copy.webp?rlkey=ik47glifm32w0rwsx5efwqggm&dl=1" },
        { id: 1, gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/a9ha2ffk7s6rghbrc4obb/0P8A2926-copy.webp?rlkey=w5y5d5z2y2w96ewo3gg8nnnvh&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/6rm2ulhiwmdbvrsu7slxq/0P8A2954-copy.webp?rlkey=c0mrmhra9mx9c88tzgxsh06ey&dl=1" }], title: "المدينة", img: "https://www.dropbox.com/scl/fi/a9ha2ffk7s6rghbrc4obb/0P8A2926-copy.webp?rlkey=w5y5d5z2y2w96ewo3gg8nnnvh&dl=1" },
        { id: 1, gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/ddp4w63e6330733hznw2t/DSC_9501-copy.webp?rlkey=juhn06doo3068bhjiw1hsl34n&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/othmo211tw37wnqq8nlye/DSC_8890-copy.webp?rlkey=qj804uuvassj6se76tncd67it&dl=0" }], title: "حائل", img: "https://www.dropbox.com/scl/fi/ddp4w63e6330733hznw2t/DSC_9501-copy.webp?rlkey=juhn06doo3068bhjiw1hsl34n&dl=1" },
        { id: 1, gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/dppnmnzh68optxzz26vfl/IMG_5013-copy.webp?rlkey=b1qvelh15ieg7xq8o1pnpd2vc&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/4pnu8gnyz3rmz9cxet367/IMG_5085-copy.webp?rlkey=kvh97kmlk7ptu5qmbwwiwpiba&dl=1" }], title: "عسير", img: "https://www.dropbox.com/scl/fi/dppnmnzh68optxzz26vfl/IMG_5013-copy.webp?rlkey=b1qvelh15ieg7xq8o1pnpd2vc&dl=1" },
      ]
    },
    {
      key: 'التوثيق البصري',
      data: [
        { id: 1, title: "امرؤ القيس", gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/66c6nudglipq0q82y1aoh/1-1-copy.webp?rlkey=nvl10f04dqtfq15fxv7v0h633&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/f3n8y1c8yg4c5pf0xhu04/2-copy.webp?rlkey=nd81b430fjkxmcypbqtayqy1w&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/taf4cie2wh31yxkws82at/3-copy.webp?rlkey=z91qul4av4pczkouhyqw20mlv&dl=1" }], img: "https://www.dropbox.com/scl/fi/66c6nudglipq0q82y1aoh/1-1-copy.webp?rlkey=nvl10f04dqtfq15fxv7v0h633&dl=1" },
        { id: 1, title: "حاتم الطائي", gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/d9b0wcm79ibkgk06c5tdi/2-copy.webp?rlkey=wauwy1le46hck1a0v2ksb5pzh&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/ly2dkfc6ki2ckmbetah62/10-copy.webp?rlkey=sdffemqq48t1thir82svun4po&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/7wjhbw9pg6yipak38zypc/13-copy.webp?rlkey=h6nkmdf0h3nqykm0eyjlv2c1e&dl=1" }], img: "https://www.dropbox.com/scl/fi/d9b0wcm79ibkgk06c5tdi/2-copy.webp?rlkey=wauwy1le46hck1a0v2ksb5pzh&dl=1" },


        { id: 1, title: "طرفة بن العبد", gallery: [{ id: 1, img: "https://www.dropbox.com/scl/fi/843kuqrd0zirawz0acmsn/2-1-copy.webp?rlkey=3p3lwulekewb1ber97s70bxfg&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/jlrp7qlpp0h6prtm29os8/5-1-copy.webp?rlkey=e7p6e9hg3rol7m4b9xly2no87&dl=1" }, { id: 1, img: "https://www.dropbox.com/scl/fi/82m0eo85jql7wejpg75fu/8-copy.webp?rlkey=l33bp3imca59hh980wwqbde1l&dl=1" }], img: "https://www.dropbox.com/scl/fi/843kuqrd0zirawz0acmsn/2-1-copy.webp?rlkey=3p3lwulekewb1ber97s70bxfg&dl=1" },
      ]
    },

    {
      key: 'من أبيات الشعراء',
      data: [
        {
          id: 1, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 1, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 1, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 1, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 1, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 1, title: "الشاعر امرؤ القيس", img: place1.src
        },
      ]
    },
  ];


  const animation = useAnimation();

  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0
        }
      })
    }

    if (!inView) {
      animation.start({ x: '-100vw' })
    }

  }, [inView]);

  const rightPlantsRef = useRef(null);
  const leftPlantsRef = useRef(null);




  return (
    <>

      <Container maxWidth={false} >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <header id={styles.header}>
            <div className={styles.sec_title}>
              <div className={styles.img_container}>
                <Image width={100} height={100} src={star.src} alt="star" />
              </div>

              <Typography variant='h1'>
                خزانة الشعر
              </Typography>

              <div className={styles.img_container}>
                <Image width={100} height={100} src={star.src} alt="star" />
              </div>
            </div>

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
      <section id='footer' className={styles.footer} ref={ref}>
        <div className={styles.imgs_container}>

          <LeftPlants redPlants={redPlants} ref={leftPlantsRef} />

          <motion.div
            animate={animation} className={styles.deer} >
            <Image width={592} height={408} src={BrownDeer.src} alt="" />
          </motion.div>

          <RightPlants redPlants={redPlants} ref={rightPlantsRef} />
        </div>

      </section>
    </>

  )
}

export default PublicTreasury