import { useInView } from "react-intersection-observer";

export const useAnimateOnInView = (variant = "default") => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const defaultDuration = 1.4;

  console.log(variant, "inView");
  // console.log(ref, "inView");

  const variants = {
    default: {
      hidden: { y: -50, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: defaultDuration },
      },
    },
    slideUp: {
      hidden: { y: 150, opacity: 0 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: defaultDuration },
      },
    },
    star1: {
      hidden: { y: 50, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4 },
      },
    },
    star2: {
      hidden: { y: -80, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.7 },
      },
    },
    star3: {
      hidden: { y: -110, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.9 },
      },
    },

    slideRight: {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: defaultDuration },
      },
    },
  };

  return {
    ref,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    variants: variants[variant],
  };
};

export const useSectionInView = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return { ref, inView };
};
