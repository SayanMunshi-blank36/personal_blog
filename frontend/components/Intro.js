import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaReddit } from "react-icons/fa";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="mx-auto w-11/12 lg:w-[58rem] flex flex-col lg:flex-row items-center justify-center"
    >
      <div className="lg:mr-7">
        <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6">
          Hi, I am Sayan
        </h2>
        <p className="text-base lg:text-xl mb-4">
          I am a Fullstack Web Developer who is passionate about learning new
          stuff through building projects. I am also fond travelling and
          watching anime and reading manga. I ocassionally like to play RPG
          games too.
        </p>
        <div className="flex items-start">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-3xl lg:text-5xl mr-2 text-primary cursor-pointer"
          >
            <FaTwitter className="hover:scale-105 transition-all hover:text-secondary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-3xl lg:text-5xl mr-2 text-primary cursor-pointer"
          >
            <FaInstagram className="hover:scale-105 transition-all hover:text-secondary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-3xl lg:text-5xl mr-2 text-primary cursor-pointer"
          >
            <FaReddit className="hover:scale-105 transition-all hover:text-secondary" />
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/profile_pic.jpg"
          width={800}
          height={800}
          alt="profile_pic"
          className="rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Intro;
