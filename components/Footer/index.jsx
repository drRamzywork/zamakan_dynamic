import React from 'react';
import { Box, Container, Grid, Typography, } from '@mui/material';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';


const Footer = () => {
  const router = useRouter()
  const { t } = useTranslation("common");

  return (
    <footer className={
      router.pathname === '/' || router.pathname.includes("/public-treasury") || router.pathname.includes("/year-of-arabic-poetry") ?
        styles.Landingfooter : styles.footer
    } dir='ltr' >
      <Container maxWidth={false}>
        <Grid container justifyContent="center" alignItems="center">


        </Grid>
        <Box paddingBottom={'4px'} className={styles.footerBottom}>

          <Box className={styles.box_container}>
            <div className={styles.images_box}>
              <div className={styles.image_container}>
                <Image priority width={220} height={70} src={"/assets/imgs/Literature.png"} alt="" />

              </div>
              <hr />
              <div className={styles.image_container}>
                <Image priority width={220} height={70} src={"/assets/imgs/Ministry_of_Culture.png"} alt="" />
              </div>
            </div>



          </Box>


          <Box>

          </Box>
          <Box className={styles.logo_mobile_footer_container}>
            <div className={styles.logo_mobile_footer}>
              <Image priority width={263} height={245} src={"/assets/imgs/logo_mobile_footer.png"} alt="" />
            </div>


          </Box>



        </Box>

        <Typography >
          {t("allrightsreserved")} © 2023
        </Typography>

      </Container>
    </footer >
  );
};

export default Footer;