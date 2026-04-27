import { motion, type HTMLMotionProps } from 'framer-motion';
import { fadeInUp } from './variants';

type Props = HTMLMotionProps<'div'> & {
  delay?: number;
};

/**
 * Fade-and-rise wrapper for list items and hero content.
 * Uses whileInView so long pages animate progressively as the user scrolls.
 */
export default function FadeIn({
  delay = 0,
  children,
  transition,
  ...rest
}: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ ...transition, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
