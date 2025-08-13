import img3 from "../../../public/images/portfolio/grime.png";
import img7 from "../../../public/images/portfolio/kcab.png";
import img6 from "../../../public/images/portfolio/neith.png";
import img1 from "../../../public/images/portfolio/olive.png";
import img2 from "../../../public/images/portfolio/p2.png";
import img from "../../../public/images/portfolio/tarantula.png";
import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";
import PortfolioImage from "./PortfolioImages";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full my-32 md:my-40 mx-auto">
      <div className="text-center">
        <DashedRotatedTitle title="Our Portfolio" />
        <h2 className="text-5xl font-bold text-[#42c822] mt-8 mb-4">
          A Showcase of Innovation
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Discover our portfolio showcasing our finest work, from innovative
          solutions to remarkable achievements. Explore diverse projects and
          exceptional results that bring visions to life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 auto-rows-[230px] md:grid-cols-3 gap-5 mt-10 w-full">
        {/* Portfolio items */}
        <PortfolioImage
          src={img}
          href="https://tarantula-gecko-774n.squarespace.com"
          className="md:col-span-1 md:row-span-2"
        />
        <PortfolioImage
          src={img2}
          href="https://healthcostiq.com"
          className="md:col-span-1 md:row-span-1"
        />
        <PortfolioImage
          src={img3}
          href="https://koala-mouse-y9cs.squarespace.com"
          className="md:col-span-1 md:row-span-1"
        />
        <PortfolioImage
          src={img1}
          href="https://olive-oarfish-m8at.squarespace.com"
          className="md:col-span-1 md:row-span-1"
        />
        <PortfolioImage
          src={img7}
          href="https://www.kcabmarketing.net"
          className="md:col-span-1 md:row-span-2"
        />
        <PortfolioImage
          src={img6}
          href="https://shopneith.com"
          className="md:col-span-1 md:row-span-1"
        />
      </div>
    </section>
  );
}
