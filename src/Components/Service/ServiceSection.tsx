import img from "../../../public/images/product.png";
import img2 from "../../../public/images/service/framer.webp";
import img3 from "../../../public/images/service/fullstack.webp";
import img4 from "../../../public/images/service/godaddy.webp";
import img5 from "../../../public/images/service/googleAds.jpg";
import img6 from "../../../public/images/service/hubspot.jpg";
import img7 from "../../../public/images/service/landing.webp";
import img8 from "../../../public/images/service/square.jpeg";
import img9 from "../../../public/images/service/webflow.webp";
import img10 from "../../../public/images/service/wix.webp";
import img11 from "../../../public/images/service/wordpress.jpeg";
import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";
import { ServicesCarousel } from "./ServiceCarousel";
const services = [
  {
    id: "10",
    image: img3,
    rating: 4.9,
    href: "https://www.fiverr.com/shopify_manir/build-rebuild-website-development-as-full-stack-web-developer-frontend-backen?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=9&seller_online=true&imp_id=1bdd3f7e-936e-47f2-bc15-5593b8ef2ec6",
    subtitle:
      "I will do custom website development as full stack developer, front-end developer",
  },
  {
    id: "1",
    image: img,
    href: "https://www.fiverr.com/shopify_manir/build-shopify-store-or-dropshipping-ecommerce-store?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=1&seller_online=true&imp_id=6fb6a01e-5ddb-462b-806c-85f5fc99c090",
    rating: 4.9,
    subtitle: "I will build Shopify store or dropshipping ecommerce store",
  },

  {
    id: "3",
    image: img11,
    href: "https://www.fiverr.com/shopify_manir/build-wordpress-website-development-redesign-wordpress-using-elementor-pro?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=2&seller_online=true&imp_id=14bb7893-9cf4-4c5e-bdfe-323ee7c275e2",
    rating: 4.8,
    subtitle:
      "I will design, redesign, develop, update, clone, or customize WordPress",
  },
  {
    id: "4",
    image: img9,
    rating: 4.9,
    href: "https://www.fiverr.com/shopify_manir/design-redesign-or-develop-webflow-website-webflow-expert?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=3&seller_online=true&imp_id=e4cf8f1e-138e-4fd9-8065-612261fbf74f",
    subtitle:
      "I will design, redesign, or develop Webflow website, Webflow expert",
  },
  {
    id: "5",
    image: img8,
    rating: 5.0,
    href: "https://www.fiverr.com/shopify_manir/flutter-mobile-app-development-android-ios-app-development-flutter-developer?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=4&seller_online=true&imp_id=153c6567-1fc9-417c-bf3a-378f5f4c02c0",
    subtitle: "I will design or redesign professional Squarespace website",
  },
  {
    id: "6",
    image: img10,
    rating: 5.0,
    href: "https://www.fiverr.com/shopify_manir/design-or-redesign-wix-website-or-wix-ecommerce-website?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=6&seller_online=true&imp_id=75e3340b-e5ee-4680-bbc3-0cb6a0f0d961",
    subtitle: "I will design or redesign Wix website or Wix ecommerce website",
  },
  {
    id: "7",
    image: img2,
    rating: 4.9,
    href: "https://www.fiverr.com/shopify_manir/create-one-product-shopify-dropshipping-store?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=7&seller_online=true&imp_id=1ad3b1a7-6adc-4caf-8c4d-c009a5a5ea1d",
    subtitle:
      "I will design or develop Framer website, Framer landing page, Figma to Framer",
  },
  {
    id: "8",
    image: img5,
    rating: 4.9,
    href: "https://www.fiverr.com/shopify_manir/audit-setup-and-manage-your-google-ads-adwords-ppc-search-and-campaigns?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=8&seller_online=true&imp_id=fbfd01e1-51ba-4490-8014-4f0db7d1e09e",
    subtitle:
      "I will set up and manage your Google Ads ad campaigns, PPC management",
  },
  {
    id: "9",
    image: img7,
    rating: 4.5,
    href: "https://www.fiverr.com/shopify_manir/design-shopify-product-landing-page-with-shogun-gempages-or-pagefly?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=10&seller_online=true&imp_id=449ee102-2264-4ebd-8b89-a4b07e8299b5",
    subtitle:
      "I will design Shopify product landing page with Shogun, GemPages or PageFly",
  },

  {
    id: "11",
    image: img4,
    href: "https://www.fiverr.com/shopify_manir/design-or-redesign-godaddy-website-with-godaddy-builder?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=11&seller_online=true&imp_id=dfa5b441-bcd0-4c0a-b288-31bc8d15cd00",
    rating: 4.7,
    subtitle: "I will design or redesign GoDaddy website with GoDaddy builder",
  },
  {
    id: "12",
    image: img6,
    rating: 4.7,
    href: "https://www.fiverr.com/shopify_manir/build-hubspot-website-or-hubspot-landing-pages?context_referrer=seller_page&ref_ctx_id=7c6d315293094955a4ce5feea5013b5b&pckg_id=1&pos=5&seller_online=true&imp_id=89925cec-b12e-42b2-9277-48d8474efab3",
    subtitle: "I will build hubspot website or hubspot landing pages",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="my-32 md:my-40 ">
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
