import Lenis from "lenis";
import React, { useCallback, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

export interface ScrollStackCard {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  content?: React.ReactNode;
}

interface ITestimonialsData {
  id: number;
  clientName: string;
  avatar: string;
  rating: number;
  maxRating: number;
  review: string;
  service: string;
}

interface ScrollStackProps {
  cards: ITestimonialsData[];
  backgroundColor?: string;
  cardHeight?: string;
  animationDuration?: string;
  sectionHeightMultiplier?: number;
  intersectionThreshold?: number;
  className?: string;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  cards,

  sectionHeightMultiplier = 3,

  className = "",
}) => {
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const setupLenis = useCallback(() => {
    const scroller = scrollableSectionRef.current;

    // Check if scroller is available and not null
    if (!scroller) {
      console.error("Scroller element is not available.");
      return;
    }

    // Ensure that the element you want to target is available before proceeding
    const contentElement = scroller.querySelector(".scroll-stack-inner");
    if (!contentElement) {
      console.error("scroll-stack-inner element is not available.");
      return;
    }

    // Set up Lenis
    const lenis = new Lenis({
      wrapper: scroller,
      content: contentElement as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    lenis.on("scroll", () => {
      // Handle scroll-related transformations
      // Add logic for scroll effects here...
    });

    // Continuous animation frame for smooth scroll
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return lenis;
  }, []);

  useEffect(() => {
    // Setup Lenis when the component mounts
    const lenisInstance = setupLenis();

    // Cleanup lenis when component unmounts
    return () => {
      lenisInstance?.destroy();
    };
  }, [setupLenis]);

  return (
    <section
      ref={scrollableSectionRef}
      className="relative max-h-screen w-full lg:w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300"
    >
      <div
        ref={sectionRef}
        className={`relative ${className}`}
        style={{ height: `${sectionHeightMultiplier * 85}vh` }}
      >
        <div
          className={`sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden`}
        >
          <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col justify-center">
            <div
              ref={sectionRef}
              className="relative w-full max-w-5xl mx-auto flex-shrink-0"
              style={{ height: "60vh" }}
            >
              {/* Render testimonial cards */}
              {cards.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
