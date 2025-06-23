interface Work {
  author: string;
  designation?: string;
  title: string;
  year: string;
  rating: number;
  avatar?: React.ReactNode;
}
export const WhyUSCard = ({ work }: { work: Work }) => (
  <div className="flex min-h-[240px] w-full max-w-[336px] flex-col justify-between border-2 border-[#C24E4A] bg-[#AA312D] p-3 shadow-md md:min-h-[280px] md:p-6">
    <div>
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex items-center md:justify-center">{work.avatar}</div>
        <div>
          <div className="font-manrope text-[14px] font-semibold">
            {work.author}
          </div>
          <div className="font-manrope text-[12px] font-normal text-[#EAF3F3]">
            Designation Missing
          </div>
        </div>
      </div>
      <div className="font-Inter mt-6 text-[11px] font-normal md:mt-0 md:text-[18px]">
        {work.title} <span className="font-normal">({work.year})</span>
      </div>
    </div>
    <div className="mt-4 h-[14px] w-[14px] text-white">
      {"★".repeat(work.rating)}
      {"☆".repeat(5 - work.rating)}
    </div>
  </div>
);
