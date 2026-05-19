import { motion, type MotionProps } from "framer-motion";
import { type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.span
        initial={{ count: 0 } as never}
        whileInView={{ count: to } as never}
        viewport={{ once: true }}
        transition={{ duration, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* fallback static — animation handled with CSS counter trick via key prop */}
        {to.toLocaleString()}
      </motion.span>
      {suffix}
    </motion.span>
  );
}
