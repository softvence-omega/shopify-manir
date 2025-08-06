import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ReuseableButton from "../Reuseable/ReuseableButton";

interface ServiceCardProps {
  image: StaticImageData;
  href: string;
  rating: number;
  subtitle?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  href,
  rating,
  subtitle,
}) => (
  <div className=" shadow-lg  w-full md:h-[450px] flex flex-col items-center justify-between  transition-all   m-2">
    <div className="w-full   flex flex-col items-center">
      <div className="relative w-full h-[260px] ">
        <Image
          src={image}
          alt={subtitle!}
          layout="fill"
          className="rounded-[40px]  object-fill "
        />
      </div>

      <div className="text-lg p-4 ">{subtitle}</div>
    </div>
    <div className="flex p-4 md:items-center justify-between w-full  flex-col md:flex-row gap-4">
      <div className="flex  items-center gap-1font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
        >
          <path
            d="M10.2507 1.50396C10.5098 0.810879 11.4902 0.810878 11.7493 1.50395L13.777 6.92662C13.8894 7.2273 14.1707 7.43165 14.4914 7.44567L20.2752 7.6984C21.0145 7.7307 21.3174 8.66306 20.7384 9.1237L16.2077 12.7278C15.9565 12.9277 15.849 13.2583 15.9348 13.5677L17.4817 19.1465C17.6795 19.8596 16.8864 20.4358 16.2693 20.0274L11.4415 16.8322C11.1738 16.6551 10.8262 16.6551 10.5585 16.8322L5.73069 20.0274C5.11365 20.4358 4.32054 19.8596 4.51825 19.1465L6.0652 13.5677C6.15097 13.2583 6.04354 12.9277 5.79232 12.7278L1.26164 9.12371C0.682571 8.66306 0.985512 7.7307 1.72475 7.6984L7.5086 7.44567C7.8293 7.43165 8.11057 7.2273 8.223 6.92662L10.2507 1.50396Z"
            fill="#FFAE00"
          />
        </svg>
        <span className="ml-2">{rating} / 5</span>
      </div>
      <Link href={href}>
        <ReuseableButton title="View Now !" showArrow />
      </Link>
    </div>
  </div>
);
export default ServiceCard;
