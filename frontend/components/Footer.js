import React from "react";
import { FaTwitter, FaInstagram, FaReddit } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mx-auto w-[58rem] text-center mb-8">
      <h2 className="text-2xl mb-4 text-primary">
        Social ID: <span className="text-secondary font-bold">@blank36</span>
      </h2>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-4xl mr-2 text-primary cursor-pointer"
        >
          <FaTwitter className="hover:scale-105 transition-all hover:text-secondary" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-4xl mr-2 text-primary cursor-pointer"
        >
          <FaInstagram className="hover:scale-105 transition-all hover:text-secondary" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-4xl mr-2 text-primary cursor-pointer"
        >
          <FaReddit className="hover:scale-105 transition-all hover:text-secondary" />
        </motion.div>
      </div>
      <p className="text-primary text-center my-10 text-xl">
        Thanks for Visiting !
      </p>
    </div>
  );
};

export default Footer;
