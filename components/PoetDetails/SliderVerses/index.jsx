
import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

import styles from './index.module.scss'; // Make sure this path is correct
import { Typography } from '@mui/material';

const ITEMS_PER_PAGE = 10;
import { motion } from 'framer-motion'
export default function SliderVerses({ filtredPoets, onPoetsDataChange }) {

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(filtredPoets?.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const poetsToShow = filtredPoets?.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  useEffect(() => {
    // Call the callback function whenever poetsToShow changes
    onPoetsDataChange(poetsToShow);
  }, [poetsToShow, onPoetsDataChange]);




  return (
    <>


      <div className={styles.sliderContainer}>
        {poetsToShow.map((poet) => (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            className={styles.box}>
            <a href={`/poet/${poet.id}`}>
              <div className={styles.poet_info}>
                <div className={styles.img_container}>
                  <img src={poet.icon} alt={poet.name} />
                </div>

                <div className={styles.text_container}>
                  <div className={styles.name}>
                    <Typography>{poet.name}</Typography>
                  </div>
                  <div className={styles.tag}>
                    <Typography>
                      {poet.zamanName}
                    </Typography>

                  </div>
                </div>
              </div>
              <hr />

              <div className={styles.desc}>
                <Typography>
                  {poet.descShort}
                </Typography>
              </div>

            </a>

          </motion.div>
        ))}
      </div>

      {filtredPoets.length > 1
        &&
        <div className={styles.paginationBox}>
          <div className={styles.paginationContainer}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className={styles.arrow_btn}
            >
              <HiArrowRight />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={index === currentPage ? styles.active : ''}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className={styles.arrow_btn}
            >
              <HiArrowLeft />

            </button>
          </div>
        </div>
      }



    </>
  );
}