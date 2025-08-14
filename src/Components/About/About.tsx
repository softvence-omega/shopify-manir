"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import img from "../../../public/images/aboutUs.jpg";
import bg from "../../../public/images/bg.png";
import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";

// const FiverrSVG = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="106"
//     height="32"
//     viewBox="0 0 106 32"
//     fill="none"
//   >
//     <g clipPath="url(#clip0_156_509)">
//       <path
//         d="M96.8226 15.3386H93.0863C90.6811 15.3386 89.3925 17.1484 89.3925 20.1642V31.0665H82.3063V15.3375H79.2992C76.894 15.3375 75.6064 17.1473 75.6064 20.1631V31.0654H68.5191V9.52115H75.6064V12.7962C76.7666 10.2538 78.3556 9.52115 80.7184 9.52115H89.3936V12.7962C90.5538 10.2538 92.1427 9.52115 94.5055 9.52115H96.8237L96.8226 15.3386ZM66.9726 21.974H52.1983C52.5847 24.3874 54.0877 25.7663 56.6214 25.7663C58.5107 25.7663 59.8429 24.9899 60.2728 23.6121L66.5427 25.3781C64.9973 29.1266 61.1739 31.4109 56.6214 31.4109C48.9333 31.4109 45.4114 25.4207 45.4114 20.2944C45.4114 15.2533 48.5034 9.22044 56.1915 9.22044C64.3519 9.22044 67.0575 15.3386 67.0575 19.8635C67.0629 20.568 67.0345 21.2723 66.9726 21.974ZM60.1008 17.7946C59.9288 15.9411 58.5967 14.2189 56.1926 14.2189C53.9582 14.2189 52.6282 15.2085 52.1983 17.7946H60.1008ZM33.0435 31.0654H39.2699L47.0439 9.52334H39.9153L36.1355 22.0604L32.2697 9.52225H25.1824L33.0435 31.0654ZM4.00973 31.0654H11.0535V15.3386H17.7555V31.0665H24.7557V9.52225H11.0535V8.18707C11.0535 6.72178 12.0842 5.81745 13.7167 5.81745H17.7544V0H12.5576C7.44563 0 4.00973 3.14601 4.00973 7.75514V9.52225H0.0155029V15.3397H4.00973V31.0654Z"
//         fill="white"
//       />
//       <path
//         d="M101.204 31.7117C103.624 31.7117 105.585 29.7434 105.585 27.3158C105.585 24.8882 103.624 22.921 101.204 22.921C98.7847 22.921 96.8224 24.8893 96.8224 27.3169C96.8224 29.7445 98.7847 31.7117 101.204 31.7117Z"
//         fill="#1DBF73"
//       />
//     </g>
//     <defs>
//       <clipPath id="clip0_156_509">
//         <rect width="105.6" height="32" fill="white" />
//       </clipPath>
//     </defs>
//   </svg>
// );

export default function AboutUsSection() {
  const ref = useRef(null);

  const controls = useAnimation();

  const isInView = useInView(ref, { margin: "-100px 0px", once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <section
      id="about"
      className="w-full my-32 md:my-40 flex justify-center items-center "
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: "easeOut" },
          },
          hidden: { opacity: 0, y: 70 },
        }}
        className="max-w-[1400px] w-full mx-auto "
      >
        <div
          style={{
            backgroundImage: `url(${bg})`,
            background: "linear-gradient(0deg, #062608 0%, #052508 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
          className="relative  rounded-[48px] border border-[#1a4e27] px-4 py-10 md:p-16 flex flex-col xl:flex-row items-center gap-12 md:gap-10 shadow-xl overflow-hidden"
        >
          <motion.div
            className="flex-1  max-w-[480px]"
            initial={{ opacity: 0, x: -80 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.8 },
              },
              hidden: { opacity: 0, x: -80 },
            }}
          >
            <div className="grid md:block place-items-center">
              <DashedRotatedTitle title="About Us" />
            </div>

            <h2 className="text-[2rem] md:text-[2.7rem] font-bold leading-tight text-primary mt-8 mb-4 text-center md:text-start">
              Innovating the Future <br className="hidden md:block" />
              with Manir
            </h2>

            <p className="text-white  mb-4 leading-relaxed text-base md:text-lg text-center md:text-start">
              We specialize in creating innovative digital solutions that
              transform businesses. Our team of experts seamlessly blends
              creativity with technical excellence to deliver outstanding
              results that exceed expectations.
              <br />
              <br />
              We offer a comprehensive range of services, including website
              development, WordPress expertise, Wix website, and Shopify store
              design.
              <Link href="#" className="text-[#42C822] underline ml-2">
                Learn More
              </Link>
            </p>
          </motion.div>

          <div className="relative flex-1 w-full flex justify-center">
            <div className="relative w-full h-[300px] md:h-[550px]   xl:bg-[rgba(0,15,6,0.5)] rounded-[32px]  overflow-hidden xl:shadow-xl flex items-center justify-center">
              <div
                className="md:absolute hidden md:block inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(7,34,8,0.5) 0%, rgba(7,34,8,0.5) 100%)",
                }}
              />
              {/* <div className="absolute top-10 left-10 z-10">
                <FiverrSVG />
              </div> */}

              <Image
                src={img}
                alt="manir-about"
                fill
                className="xl:object-cover object-contain  rounded-[32px] h-full w-full"
                quality={100}
              />

              {/* <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#42C822] p-3  cursor-pointer rounded-full shadow-lg hover:scale-105 transition-transform"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(66,200,34,0.12)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <path
                    d="M16.917 9.98926C17.6947 10.4383 17.6947 11.5617 16.917 12.0107L2.91699 20.0937C2.13924 20.5428 1.16707 19.981 1.16699 19.083L1.16699 2.91699C1.16707 2.01895 2.13924 1.45722 2.91699 1.90625L16.917 9.98926Z"
                    stroke="white"
                    strokeWidth="2.33333"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
