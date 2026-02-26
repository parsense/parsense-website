"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
