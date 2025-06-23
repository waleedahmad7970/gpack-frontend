import HeroSection from "@/components/hero/hero-section";
import ScholarSection from "@/components/Sections/scholar-section";
import ScrollingText from "@/components/Sections/scrolling-section";
import TeamSectionSecond from "@/components/teamSection/page";
import teamBanner from "../../public/assets/banners/team-banner.jpg";

export default function Team() {
  return (
    <div>
      <HeroSection bannerHeight={500} image={teamBanner} title="Team" />
      <TeamSectionSecond />
      <ScholarSection />
      <ScrollingText />
    </div>
  );
}
