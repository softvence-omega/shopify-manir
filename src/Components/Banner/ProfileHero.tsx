"use client";
import CountUp from "react-countup";
import ReusableButton from "../Reuseable/ReuseableButton";

const ProfileHero = () => {
  return (
    <section className="w-full max-w-xl mx-auto mt-10 px-4 md:px-0">
      <h1 className="md:text-[64px] text-3xl font-bold text-[#42c822] leading-none mb-1 tracking-tight">
        Manir Uzzaman
      </h1>

      <h2
        className="text-lg md:text-2xl  mb-6 
      "
      >
        Certified Full Stack and CMS expert
      </h2>

      <div className="flex flex-wrap items-center justify-between mb-8 border-b border-[#2A512B] pb-6 gap-10 md:gap-0">
        <div className="flex gap-2 items-center">
          <span className="text-[#42c822] font-bold text-3xl md:text-4xl leading-none ">
            <CountUp end={5} duration={6} suffix="+" />
          </span>
          <span className="text-xs md:text-sm  mt-1">
            Years
            <br />
            Experience
          </span>
        </div>
        <div className="border-r border-[#2A512B] h-8 mx-3 md:mx-5" />
        <div className="flex gap-2 items-center">
          <span className="text-[#42c822] font-bold text-3xl md:text-4xl leading-none ">
            <CountUp end={155} duration={3} suffix="+" />
          </span>
          <span className="text-xs md:text-sm  mt-1">
            Project
            <br />
            Completed
          </span>
        </div>
        <div className="border-r border-[#2A512B] h-8 mx-3 sm:mx-5" />
        <div className="flex gap-2 items-center">
          <span className="text-[#42c822] font-bold text-3xl md:text-4xl leading-none ">
            <CountUp end={10} duration={6} suffix="+" />
          </span>

          <span className="text-xs sm:text-sm  mt-1">
            Top
            <br />
            Class Skills
          </span>
        </div>
      </div>

      <div className="flex items-center mb-8">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                fill="#FFD900"
              />
            </svg>
          ))}
        </div>
        <span className="ml-3 text-white/60  text-sm md:text-base">
          - Click to see 383 Review
        </span>
      </div>

      <ReusableButton title="Fiverr Profile" showArrow={true} />
    </section>
  );
};

export default ProfileHero;
