"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import img from "../../../public/images/Ellipse.svg";
import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";
import ReuseableButton from "../Reuseable/ReuseableButton";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    avatar: img,
    rating: 4.9,
    maxRating: 5,
    review:
      "Tried running Google Ads on my own and wasted money. This time I left it to someone who clearly knows what's going on and the results are night and day. My budget was used smartly, and I got clicks that actually turned into sales. Plus, the reporting made it easy to understand what was happening.",
    service: "Google Ads Management",
    date: "2 weeks ago",
  },
  {
    id: 2,
    clientName: "Michael Chen",
    avatar: img,
    rating: 4.9,
    maxRating: 5,
    review:
      "Outstanding work on our e-commerce website. The design is modern, user-friendly, and conversion-focused. Sales increased by 40% within the first month of launch. The attention to detail and professional communication throughout the project was exceptional.",
    service: "E-commerce Development",
    date: "1 month ago",
  },
  {
    id: 3,
    clientName: "Emma Davis",
    avatar: img,
    rating: 4.9,
    maxRating: 5,
    review:
      "Delivered a custom CMS solution that perfectly fits our business needs. The backend is intuitive, the frontend is beautiful, and the performance is excellent. Great project management and delivered on time. Highly recommend for any web development needs.",
    service: "Custom CMS Development",
    date: "3 weeks ago",
  },
  {
    id: 4,
    clientName: "David Wilson",
    avatar: img,
    rating: 4.8,
    maxRating: 5,
    review:
      "Professional WordPress development with custom features that work flawlessly. The site loads fast, looks great on all devices, and the SEO optimization has improved our search rankings significantly. Excellent communication and support.",
    service: "WordPress Development",
    date: "1 week ago",
  },
  {
    id: 5,
    clientName: "Lisa Rodriguez",
    avatar: img,
    rating: 5.0,
    maxRating: 5,
    review:
      "Amazing full-stack development work! Built a complex web application with React and Node.js that handles our business processes perfectly. Clean code, great documentation, and ongoing support. Worth every penny and more.",
    service: "Full Stack Development",
    date: "2 months ago",
  },
];

export default function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="mt-32  max-w-5xl mx-auto md:mt-40 ">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DashedRotatedTitle title="Testimonials" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Fiverr Client Feedback
        </motion.h2>

        <motion.p
          className=" "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover what our customers are saying about their experiences with
          us. Read their testimonials to understand their satisfaction and the
          impact of our work.
        </motion.p>
      </motion.div>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {testimonialsData.slice(0, 3).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
          >
            <TestimonialCard
              testimonial={testimonial}
              isHovered={hoveredCard === testimonial.id || hoveredCard === null}
              onHover={() => setHoveredCard(testimonial.id)}
              onLeave={() => setHoveredCard(null)}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="grid place-items-center mt-10"
      >
        <ReuseableButton title="View Now !" showArrow />
      </motion.div>
    </section>
  );
}
