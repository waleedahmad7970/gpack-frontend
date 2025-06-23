import { PublicationCard } from "@/components/cards/publication-card";
import HeroSection from "@/components/hero/hero-section";
import { publications } from "@/static/static-elements";
import { publication_bg } from "@/public/assets/banners";

export default function Page() {
  return (
    <div>
      <HeroSection
        bannerHeight={500}
        image={publication_bg}
        title="Publications"
      />
      <div className="mx-auto max-w-[784px] px-[10px] py-10 md:px-0">
        {publications?.map((item, index) => (
          <div key={index}>
            {/* Ensure only the text content decides the width */}
            <h2 className="font-manrope my-[50px] inline-block w-full text-center text-[32px] font-semibold text-black md:text-[48px]">
              {item.category}
            </h2>

            <div className="flex flex-wrap gap-1 gap-y-12 md:justify-center md:gap-x-10">
              {item.items?.map((publication: any, idx) => (
                <PublicationCard key={idx} publication={publication} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
