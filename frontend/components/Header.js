import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="mt-12">
      <motion.h1
        animate={{ fontSize: "40px" }}
        transition={{ type: "spring", stiffness: 150 }}
        className="mx-4 text-center font-kanit font-bold tracking-wide"
      >
        <span className="mr-1 text-primary">Sayan</span> Munshi
      </motion.h1>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ fontSize: "30px", lineHeight: "36px", opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center font-light"
      >
        <li className="mr-2 font-light">Developer</li> |
        <li className="ml-2 mr-2 font-light">Otaku</li> |
        <li className="ml-2 font-light">Traveller</li>
      </motion.ul>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center my-6"
      >
        <motion.li
          whileHover={{ scale: 1.2, color: "red" }}
          transition={{ type: "tween" }}
          className="mx-3 uppercase text-md font-medium cursor-pointer"
        >
          Tech Blogs
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, color: "red" }}
          className="mx-3 uppercase text-md font-medium cursor-pointer"
        >
          Otaku Blogs
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, color: "red" }}
          className="mx-3 uppercase text-md font-medium cursor-pointer"
        >
          Travel Blogs
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, color: "red" }}
          className="mx-3 uppercase text-md font-medium cursor-pointer"
        >
          Contact
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, color: "red" }}
          className="mx-3 uppercase text-md font-medium cursor-pointer"
        >
          Newsletter
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Header;
