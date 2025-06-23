import ApproachThemes from "@/components/approcahThem/page";
import HeroSection from "@/components/hero/hero-section";
import OurApprocah from "@/components/ourApprocah/page";
import ScholarApprocah from "@/components/scholarApprocah/page";
import ScrollingText from "@/components/Sections/scrolling-section";
import approcahBanner from "../../public/assets/banners/approcah-banner.jpg";

export default function Approcach() {
  return (
    <div>
      <HeroSection
        image={approcahBanner}
        bannerHeight={500}
        title="Our Approach & Themes"
      />
      <OurApprocah />
      <ApproachThemes />
      <ScholarApprocah />
      <ScrollingText />
    </div>
  );
}
