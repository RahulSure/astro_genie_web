import type { Variants, Transition } from 'framer-motion';

export const EASE: Transition['ease'] = [0.22, 1, 0.36, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

export const stagger = (delay = 0.06): Variants => ({
  visible: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.02,
    },
  },
});

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 6 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.2, ease: EASE },
  },
};
