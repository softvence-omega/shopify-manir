"use client";
import { motion, useAnimation } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface PortfolioImageProps {
  src: StaticImageData;
  title?: string;
  className?: string;
  scrollRatio?: number;
  href: string;
}

function PortfolioImage({
  src,
  title,
  href,
  className = "",
  scrollRatio = 2,
}: PortfolioImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  const handleImageLoad = () => {
    if (imageRef.current) {
      const height = imageRef.current.clientHeight;
      setImageHeight(height);
      setScrollDistance(height * (scrollRatio - 1)); // Calculate scroll distance based on the image height
    }
  };

  useEffect(() => {
    if (!imageRef.current || imageHeight === 0) return;

    const cappedScrollDistance = Math.min(scrollDistance, imageHeight);

    // Handle hover effect scroll
    if (isHovered) {
      controls.start({
        y: -cappedScrollDistance,
        transition: { duration: 8, ease: "linear" }, // Adjust duration for smoother scroll
      });
    } else {
      controls.start({
        y: 0, // Reset scroll to original position
        transition: { duration: 2, ease: "easeOut" }, // Shorter duration to reset the position
      });
    }
  }, [isHovered, scrollRatio, controls, scrollDistance, imageHeight]);

  return (
    <Link target="_blank" href={href}>
      <div
        ref={containerRef}
        className={`relative cursor-pointer group w-full h-full flex flex-col justify-between rounded-xl overflow-hidden shadow-lg ${className}`}
        style={{ background: "#101c13", position: "relative" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image container */}
        <div className="w-full h-full overflow-hidden relative">
          <motion.div
            animate={controls}
            style={{
              width: "100%",
              height: "auto",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              ref={imageRef}
              src={src}
              alt={title || "Portfolio"}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top"
              onLoad={handleImageLoad}
            />
          </motion.div>
        </div>

        {/* Overlay effect */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071e11bb] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center justify-end">
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#42c822] hover:bg-[#1cb616] cursor-pointer transition">
              <ArrowUpRight className="text-white" size={22} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PortfolioImage;
