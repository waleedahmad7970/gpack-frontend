import AboutPolicy from "@/components/aboutPolicy/page";
import OurServices from "@/components/aboutServices/page";
import AboutServices from "@/components/aboutServices/page";
import CommitingExcellenceBaner from "@/components/banner/commiting-excellence";
import HeroSection from "@/components/hero/hero-section";
import HeroBannerOne from "@/components/menu/hero-banner-one";
import AboutSection from "@/components/Sections/about-section";
import ScholarSection from "@/components/Sections/scholar-section";
import ScrollingText from "@/components/Sections/scrolling-section";
import TeamSection from "@/components/Sections/team-section";
import aboutBanner from "../../public/assets/banners/about-banner.jpg";

export default function About() {
  return (
    <div>
      <HeroSection
        bannerHeight={500}
        image={aboutBanner}
        title="Delivering <br /> long term change"
      />
      <AboutPolicy />
      <AboutServices />
      <CommitingExcellenceBaner />
      {/* <HeroBannerOne /> */}
      <TeamSection />
      <ScholarSection />
      <ScrollingText />
    </div>
  );
}
