"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../../../public/favicon.svg";
import ReuseableButton from "../Reuseable/ReuseableButton";
export interface MorphingNavigationLink {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const MorphingNavigation: React.FC<{
  links: MorphingNavigationLink[];
}> = ({ links }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
      if (window.scrollY >= 100) setIsMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[rgba(0,15,6,0.32)]backdrop-blur z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-[rgba(0,15,6,0.9)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="  w-[160px] h-[40px] mb-12 ">
                <Link href="/" className=" ">
                  <Image src={logo} alt="logo" quality={100} />
                </Link>
              </div>

              {links.map((link) => (
                <Link key={link.id} href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="text-xl hover:text-primary"
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        ref={navRef}
        className="fixed top-0 py-6 inset-x-0 z-50 bg-[rgba(0,15,6,0.32)]"
        animate={{
          height: isSticky ? 70 : 100,
          width: isSticky ? 70 : "100%",
          borderRadius: isSticky && isMobile ? 9999 : isSticky ? 9999 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          borderColor: "rgba(255,255,255,0.1)",
          color: "#fff",
          margin: isSticky ? "0 auto" : undefined,
        }}
      >
        <nav
          className={classNames(
            "flex items-center w-full max-w-[1400px] mx-auto px-4 md:px-6 ",
            {
              "justify-between": isMobile,
              "justify-center": !isMobile && !isSticky,
            }
          )}
        >
          <div
            className={classNames("flex items-center cursor-pointer", {
              "mx-auto": isSticky,
            })}
          >
            <div className=" flex  items-center justify-center cursor-pointer ">
              {isSticky ? (
                <button
                  onClick={toggleMenu}
                  className="flex flex-col items-center justify-center  cursor-pointer bg-[rgba(0,15,6,0.9)]"
                >
                  <span className="w-5 h-0.5 bg-white mb-1" />
                  <span className="w-5 h-0.5 bg-white mb-1" />
                  <span className="w-5 h-0.5 bg-white" />
                </button>
              ) : (
                <div className="w-[160px] h-[40px]">
                  <Link href="/">
                    <Image src={logo} alt="logo" quality={100} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {isMobile && !isSticky && (
            <button
              onClick={toggleMenu}
              className="block lg:hidden bg-[rgba(0,15,6,0.9)] cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="w-5 h-0.5 bg-white mb-1" />
                <span className="w-5 h-0.5 bg-white mb-1" />
                <span className="w-5 h-0.5 bg-white" />
              </div>
            </button>
          )}

          {!isMobile && !isSticky && (
            <div className="flex-1 flex justify-center space-x-8">
              {links.map((link) => (
                <Link key={link.id} href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="text-xl hover:text-primary"
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          {!isMobile && !isSticky && (
            <ReuseableButton title=" GET A QUOTE"></ReuseableButton>
          )}
        </nav>
      </motion.header>
    </>
  );
};

export default MorphingNavigation;
