import AboutUsSection from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import PortfolioSection from "@/Components/Portfolio/PorfolioSection";
import Wrapper from "@/Components/Reuseable/Wrapper";
import ServicesSection from "@/Components/Service/ServiceSection";
import MeetOurTeamSection from "@/Components/Team/MeetOutTeam";
import TestimonialsSection from "@/Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Wrapper>
        <AboutUsSection />
        <MeetOurTeamSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
      </Wrapper>
    </div>
  );
}
