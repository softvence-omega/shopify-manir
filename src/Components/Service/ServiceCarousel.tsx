"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  id: string;
  image: StaticImageData;
  href: string;
  rating: number;
  subtitle?: string;
}

export function ServicesCarousel({ services }: { services: Service[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      mode: "free-snap",
      slides: {
        perView: 3,
        spacing: 24,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 2, spacing: 16 },
        },
        "(max-width: 640px)": {
          slides: { perView: 1, spacing: 8 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    []
  );

  const perView =
    (instanceRef.current?.options.slides as { perView: number })?.perView ?? 3;

  const disablePrev = currentSlide === 0;
  const disableNext =
    loaded && instanceRef.current
      ? currentSlide >=
        instanceRef.current.track.details.slides.length - perView
      : false;

  return (
    <div className="relative w-full mx-auto mt-6 md:mt-12 flex items-center">
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute cursor-pointer left-0 top-2/3 lg:top-1/2 lg:-left-20 z-10 p-2 rounded-full bg-[#42c822] transition disabled:opacity-30"
        aria-label="Previous"
        disabled={disablePrev}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <div ref={sliderRef} className="keen-slider w-full">
        {services.map((svc) => (
          <div
            className="keen-slider__slide flex justify-center gap-0"
            key={svc.id}
          >
            <ServiceCard {...svc} />
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute cursor-pointer right-0 top-2/3 lg:top-1/2 lg:-right-20  z-10 p-2 rounded-full bg-[#42c822] transition disabled:opacity-30"
        aria-label="Next"
        disabled={disableNext}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
