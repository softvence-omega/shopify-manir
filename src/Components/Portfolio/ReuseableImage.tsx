"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface PortfolioImageProps {
  src: StaticImageData;
  title?: string;
  className?: string;
}

function PortfolioImage({ src, title, className = "" }: PortfolioImageProps) {
  const [isHovered, setIsHovered] = useState(false); // For detecting hover
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (containerRef.current && imgRef.current) {
      const imgHeight = imgRef.current.clientHeight;
      const containerHeight = containerRef.current.clientHeight;
      const scrollDistance = imgHeight - containerHeight;
      // If image is taller than the container, scroll it on hover
      if (scrollDistance > 0) {
        imgRef.current.style.transition = "transform 0.5s ease";
        imgRef.current.style.transform = `translateY(-${scrollDistance}px)`;
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (imgRef.current) {
      imgRef.current.style.transition = "transform 0.5s ease";
      imgRef.current.style.transform = `translateY(0px)`;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative cursor-pointer group w-full h-full rounded-xl  shadow-lg ${className}`}
      style={{ background: "#101c13" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full ">
        <motion.div
          style={{ height: "100%", width: "100%", position: "relative" }}
        >
          <Image
            ref={imgRef}
            src={src}
            alt={title || "Portfolio"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-[3] ease-in-out hover:-translate-y-1/2 "
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071e11bb] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
        <div className="flex items-center justify-end">
          <Link href="https://www.fiverr.com/shopify_manir">
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#42c822] hover:bg-[#1cb616] cursor-pointer transition ">
              <ArrowUpRight className="text-white" size={22} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PortfolioImage;
