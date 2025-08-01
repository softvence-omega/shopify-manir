"use client";
import { motion } from "framer-motion";
import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";
import ProfileCard from "./ProfileCard";
import ProfileHero from "./ProfileHero";

const Banner = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(66,200,34,0.24)_0%,rgba(66,200,34,0)_100%)] min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 md:pt-48 ">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-white text-center text-[2rem] leading-tight md:text-6xl md:leading-[70px] font-bold">
            Transform Your Ideas into a <br className="hidden md:block" />
            <DashedRotatedTitle
              className="md:text-[64px] text-3xl"
              title="Powerfull Brand"
            />
            with us.
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-center  md:gap-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <ProfileCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <ProfileHero />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
