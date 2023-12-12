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
      router.pathname === '/' ?
        styles.Landingfooter :
        styles.footer

    } dir='ltr'>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <Grid container justifyContent="center" alignItems="center">
          {/*
         
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Image width={77.39} height={48.08} src={Logo.src} alt="" />
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'center' }}>

          <div className={styles.socialLinks}>
              <div className={styles.links_container}>
                <Link href='https://www.twitter.com/' target='_blank'>
                  <IconButton aria-label="">
                    <Twitter />
                  </IconButton>
                </Link>
                <Link href='https://www.instagram.com/' target='_blank'>
                  <IconButton aria-label="instagram">
                    <Instagram />
                  </IconButton>
                </Link>
                <Link href='https://www.linkedin.com/' target='_blank'>
                  <IconButton aria-label="linkedin">
                    <LinkedIn />
                  </IconButton>
                </Link>

              </div>
              {/* <Link href='tel:009668001189999' className={styles.contact}>
                <Typography variant="body1">(009) 668001189999</Typography>
                <IconButton aria-label="phone">
                  <Phone />
                </IconButton>
              </Link> 
        </div>

          </Grid>
*/}

        </Grid>
        <Box className={styles.footerBottom}>

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