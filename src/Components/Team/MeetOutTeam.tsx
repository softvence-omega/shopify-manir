import DashedRotatedTitle from "../Reuseable/DashedRotatedTitle";
import TeamCarousel from "./TeamCarousel";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};
const teamMembers: TeamMember[] = [
  {
    id: "3",
    name: "Manir Uzzaman",
    role: "CEO at Shopify Manir",
    image:
      "https://res.cloudinary.com/drwixw2na/image/upload/v1755528150/manir_ne3vo8.png",
  },
  {
    id: "4",
    name: "Iftakhar Hossain Akash",
    role: "Project Manager",
    image:
      "https://res.cloudinary.com/drwixw2na/image/upload/v1755528148/iftekhar_okjoqg.png",
  },
  {
    id: "8",
    name: "Sazidul Islam",
    role: "Mobile App Developer",
    image:
      "https://res.cloudinary.com/drwixw2na/image/upload/v1755528148/sazid_pldpmn.jpg",
  },
  {
    id: "2",
    name: "Lutfur Anik",
    role: "Shopify Expert",
    image:
      "https://res.cloudinary.com/drwixw2na/image/upload/v1755528148/lulfur_v79hk3.png",
  },

  {
    id: "7",
    name: "Nazifa Sultana Bithe",
    role: "Wix Expert",
    image:
      "https://res.cloudinary.com/drwixw2na/image/upload/v1755528147/nazifa_c386io.jpg",
  },
  {
    id: "1",
    name: "Hasan Ahmed",
    role: "Google Ads Expert",
    image:
      "https://res.cloudinary.com/drwixw2na/image/upload/v1755528149/hasan_stkvgd.png",
  },
  {
    id: "9",
    name: "MD Abdullah",
    role: "Wordpress Expert",
    image:
      "https://res.cloudinary.com/drwixw2na/image/upload/v1755528149/abdullah_iohbcn.png",
  },

  {
    id: "6",
    name: "Shaima Afrin",
    role: "SquareSpace Expert",
    image:
      "https://res.cloudinary.com/drwixw2na/image/upload/v1755528147/shaima_tms7gd.jpg",
  },
  {
    id: "5",
    name: "Imran Hossain",
    role: "MERN Stack Developer",
    image:
      "https://res.cloudinary.com/drwixw2na/image/upload/v1755528149/imran_l8yqhl.png",
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
