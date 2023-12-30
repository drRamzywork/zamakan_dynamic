import React, { useEffect, useRef } from 'react';
import styles from '../../../pages/public-treasury/index.module.scss';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const eftPlants = React.forwardRef(({ redPlants }, forwardedRef) => {
  const animation = useAnimation();

  // Internal ref to use if no ref is forwarded
  const internalRef = useRef(null);
  const ref = forwardedRef || internalRef;

  // Use useInView hook
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2
  });

  useEffect(() => {
    // Merge refs
    inViewRef(ref.current);

    if (inView) {
      animation.start({
        y: "37vh",
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0
        }
      });
    } else {
      animation.start({ y: '100vh' });
    }
  }, [inView, animation, inViewRef, ref]);

  return (
    <div ref={ref} className={styles.leftPlants_container}>
      <motion.div animate={animation}>
        <div className={styles.leftPlants}>
          <Image width={592} height={408} src={"/assets/imgs/redPlants.png"} alt="" />
        </div>
      </motion.div>
    </div>
  );
});

export default eftPlants;
