import React from 'react';
import { Box, Container, Grid, Typography, } from '@mui/material';
import styles from './index.module.scss';

import imgs from '../../assets/constants/imgs'
import { useRouter } from 'next/router';
const Footer = () => {
  const { Ministry_of_Culture,
    logo_mobile_footer,
    Literature, } = imgs;
  const router = useRouter()

  return (
    <footer className={
      router.pathname === '/' || router.pathname === "/public-treasury" ?
        styles.Landingfooter : styles.footer
    } dir='ltr' >
      <Container maxWidth={false}>
        <Grid container justifyContent="center" alignItems="center">


        </Grid>
        <Box paddingBottom={'4px'} className={styles.footerBottom}>

          <Box className={styles.box_container}>
            <div className={styles.images_box}>
              <div className={styles.image_container}>
                <img src={Literature.src} alt="" />

              </div>
              <hr />
              <div className={styles.image_container}>
                <img src={Ministry_of_Culture.src} alt="" />
              </div>
            </div>



          </Box>


          <Box>

          </Box>
          <Box className={styles.logo_mobile_footer_container}>
            <div className={styles.logo_mobile_footer}>
              <img src={logo_mobile_footer.src} alt="" />
            </div>


          </Box>



        </Box>

        <Typography >
          جميع الحقوق محفوظة © 2023
        </Typography>

      </Container>
    </footer >
  );
};

export default Footer;