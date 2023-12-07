import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import styles from './index.module.scss';
import {
  burgerIcon, Logo, Rectangle, Search, CloseIcon,
  Twitter,
  Instagram,
  LinkedIn,
  Youtube,
  Phone,
} from '../../assets/svgsComponents';
import imgs from '../../assets/constants/imgs'
import Link from 'next/link'
const Footer = () => {
  const { Vision2030, Ministry_of_Culture,
    Literature } = imgs;
  return (
    <footer className={styles.footer} dir='ltr'>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Logo />
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
              </Link> */}
            </div>


          </Grid>
        </Grid>
        <Box className={styles.footerBottom}>
          <Box >
            <div className={styles.img_container}>
              <img src={Vision2030.src} alt="" />
            </div>
          </Box>

          <Box className={styles.box_container}>
            <div className={styles.images_box}>
              <div className={styles.image_container}>
                <img src={Ministry_of_Culture.src} alt="" />

              </div>
              <div className={styles.image_container}>
                <img src={Literature.src} alt="" />

              </div>
            </div>

            <Typography >
              جميع الحقوق محفوظة © 2023
            </Typography>
          </Box>

        </Box>
      </Container>
    </footer >
  );
};

export default Footer;