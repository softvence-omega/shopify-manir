"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GrLinkedin } from "react-icons/gr";
import logo from "../../../public/favicon.svg";

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
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // 1024px breakpoint for mobile
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

  const morphingNavbar = (
    <motion.header
      className={classNames(
        "fixed top-0 left-0 right-0 backdrop-blur z-50 transition-all overflow-hidden"
      )}
      style={{
        boxShadow: isSticky ? "0 8px 32px 0 rgba(0,0,0,0.18)" : undefined,
        minHeight: 80,
        background: "rgba(0, 15, 6, 0.32)",
        opacity: 1,
      }}
    >
      <div
        className={classNames(
          "flex items-center justify-between w-full",
          "px-4 md:px-6 py-4",
          "lg:max-w-[1400px] lg:mx-auto lg:px-10"
        )}
        style={{ minHeight: 80 }}
      >
        <Link
          target="_blank"
          href="https://www.fiverr.com/shopify_manir"
          className="flex items-center gap-2"
        >
          <div className="w-[160px] h-[40px]">
            <Image src={logo} alt="logo" quality={100} />
          </div>
        </Link>

        {!isMobile && (
          <div className="flex-1 flex justify-center items space-x-8">
            {links.map((link) => (
              <Link key={link.id} href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  className="text-xl text-white hover:text-primary"
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/maniruzzaman-718a87279"
              className="lg:flex hidden  items-center gap-4  rounded-full  "
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="w-9 h-9"
              >
                <GrLinkedin className="w-full text-primary  bg-white rounded-lg h-full" />
              </motion.div>
            </Link>
            <div className="flex justify-end bg-primary w-fit rounded-full  items-center">
              {isMobile && (
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
            </div>

            <div className="hidden lg:block">
              <Link target="_blank" href="https://www.fiverr.com/shopify_manir">
                <button
                  className={`flex items-center border border-[#42c822] w-full md:w-fit cursor-pointer rounded-2xl px-6 py-2 text-[#42c822] font-medium text-lg justify-center text-center gap-4  hover:bg-gradient-to-r from-[#42c822] to-[#2A512B] hover:text-white`}
                >
                  GET A QUOTE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[rgba(10,30,14,0.60)] backdrop-blur-[6px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center bg-gradient-to-br from-[#102616ee] to-[#193c24ee] rounded-3xl border-2 border-[#42c822] shadow-2xl max-w-sm w-[90vw] px-8 py-10 relative"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                aria-label="Close Menu"
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 right-5 text-white/70 hover:text-[#42c822] cursor-pointer transition"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>

              <div className="w-[160px] h-[48px] mb-12">
                <Link
                  target="_blank"
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

              <nav className="flex flex-col w-full gap-2">
                {links.map((link) => (
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    key={link.id}
                    href={link.href}
                    passHref
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, color: "#42c822" }}
                      whileTap={{ scale: 0.96 }}
                      className="block py-2 px-4 rounded-lg text-lg font-medium text-white/90 text-center tracking-wide transition-colors duration-200 hover:bg-[linear-gradient(90deg,#42c82222,#193c24_70%)] uppercase"
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                ))}
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/maniruzzaman-718a87279"}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, color: "#42c822" }}
                    whileTap={{ scale: 0.96 }}
                    className="block py-2 px-4 rounded-lg text-lg font-medium text-white/90 text-center tracking-wide transition-colors duration-200 hover:bg-[linear-gradient(90deg,#42c82222,#193c24_70%)] uppercase"
                  >
                    Linkedin
                  </motion.div>
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        ref={navRef}
        className="fixed top-0 inset-x-0 z-50 overflow-hidden"
        animate={{
          borderRadius: isSticky && isMobile ? 9999 : isSticky ? 9999 : 0,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{
          borderColor: "rgba(255,255,255,0.1)",
          color: "#fff",
          margin: isSticky ? "0 auto" : "0",
          paddingTop: isSticky ? 10 : 16,
          paddingBottom: isSticky ? 10 : 16,
          // background: isSticky ? "" : "rgba(0, 15, 6, 0.32)",
          // backdropFilter: isSticky ? "" : "blur(8px)",
        }}
      >
        <nav
          className={classNames(
            "flex items-center w-full max-w-[1400px]  mx-auto px-4 md:px-6 ",
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
            {morphingNavbar}
          </div>

          {/* Mobile menu toggle for md or below */}
          {/* {isMobile && !isSticky && (
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
          )} */}

          {/* Desktop links */}
        </nav>
      </motion.header>
    </>
  );
};

export default MorphingNavigation;
