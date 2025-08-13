"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";
import ReuseableButton from "../Reuseable/ReuseableButton";
import ScrollStack, { ScrollStackItem } from "./ScrollStackItem";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: 1,
    clientName: "dakijsjoannou",
    avatar:
      "https://c8.alamy.com/comp/2JCBA0K/modern-letter-d-logo-template-d-letter-logo-design-with-swoosh-icon-vector-2JCBA0K.jpg",
    rating: 5.0,
    maxRating: 5,
    review:
      "I reached out needing an eCommerce site, and the final result is sleek, secure, and simple to manage. The developer integrated all the payment and shipping tools I needed. Guidance was provided throughout the setup. My online store was ready ahead of schedule. It’s working flawlessly and looks stunning.",
    service: "Shopify",
  },
  {
    id: 2,
    clientName: "theobard85",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7bf7bccff4f74a841d3c90398d877e18-1560355021700350277.150037/381BE3E5-D5E3-4746-B748-35756DA06E6B",
    rating: 5.0,
    maxRating: 5,
    review:
      "Absolutely impressed with the web design! The site looks clean, professional, and works great on both desktop and mobile. The layout is sharp, the colors and branding match perfectly, and the overall design gives my business a trustworthy, modern look. He made it super easy for customers.",
    service: "WordPress",
  },
  {
    id: 3,
    clientName: "joebarrantes",
    avatar:
      "https://img.pikbest.com/png-images/20240913/the-letter-j-with-bold-colors-and-a-splash-effect_10831667.png!bw700",
    rating: 5.0,
    maxRating: 5,
    review:
      "Manir and his team will be life-long partners. Their exceptional work ethic and dedication to their clients gives me faith again in partnering and hiring work. Thank you guys!",
    service: "Shopify",
  },
  {
    id: 4,
    clientName: "bradstone52",
    avatar:
      "https://thumbs.dreamstime.com/b/garnished-gothic-style-font-letter-b-english-alphabets-monochrome-38518256.jpg",
    rating: 5.0,
    maxRating: 5,
    review:
      "Working with Manir was a great experience. He was very attentive and available to meet and discuss, we had multiple web calls that were extremely helpful. Rather than texting/email, Manir prefers to discuss over a live chat which for me is far more meaningful and effective. I would highly recommend Manir! Great guy and very good at what he does. Thanks, Brad Stone",
    service: "Webflow",
  },
  {
    id: 5,
    clientName: "paul_van_oers",
    avatar:
      "https://media.istockphoto.com/id/1135090585/vector/letter-p-logo-icon-design.jpg?s=612x612&w=0&k=20&c=lzfzb__61ufKGy-mvrHDriaazQW9iMGj5HK52PQTH9Y=",
    rating: 5.0,
    maxRating: 5,
    review:
      "I was genuinely surprised and extremely satisfied with the work Manir delivered. Communication was excellent and very fast. Manir managed to transform my website from a dull one-pager into a stunning, professional site with five clear, well-structured pages, and he did it remarkably quickly. The only minor point of criticism is that the website went live before it was fully finalized (some texts and contact details weren’t correct yet). However, this was resolved swiftly, and overall I’m incredibly happy with the result. Manir and I are already discussing revamping a second website, which shows how much I value his work. I highly recommend him to anyone looking for a reliable and skilled developer!",
    service: "WordPress",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mt-32 max-w-5xl mx-auto md:mt-40">
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

      <div
        className="  h-[600px] md:h-[700px]  
"
      >
        <ScrollStack>
          {testimonialsData.map((testimonial) => (
            <ScrollStackItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="grid place-items-center mt-10"
      >
        <Link
          href="https://www.fiverr.com/shopify_manir#reviews"
          className="w-full mx-auto md:grid place-items-center"
        >
          <ReuseableButton title="View Now !" showArrow />
        </Link>
      </motion.div>
    </section>
  );
}
