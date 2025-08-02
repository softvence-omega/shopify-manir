import AboutUsSection from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import PortfolioSection from "@/Components/Portfolio/PorfolioSection";
import Wrapper from "@/Components/Reuseable/Wrapper";
import ServicesSection from "@/Components/Service/ServiceSection";
import MeetOurTeamSection from "@/Components/Team/MeetOutTeam";

export default function Home() {
  return (
    <div className="min-h-[200dvh] ">
      <Banner />
      <Wrapper>
        <AboutUsSection />
        <MeetOurTeamSection />
        <ServicesSection />
        <PortfolioSection />
      </Wrapper>
    </div>
  );
}
