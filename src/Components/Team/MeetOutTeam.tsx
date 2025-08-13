import { StaticImageData } from "next/image";
import img9 from "../../../public/images/team/abdullah.png";
import img2 from "../../../public/images/team/hasan.png";
import img4 from "../../../public/images/team/iftekhar.png";
import img5 from "../../../public/images/team/imran.png";
import img3 from "../../../public/images/team/lulfur.png";
import img1 from "../../../public/images/team/manir.png";
import img7 from "../../../public/images/team/nazifa.jpg";
import img8 from "../../../public/images/team/sazidul.jpg";
import img6 from "../../../public/images/team/shaima.jpg";
import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";
import TeamCarousel from "./TeamCarousel";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: StaticImageData;
};
const teamMembers: TeamMember[] = [
  {
    id: "3",
    name: "Manir Uzzaman",
    role: "CEO at Shopify Manir",
    image: img1,
  },
  {
    id: "4",
    name: "Iftakhar Hossain Akash",
    role: "Project Manager",
    image: img4,
  },
  {
    id: "5",
    name: "Imran Hossain",
    role: "MERN Stack Developer",
    image: img5,
  },
  {
    id: "1",
    name: "Hasan Ahmed",
    role: "Google Ads Expert",
    image: img2,
  },
  {
    id: "2",
    name: "Lutfur Anik",
    role: "Shopify Expert",
    image: img3,
  },

  {
    id: "6",
    name: "Shaima Afrin",
    role: "SquareSpace Expert",
    image: img6,
  },
  {
    id: "7",
    name: "Nazifa Sultana Bithe",
    role: "Wix Expert",
    image: img7,
  },
  {
    id: "8",
    name: "Sazidul Islam",
    role: "Mobile App Developer",
    image: img8,
  },
  {
    id: "9",
    name: "MD Abdullah",
    role: "Wordpress Expert",
    image: img9,
  },
];

const MeetOurTeamSection = () => (
  <section id="team" className="w-full mt-20 ">
    <div className="flex justify-center mb-7">
      <DashedRotatedTitle title="Meet Our Team" />
    </div>

    <h2 className="text-center text-[#42C822] text-3xl md:text-5xl font-extrabold mb-4">
      Meet the Creative Minds Behind
    </h2>

    <p className="text-center  max-w-3xl mx-auto ">
      Our talented professionals bring diverse skills, innovative thinking, and
      a shared commitment to excellence. Together, we collaborate, create, and
      push boundaries to turn ideas into impactful realities.
    </p>

    <div className="-mt-20">
      <TeamCarousel
        members={teamMembers}
        title=""
        cardWidth={300}
        cardHeight={420}
        cardRadius={30}
        showArrows={true}
        pauseOnHover={true}
        visibleCards={2}
        className="py-0 pt-0 pb-0 my-0 mt-0 mb-0"
        showDots={false}
        sideCardScale={0.9}
        sideCardOpacity={0.6}
        grayscaleEffect={true}
        background="transparent"
        infoPosition="bottom"
        infoTextColor="#42C822"
        cardClassName="bg-[radial-gradient(ellipse_at_top,#1a3d1a_0%,#0B260C_100%)] border border-[#29A829] rounded-3xl overflow-hidden transition-all duration-500"
      />
    </div>
  </section>
);

export default MeetOurTeamSection;
