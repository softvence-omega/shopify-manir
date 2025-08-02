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
    image: "/images/team/manir.png",
  },
  {
    id: "1",
    name: "Hasan Ahmed",
    role: "Google Ads Expert",
    image: "/images/team/hasan.png",
  },
  {
    id: "2",
    name: "Lulfur Anik",
    role: "Shopify Expert",
    image: "/images/team/lulfur.png",
  },

  {
    id: "4",
    name: "Iftakhar Hossain Akash",
    role: "Project Manager",
    image: "/images/team/iftekhar.png",
  },
  {
    id: "5",
    name: "Imran Hossain",
    role: "MERN Stack Developer",
    image: "/images/team/imran.png",
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
