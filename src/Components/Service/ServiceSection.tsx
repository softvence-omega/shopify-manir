import img from "../../../public/images/product.png";
import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";
import { ServicesCarousel } from "./ServiceCarousel";
const services = [
  {
    id: "1",
    image: img,

    rating: 4.9,
    subtitle: "I will build shopify store or dropshipping ecommerce store",
  },
  {
    id: "2",
    image: img,

    rating: 4.9,
    subtitle: "I will build wordpress site or dropshipping ecommerce store",
  },
  {
    id: "3",
    image: img,

    rating: 4.9,
    subtitle: "I will build android and iOS mobile app for your business",
  },
  {
    id: "4",
    image: img,

    rating: 4.8,
    subtitle: "Boost your website ranking with our expert SEO services",
  },
  {
    id: "5",
    image: img,

    rating: 4.9,
    subtitle: "Modern, responsive UI/UX for apps and websites",
  },
  {
    id: "6",
    image: img,

    rating: 4.7,
    subtitle: "Grow your business with social media management & ads",
  },
  {
    id: "7",
    image: img,

    rating: 4.8,
    subtitle: "24/7 maintenance & security for your website or store",
  },
  {
    id: "8",
    image: img,

    rating: 4.95,
    subtitle: "Any custom website or SaaS app—React, Next, Laravel, more",
  },
];

export default function ServicesSection() {
  return (
    <section className="my-32 md:my-40 ">
      <div className="text-center">
        <DashedRotatedTitle title="Our Services" />
        <h2 className="text-[2rem] md:text-[2.7rem] font-bold leading-tight text-primary  mt-8 mb-4">
          Most Popular Services Providing
        </h2>
        <p className="text-white max-w-3xl text-center  mb-4  mx-auto leading-relaxed text-sm md:text-base">
          We offer a wide range of services to help you build, scale, and
          optimize your online presence. Whether you`re looking for a stunning
          website, a powerful e-commerce store, or targeted digital marketing,
          our team has you covered.
        </p>
      </div>
      <ServicesCarousel services={services} />
    </section>
  );
}
