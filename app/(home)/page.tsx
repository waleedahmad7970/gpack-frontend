import CommitingExcellenceBaner from "@/components/banner/commiting-excellence";
import HeroSection from "@/components/hero/hero-section";
import AboutSection from "@/components/Sections/about-section";
import ScholarSection from "@/components/Sections/scholar-section";
import ScrollingText from "@/components/Sections/scrolling-section";
import { home_banner } from "@/public/assets/banners";
import { heroBannerOneList } from "@/static/static";
import TeamSection from "@/components/Sections/team-section";

export default function Home() {
  return (
    <div>
      <HeroSection
        image={home_banner}
        title="Enabling Change"
        textList={heroBannerOneList}
      />
      <AboutSection />
      <CommitingExcellenceBaner />
      {/* <HeroBannerOne /> */}
      <TeamSection />
      <ScholarSection />
      <ScrollingText />
    </div>
  );
}
