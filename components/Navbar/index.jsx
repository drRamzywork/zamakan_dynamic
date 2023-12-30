import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss'
import { useScrollTrigger, Slide, AppBar, Toolbar, Container, } from '@mui/material';
import { Search, } from '../../assets/svgsComponents';

import { motion } from 'framer-motion';
import CssBaseline from '@mui/material/CssBaseline';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaCalendarAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Image from 'next/image';


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
  const router = useRouter()

  const [window, setWindow] = useState(undefined);

  useEffect(() => {
    setWindow(window);
  }, []);

  const [navMenu, setNavMenu] = useState(false);





  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
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

  const middleLineVariants = {
    burger: {
      opacity: 1,
    },
    cross: {
      opacity: 0,
    },
  };

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

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navMenuRef]);


  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>

        <AppBar className={styles.navbarHeader} style={{
          background: `#062a30`,
        }} elevation={0} >

          <Container maxWidth={false} dir='rtl' className={styles.navbar}>
            <div className={styles.sec_container}
              ref={navMenuRef}>
              {navMenu &&
                <>

                  <motion.div
                    initial="closed"
                    animate={navMenu ? "open" : "closed"}
                    variants={variants}
                    transition={{ duration: 0.5, type: "tween" }}
                    className={styles.nav_menu_container}
                  >
                    <div className={styles.links} onClick={() => setNavMenu(false)}>
                      <Link href='/literary-eras' className={`${styles.link} ${router.pathname.includes('/literary-eras') && styles.active}`}>
                        <p >
                          زمان الشعر
                        </p>

                        <div className={styles.icon_container}>
                          <FaCalendarAlt />
                        </div>
                      </Link>


                      <Link href='/places' className={`${styles.link} ${router.pathname.includes('/places') && styles.active}`}>
                        <p >
                          مكان الشعر
                        </p>

                        <div className={styles.icon_container}>
                          <MdLocationPin />
                        </div>
                      </Link>

                      <Link href='/public-treasury' className={`${styles.link} ${router.pathname.includes('/public-treasury') && styles.active}`}>
                        <p >
                          خزانة الشعر
                        </p>

                        <div className={styles.icon_container}>
                          <img src={"/assets/imgs/PoetsTreasury.png"} alt="" />
                        </div>
                      </Link>



                      <Link href='/poets-search' className={`${styles.link} ${router.pathname.includes('/poets-search') && styles.active}`}>
                        <p >
                          الشعراء
                        </p>

                        <div className={styles.icon_container}>
                          <img src={"/assets/imgs/potriesIcon.png"} alt="" />
                        </div>

                      </Link>
                    </div>
                  </motion.div>
                </>
              }


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



              <Link className={styles.logo} href={'/'}>
                <Image width={250} priority height={85} src={"/assets/imgs/logo.png"} alt="" />
              </Link>


              <div className={styles.discover}>
                <Link href='/search' className={styles.search_icon}>
                  <Search />
                </Link>
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