import Image from "next/image";

const FiverrSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="106"
    height="32"
    viewBox="0 0 106 32"
    fill="none"
  >
    <g clipPath="url(#clip0_156_509)">
      <path
        d="M96.8226 15.3386H93.0863C90.6811 15.3386 89.3925 17.1484 89.3925 20.1642V31.0665H82.3063V15.3375H79.2992C76.894 15.3375 75.6064 17.1473 75.6064 20.1631V31.0654H68.5191V9.52115H75.6064V12.7962C76.7666 10.2538 78.3556 9.52115 80.7184 9.52115H89.3936V12.7962C90.5538 10.2538 92.1427 9.52115 94.5055 9.52115H96.8237L96.8226 15.3386ZM66.9726 21.974H52.1983C52.5847 24.3874 54.0877 25.7663 56.6214 25.7663C58.5107 25.7663 59.8429 24.9899 60.2728 23.6121L66.5427 25.3781C64.9973 29.1266 61.1739 31.4109 56.6214 31.4109C48.9333 31.4109 45.4114 25.4207 45.4114 20.2944C45.4114 15.2533 48.5034 9.22044 56.1915 9.22044C64.3519 9.22044 67.0575 15.3386 67.0575 19.8635C67.0629 20.568 67.0345 21.2723 66.9726 21.974ZM60.1008 17.7946C59.9288 15.9411 58.5967 14.2189 56.1926 14.2189C53.9582 14.2189 52.6282 15.2085 52.1983 17.7946H60.1008ZM33.0435 31.0654H39.2699L47.0439 9.52334H39.9153L36.1355 22.0604L32.2697 9.52225H25.1824L33.0435 31.0654ZM4.00973 31.0654H11.0535V15.3386H17.7555V31.0665H24.7557V9.52225H11.0535V8.18707C11.0535 6.72178 12.0842 5.81745 13.7167 5.81745H17.7544V0H12.5576C7.44563 0 4.00973 3.14601 4.00973 7.75514V9.52225H0.0155029V15.3397H4.00973V31.0654Z"
        fill="white"
      />
      <path
        d="M101.204 31.7117C103.624 31.7117 105.585 29.7434 105.585 27.3158C105.585 24.8882 103.624 22.921 101.204 22.921C98.7847 22.921 96.8224 24.8893 96.8224 27.3169C96.8224 29.7445 98.7847 31.7117 101.204 31.7117Z"
        fill="#1DBF73"
      />
    </g>
    <defs>
      <clipPath id="clip0_156_509">
        <rect width="105.6" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function AboutUsSection() {
  return (
    <section
      className="w-full py-12 md:py-24 flex justify-center items-center min-h-screen"
      style={{
        background: "linear-gradient(180deg, #42c822 0%, #2A512B 100%)",
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-2 sm:px-4 md:px-8">
        <div className="relative bg-[rgba(0,15,6,0.2)] backdrop-blur-lg rounded-[48px] border border-[#1a4e27] px-4 py-10 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-0 shadow-xl overflow-hidden">
          {/* Left side */}
          <div className="flex-1">
            {/* Dashed "About Us" Label */}
            <div
              className="inline-block mb-4"
              style={{
                transform: "rotate(-1deg)",
              }}
            >
              <span className="border-2 border-dashed border-[#42C822] text-[#42C822] px-4 py-1 rounded-lg text-xl font-semibold select-none">
                About Us
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-[2rem] md:text-[2.7rem] font-bold leading-tight text-white mt-2 mb-4">
              Innovating the Future <br className="hidden md:block" />
              <span className="text-[#42C822]">with Manir</span>
            </h2>
            {/* Paragraph */}
            <p className="text-[#B9EEC9] max-w-[480px] mb-4 leading-relaxed text-base md:text-lg">
              We specialize in creating innovative digital solutions that
              transform businesses. Our team of experts seamlessly blends
              creativity with technical excellence to deliver outstanding
              results that exceed expectations.
              <br />
              <br />
              We offer a comprehensive range of services, including website
              development, WordPress expertise, Wix website, and Shopify store
              design.{" "}
              <a href="#" className="text-[#42C822] underline ml-2">
                Learn More
              </a>
            </p>
          </div>

          {/* Right side: Card with image, svg, play btn */}
          <div className="relative flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-[430px] min-w-[300px] h-[310px] bg-[rgba(0,15,6,0.5)] rounded-[32px] border border-[#42C822] overflow-hidden shadow-xl flex items-center justify-center">
              {/* Fiverr SVG */}
              <div className="absolute top-7 left-7 z-10">
                <FiverrSVG />
              </div>

              {/* User/Video Image */}
              <Image
                src="/images/profile-about-demo.jpg" // Your uploaded image path or placeholder
                alt="manir-about"
                fill
                className="object-cover rounded-[32px] brightness-90"
                style={{
                  filter: "blur(0px)", // Remove blur for the person image, use for bg as needed
                }}
              />
              {/* Play button (centered) */}
              <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#42C822] p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(66,200,34,0.12)",
                }}
              >
                {/* Play Icon */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#42C822" />
                  <polygon points="12,10 22,16 12,22" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
