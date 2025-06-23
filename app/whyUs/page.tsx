import CommitingExcellenceBaner from "@/components/banner/commiting-excellence";
import GlobalSouth from "@/components/globalSouth/page";
import GovernmentWork from "@/components/governmentWork/page";
import HeroSection from "@/components/hero/hero-section";
import KeyWorks from "@/components/keyWorks/pages";
import PersonSocial from "@/components/personSocial/page";

import ScholarSection from "@/components/Sections/scholar-section";
import ScrollingText from "@/components/Sections/scrolling-section";
import TeamSection from "@/components/Sections/team-section";
import whyBanner from "../../public/assets/banners/why-banner.jpg";

export default function WhyUs() {
  return (
    <div>
      <HeroSection
        bannerHeight={500}
        image={whyBanner}
        title="What makes us<br />different?"
      />

      <GlobalSouth />
      <KeyWorks />
      <PersonSocial />
      <GovernmentWork />

      <CommitingExcellenceBaner />
      <TeamSection />
      <ScholarSection />
      <ScrollingText />
    </div>
  );
}
