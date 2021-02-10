import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  inactive: {
    rotate: 100,
  },
  active: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  inactive: {
    opacity: 0,
    pathLength: 0,
  },
  active: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};
const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          variants={svgVariants}
          initial="inactive"
          animate="active"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        animate={{ y: -10 }}
        initial={{ y: -250 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="title"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
