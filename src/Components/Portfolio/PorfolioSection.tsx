import img2 from "../../../public/images/portfolio/img1.jpg";
import img3 from "../../../public/images/portfolio/img2.jpg";
import img1 from "../../../public/images/portfolio/img3.jpg";
import img6 from "../../../public/images/portfolio/img5.jpg";
import img from "../../../public/images/portfolio/tall1.jpg";
import img7 from "../../../public/images/portfolio/tall2.jpg";
import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";
import { PortfolioImage } from "./ReuseableImage";

export default function PortfolioSection() {
  return (
    <section className="w-full my-32 md:my-40  mx-auto">
      <div className="text-center ">
        <DashedRotatedTitle title="Our Portfolio" />
        <h2 className="text-5xl  font-bold text-[#42c822] mt-8 mb-4">
          A Showcase of Innovation
        </h2>
        <p className="max-w-3xl  mx-auto text-sm md:text-base leading-relaxed">
          Discover our portfolio showcasing our finest work, from innovative
          solutions to remarkable achievements. Explore diverse projects and
          exceptional results that bring visions to life.
        </p>
      </div>

      <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-5 w-full  auto-rows-[230px] md:auto-rows-[230px]">
        <PortfolioImage src={img} className="md:row-span-2 md:col-span-1" />
        <PortfolioImage src={img2} className="md:col-span-1 md:row-span-1" />

        <PortfolioImage src={img3} className="md:col-span-1 md:row-span-1" />
        <PortfolioImage src={img1} className="md:col-span-1 md:row-span-1" />

        <PortfolioImage src={img7} className="md:col-span-1 md:row-span-2" />
        <PortfolioImage src={img6} className="md:col-span-1 md:row-span-1" />
        <PortfolioImage src={img3} className="md:col-span-1 md:row-span-1" />
      </div>
    </section>
  );
}
