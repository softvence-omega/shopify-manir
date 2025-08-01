import Image from "next/image";
import React from "react";
import img from "../../../public/images/manir.png";

const ProfileCard: React.FC = () => {
  return (
    <div
      style={{
        background:
          " linear-gradient(180deg, rgba(0, 15, 6, 0.00) 0%, rgba(66, 200, 34, 0.25) 100%)",
      }}
      className="relative  w-full md:w-[425px] mt-6 md:mt-12 justify-center items-center rounded-[40px] h-fit border-[2px] -z-10 border-[#42C822]  "
    >
      <div className="absolute  top-10 left-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="32"
          viewBox="0 0 106 32"
          fill="none"
        >
          <g clipPath="url(#clip0_156_367)">
            <path
              d="M96.8226 15.3386H93.0863C90.6811 15.3386 89.3925 17.1484 89.3925 20.1642V31.0665H82.3063V15.3375H79.2992C76.894 15.3375 75.6064 17.1473 75.6064 20.1631V31.0654H68.5191V9.52115H75.6064V12.7962C76.7666 10.2538 78.3556 9.52115 80.7184 9.52115H89.3936V12.7962C90.5538 10.2538 92.1427 9.52115 94.5055 9.52115H96.8237L96.8226 15.3386ZM66.9726 21.974H52.1983C52.5847 24.3874 54.0877 25.7663 56.6214 25.7663C58.5107 25.7663 59.8429 24.9899 60.2728 23.6121L66.5427 25.3781C64.9973 29.1266 61.1739 31.4109 56.6214 31.4109C48.9333 31.4109 45.4114 25.4207 45.4114 20.2944C45.4114 15.2533 48.5034 9.22044 56.1915 9.22044C64.3519 9.22044 67.0575 15.3386 67.0575 19.8635C67.0629 20.568 67.0345 21.2723 66.9726 21.974ZM60.1008 17.7946C59.9288 15.9411 58.5967 14.2189 56.1926 14.2189C53.9582 14.2189 52.6282 15.2085 52.1983 17.7946H60.1008ZM33.0435 31.0654H39.2699L47.0439 9.52334H39.9153L36.1355 22.0604L32.2697 9.52225H25.1824L33.0435 31.0654ZM4.00973 31.0654H11.0535V15.3386H17.7555V31.0665H24.7557V9.52225H11.0535V8.18707C11.0535 6.72178 12.0842 5.81745 13.7167 5.81745H17.7544V0H12.5576C7.44563 0 4.00973 3.14601 4.00973 7.75514V9.52225H0.0155029V15.3397H4.00973V31.0654Z"
              fill="white"
            />
            <path
              d="M101.204 31.7117C103.624 31.7117 105.585 29.7434 105.585 27.3158C105.585 24.8882 103.624 22.921 101.204 22.921C98.7847 22.921 96.8224 24.8893 96.8224 27.3169C96.8224 29.7445 98.7847 31.7117 101.204 31.7117Z"
              fill="  #36633F"
              stop-color="#083611"
              stop-opacity="1"
            />
          </g>
          <defs>
            <clipPath id="clip0_156_367">
              <rect width="105.6" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="absolute -top-10 z-10 -right-5 md:-right-10 w-[93px] h-[92px]">
        <div className="absolute inset-0 bg-[#42c822]  opacity-1  rounded-full z-0 pointer-events-none" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 93 92"
          className="w-full h-full z-10 relative"
        >
          <defs>
            <linearGradient
              id="badge-gradient"
              x1="0"
              y1="0"
              x2="93"
              y2="92"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop offset="0%" stopColor="#3C6343" stopOpacity="1" />
              <stop offset="100%" stopColor="#208A49" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M42.6854 2.75195C44.701 0.0773775 48.7166 0.0773762 50.7322 2.75195L54.3348 7.53125C55.9651 9.6946 58.821 10.5332 61.3621 9.59473L66.9764 7.52148C70.0198 6.39774 73.2846 8.40003 73.7127 11.5625L74.1922 17.8408C74.3943 20.542 76.3431 22.7907 78.9881 23.375L84.8318 24.666C88.1021 25.3884 89.7702 29.0418 88.1746 31.9863L85.3231 37.248C84.0325 39.6297 84.4567 42.5764 86.366 44.498L90.5838 48.7432C92.9443 51.1189 92.3735 55.0945 89.4393 56.709L84.1951 59.5938C81.8219 60.8997 80.5858 63.6071 81.1531 66.2559L82.4061 72.1084C83.1073 75.3831 80.4778 78.4176 77.1365 78.1895L71.1658 77.7822C68.4633 77.5977 65.9586 79.2063 65.0037 81.7412L62.8943 87.3428C61.7137 90.4766 57.861 91.6077 55.1736 89.6094L50.3709 86.0381C48.1971 84.4217 45.2205 84.4217 43.0467 86.0381L38.244 89.6094C35.5566 91.6077 31.7039 90.4766 30.5233 87.3428L28.4139 81.7412C27.459 79.2063 24.9543 77.5977 22.2518 77.7822L16.2811 78.1895C12.9398 78.4176 10.3103 75.3831 11.0115 72.1084L12.2645 66.2559C12.8318 63.6071 11.5957 60.8997 9.22247 59.5938L3.97833 56.709C1.04413 55.0945 0.473277 51.1189 2.8338 48.7432L7.05157 44.498C8.96089 42.5764 9.38513 39.6297 8.09454 37.248L5.24298 31.9863C3.64739 29.0418 5.31551 25.3884 8.58575 24.666L14.4295 23.375C17.0745 22.7907 19.0233 20.542 19.2254 17.8408L19.6717 11.8721C19.9213 8.53242 23.2996 6.36148 26.4412 7.52148L32.0555 9.59473C34.5966 10.5332 37.4525 9.6946 39.0828 7.53125L42.6854 2.75195Z"
            stroke="rgba(58,64,61,0)"
            fill=" #3C6343"
            stop-color="#208A49"
            strokeWidth="1.099"
          />
        </svg>

        <div className="absolute top-[28px] left-[22px] z-20">
          <svg
            width="56"
            height="45"
            viewBox="0 0 56 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4 3.78C43.91 2.42 46.25 2.46 47.7 3.92C49.16 5.37 49.2 7.71 47.84 9.22L25.12 31.94C23.43 33.63 20.69 33.63 19 31.94L8.3 21.24C6.8 19.59 6.84 17.26 8.3 15.8C9.75 14.35 12.09 14.3 13.6 15.66L22.06 24.12L42.26 3.92L42.4 3.78Z"
              fill="white"
              fillOpacity="1"
            />
          </svg>
        </div>
      </div>

      <div className="w-full  z-10 md:w-[385px] mt-16 mx-auto h-[383px] ">
        <Image
          src={img}
          alt="User"
          quality={100}
          width={2500}
          height={2000}
          className="object-cover drop-shadow-2xl  w-full h-full"
        />
      </div>

      <div className="absolute left-0 bottom-0 w-full h-28 pointer-events-none">
        <span className="absolute left-4 bottom-6 rotate-[-22deg] bg-[#1DBF73] text-white text-xs  px-3 py-1 rounded-lg shadow-lg  md:text-base z-10">
          Top Rated Seller
        </span>
        <span className="absolute left-32 bottom-2  bg-[#9747FF] text-white text-xs  px-3 py-1 rounded-lg shadow-lg  md:text-base z-10">
          Vetted Pro
        </span>
        <span className="absolute left-40 md:left-56 top-10 md:top-auto md:bottom-5 rotate-[25deg] bg-[#479DFF] text-white text-xs  px-3 py-1 rounded-lg shadow-lg  md:text-base z-10">
          Professional
        </span>
        <span className="absolute right-2 md:left-74 md:bottom-7 rotate-[-10deg] md:rotate-[30deg] bg-orange-500 text-white text-xs  px-3 py-1 rounded-lg shadow-lg  md:text-base z-10">
          Experienced
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
