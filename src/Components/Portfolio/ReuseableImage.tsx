"use client";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

interface PortfolioImageProps {
  src: StaticImageData;
  title?: string;
  className?: string;
}

export function PortfolioImage({
  src,
  title,
  className = "",
}: PortfolioImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div
      className={`relative cursor-pointer group w-full h-full rounded-xl overflow-hidden shadow-lg ${className}`}
      style={{ background: "#101c13" }}
    >
      <div className="w-full h-full overflow-hidden ">
        <Image
          ref={imgRef}
          src={src}
          alt={title || "Portfolio"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[500ms] ease-in-out group-hover:-translate-y-16"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071e11bb] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-white drop-shadow">
            {title}
          </span>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#42c822] hover:bg-[#1cb616] cursor-pointer transition">
            <ArrowUpRight className="text-white" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
// "use client";
// import { ArrowUpRight } from "lucide-react";
// import Image, { StaticImageData } from "next/image";
// import { useRef, useEffect, useState } from "react";

// interface PortfolioImageProps {
//   src: StaticImageData;
//   title?: string;
//   className?: string;
// }

// export function PortfolioImage({
//   src,
//   title,
//   className = "",
// }: PortfolioImageProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const imgRef = useRef<HTMLImageElement>(null);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     function updateScroll() {
//       const img = imgRef.current;
//       const cont = containerRef.current;
//       if (img && cont) {
//         // Calculate how much the image can be scrolled upward
//         const delta = img.naturalHeight * (cont.offsetWidth / img.naturalWidth) - cont.offsetHeight;
//         setScrollY(delta > 0 ? delta : 0);
//       }
//     }
//     updateScroll();
//     window.addEventListener("resize", updateScroll);
//     return () => window.removeEventListener("resize", updateScroll);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className={`relative cursor-pointer group w-full h-56 md:h-64 rounded-xl overflow-hidden shadow-lg ${className}`}
//       style={{ background: "#101c13" }}
//     >
//       <div className="w-full h-full overflow-hidden">
//         <Image
//           ref={imgRef}
//           src={src}
//           alt={title || "Portfolio"}
//           fill
//           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//           className="object-cover transition-transform duration-[2800ms] ease-in-out group-hover:will-change-transform"
//           style={{
//             transform: "translateY(0)",
//             transition: "transform 2.8s cubic-bezier(.25,.85,.49,1.01)",
//           }}
//           onLoadingComplete={() => {
//             // We must trigger useEffect to recalc scroll on load
//             setTimeout(() => {
//               const img = imgRef.current;
//               const cont = containerRef.current;
//               if (img && cont) {
//                 const delta = img.naturalHeight * (cont.offsetWidth / img.naturalWidth) - cont.offsetHeight;
//                 setScrollY(delta > 0 ? delta : 0);
//               }
//             }, 100);
//           }}
//           onMouseEnter={() => {
//             // On hover, animate scroll up
//             if (imgRef.current) {
//               imgRef.current.style.transform = `translateY(-${scrollY}px)`;
//             }
//           }}
//           onMouseLeave={() => {
//             if (imgRef.current) {
//               imgRef.current.style.transform = "translateY(0)";
//             }
//           }}
//         />
//       </div>
//       <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071e11bb] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
//         <div className="flex items-center justify-between">
//           <span className="text-lg font-semibold text-white drop-shadow">
//             {title}
//           </span>
//           <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#42c822] hover:bg-[#1cb616] cursor-pointer transition">
//             <ArrowUpRight className="text-white" size={22} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
