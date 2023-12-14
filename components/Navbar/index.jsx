import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss'
import { useScrollTrigger, Slide, AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
import { Search, } from '../../assets/svgsComponents';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { imgs } from '@/assets/constants';
import Image from 'next/image';
import CssBaseline from '@mui/material/CssBaseline';


// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}





const Navbar = (props) => {
  const [window, setWindow] = useState(undefined);

  useEffect(() => {
    setWindow(window);
  }, []);

  const [navMenu, setNavMenu] = useState(false);
  const { Logo } = imgs;




  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "100%" },
  };


  const lineVariants = {
    burger: {
      rotate: 0,
      translateY: 0,
      opacity: 1,
    },
    cross: {
      rotate: 45,
      translateY: [0, 6, 6],
      opacity: {
        0: 1,
        1: 0,
        2: 1,
      },
    },
  };

  // Animation for the middle line disappearing
  const middleLineVariants = {
    burger: {
      opacity: 1,
    },
    cross: {
      opacity: 0,
    },
  };

  // Animation for the bottom line in SVG
  const bottomLineVariants = {
    burger: {
      rotate: 0,
      translateY: 0,
    },
    cross: {
      rotate: -45,
      translateY: -6,
    },
  };
  const navMenuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setNavMenu(false);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navMenuRef]);

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{
          background: `#062a30`,
        }} elevation={0} >
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false} dir='rtl' className={styles.navbar}>
            <div className={styles.sec_container}
              ref={navMenuRef}

            >
              <div className={styles.burger_icon} onClick={() => setNavMenu(!navMenu)}>
                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top line */}
                  <motion.path
                    d="M1.39014 1H17.3901"
                    stroke="#11292F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={lineVariants}
                    animate={navMenu ? "cross" : "burger"}
                  />
                  {/* Middle line */}
                  <motion.path
                    d="M1.39014 7H17.3901"
                    stroke="#11292F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={middleLineVariants}
                    animate={navMenu ? "cross" : "burger"}
                  />
                  {/* Bottom line */}
                  <motion.path
                    d="M1.39014 13H17.3901"
                    stroke="#11292F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={bottomLineVariants}
                    animate={navMenu ? "cross" : "burger"}
                  />
                </svg>
              </div>
              {navMenu &&
                <motion.div
                  initial="closed"
                  animate={navMenu ? "open" : "closed"}
                  variants={variants}
                  transition={{ duration: 0.5, type: "tween" }}
                  className={styles.nav_menu_container}
                >
                  <div className={styles.links} onClick={() => setNavMenu(false)}>
                    <div className={styles.link}>
                      <a href='/literary-eras'>زمان الشعر</a>
                    </div>
                    <div className={styles.link}>
                      <a href='/places'>مكان الشعر</a>
                    </div>
                    <div className={styles.link}>
                      <a href='/poets'>الشعراء </a>
                    </div>
                  </div>
                  {/* <div className={styles.soical_links} onClick={() => setNavMenu(false)}>
                    <Link href='https://www.twitter.com'>
                      <Twitter />
                    </Link>

                    <Link href='https://www.instagram.com'>
                      <Instagram />
                    </Link>

                    <Link href='https://www.linkedIn.com'>
                      <LinkedIn />
                    </Link>

                    <Link href='https://www.youtube.com'>
                      <Youtube />
                    </Link>
                  </div> */}
                </motion.div>
              }

              {/* <button className={styles.search_icon_mobile}>
                <Search />
              </button> */}

              <a className={styles.logo} href={'/'}>
                <img src={Logo.src} alt="" />
              </a>


              <div className={styles.discover}>
                <div className={styles.search_icon}>
                  <Search />
                </div>

                {/* <Button className={styles.lang}>
                  EN
                </Button> */}

                {/* <Link href='/poets' className={styles.btn_container}>
                  <Button>استكشف الشعراء</Button>
                </Link>  */}
              </div>

            </div>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Navbar;