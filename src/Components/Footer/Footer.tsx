"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/favicon.svg";
import { Info } from "../Banner/Banner";
import ReuseableButton from "../Reuseable/ReuseableButton";
import Wrapper from "../Reuseable/Wrapper";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <Wrapper>
        <div className="relative z-10   mt-40 mb-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Interested to collaborate?
            </motion.h2>
            <motion.p
              className="text-3xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let`s connect.
            </motion.p>

            <motion.div
              className="mt-6 md:mt-16 grid place-items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="https://www.fiverr.com/shopify_manir">
                <ReuseableButton
                  title=" Visit Our Fiverr Profile to Collaborate"
                  showArrow
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="flex items-center justify-center "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-[160px] h-[48px] mt-20 md:mt-36">
                <Link
                  href="https://www.fiverr.com/shopify_manir"
                  className="block w-full h-full"
                >
                  <Image
                    src={logo}
                    alt="logo"
                    quality={100}
                    className="object-contain w-full h-full"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              borderRadius: "24px",
              background: " rgba(0, 0, 0, 0.30)",
              backdropFilter: "blur(6px)",
            }}
            className="flex flex-col md:flex-wrap md:flex-row justify-center items-center gap-4 md:gap-10 p-6 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {Info.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.p
                  className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer duration-200 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {item.title}
                </motion.p>
              </Link>
            ))}
          </motion.div>
        </div>
      </Wrapper>
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 z-0"
        style={{
          width: "100dvw",
          height: "100px",
          borderRadius: "1791px",
          background: "rgba(66, 200, 34, 0.32)",
          filter: "blur(50px)",
          maxWidth: 1600,
        }}
      />
    </footer>
  );
}
