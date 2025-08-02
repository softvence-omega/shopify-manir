import React from "react";

interface DashedRotatedTextProps {
  title: string;
  className?: string;
}

const DashedRotatedTitle: React.FC<DashedRotatedTextProps> = ({
  title,
  className = "",
}) => {
  return (
    <div className="inline-block relative align-middle">
      <div
        className={`relative border-2 border-dashed border-[#42C822] px-3 py-2 my-2 text-[#42C822] font-extrabold text-3xl md:text-[32px] inline-block  mr-6 ${className}`}
        style={{
          transform: "rotate(-1deg)",
          display: "inline-block",
        }}
      >
        {title}

        <span className="absolute left-[-6px] top-[-6px] w-3 h-3  z-10 bg-[#42C822]"></span>

        <span className="absolute left-1/2 top-[-8px] -translate-x-1/2 w-3 h-3  z-10  bg-[#42C822]"></span>

        <span className="absolute right-[-6px] top-[-6px] w-3 h-3  z-10 bg-[#42C822]"></span>

        <span className="absolute right-[-6px] bottom-[-6px] w-3 h-3  z-10 bg-[#42C822]"></span>

        <span className="absolute left-1/2 bottom-[-8px] -translate-x-1/2 w-3 h-3  z-10 bg-[#42C822] "></span>

        <span className="absolute left-[-6px] bottom-[-6px] w-3 h-3  z-10 bg-[#42C822]"></span>
      </div>
    </div>
  );
};

export default DashedRotatedTitle;
