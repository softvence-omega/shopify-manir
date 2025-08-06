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
}

function PortfolioImage({
  src,
  title,
  className = "",
  scrollRatio = 1.5,
}: PortfolioImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerHeight = containerRef.current.clientHeight;
    const scrollDistance = containerHeight * (scrollRatio - 1);

    if (isHovered) {
      controls.start({
        y: -scrollDistance,
        transition: { duration: 1, ease: "linear" },
      });
    } else {
      controls.start({
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [isHovered, scrollRatio, controls]);

  return (
    <div
      ref={containerRef}
      className={`relative cursor-pointer group w-full h-full rounded-xl overflow-hidden shadow-lg ${className}`}
      style={{ background: "#101c13" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full overflow-hidden">
        <motion.div
          animate={controls}
          style={{
            width: "100%",
            height: `${scrollRatio * 100}%`, 
            position: "relative",
          }}
        >
          <Image
            src={src}
            alt={title || "Portfolio"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071e11bb] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
        <div className="flex items-center justify-end">
          <Link href="https://www.fiverr.com/shopify_manir">
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#42c822] hover:bg-[#1cb616] cursor-pointer transition">
              <ArrowUpRight className="text-white" size={22} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioImage;
