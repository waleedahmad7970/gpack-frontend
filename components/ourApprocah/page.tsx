import React from "react";
import { Lightbulb, Target, Landmark, Package, Quote } from "lucide-react";
import Image from "next/image";
import vector from "../../public/assets/icons/approcah-1.svg";
import star from "../../public/assets/icons/approcah-2.svg";
import circle from "../../public/assets/icons/approcah-3.svg";
import rectangle from "../../public/assets/icons/approcah-4.svg";
import cube from "../../public/assets/icons/approcah-5.svg";

interface WorkItem {
  title: string;
  icon: React.ReactNode;
}

const works: WorkItem[] = [
  {
    title: "Rapid Diagnostic",
    icon: (
      <Image
        src={vector}
        alt="icon"
        className="h-[32px] w-[32px] md:h-[74px] md:w-[74px]"
      />
    ),
  },
  {
    title:
      "Working Politically with a clear focus to have the attention of the decision makers",
    icon: (
      <Image
        src={star}
        alt="icon"
        className="h-[32px] w-[32px] md:h-[74px] md:w-[74px]"
      />
    ),
  },
  {
    title: "Solution Focused with a goal to have early gains",
    icon: (
      <Image
        src={circle}
        alt="icon"
        className="h-[32px] w-[32px] md:h-[74px] md:w-[74px]"
      />
    ),
  },
  {
    title: "Embedding programmes inside sustainable structures",
    icon: (
      <Image
        src={cube}
        alt="icon"
        className="h-[32px] w-[32px] md:h-[74px] md:w-[74px]"
      />
    ),
  },
  {
    title: "Change without major disruption. We believe in bridge building",
    icon: (
      <Image
        src={rectangle}
        alt="icon"
        className="h-[32px] w-[32px] md:h-[74px] md:w-[74px]"
      />
    ),
  },
];

const OurApprocah: React.FC = () => {
  return (
    <div className="bg-gray-50 px-[10px] py-[40px] sm:px-8 md:py-[8rem] lg:px-20">
      <div className="mx-auto max-w-[1200] text-center lg:text-left">
        <div className="flex flex-col justify-between gap-6 text-center md:items-start lg:flex-row">
          <div>
            <h2 className="font-manrope max-w-[380px] text-left text-[32px] font-semibold text-[#192451] md:text-[48px]">
              Our Approach
            </h2>
          </div>
          <div>
            <h3 className="font-Inter max-w-[527px] text-left text-[16px] font-normal text-[#192451] md:text-[20px]">
              We apply agile, politically smart, and solution-driven methods to
              create lasting impact with minimal disruption.
            </h3>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, idx) => {
            if (idx < 3) {
              return (
                <div
                  key={idx}
                  className="mx-auto flex min-h-[190px] w-full max-w-[380px] min-w-[300px] flex-col items-center justify-center rounded-[10px] border border-[#8F92923D] bg-[#A939350A] p-3 transition hover:shadow-md md:min-h-[300px] md:p-4"
                >
                  <div className="mb-4 flex justify-center md:justify-start">
                    {work.icon}
                  </div>
                  <h4 className="mt-4 text-center text-[16px] font-semibold text-[#000] md:text-[20px] md:text-[#262626]">
                    {work.title}
                  </h4>
                </div>
              );
            }

            return null;
          })}

          {works.length === 5 && (
            <div className="flex flex-col justify-start gap-6 md:flex-row md:justify-center lg:col-span-3">
              {works.slice(3).map((work, idx) => (
                <div
                  key={idx}
                  className="flex min-h-[300px] w-full max-w-[380px] min-w-[300px] flex-col items-center justify-center border border-[#8F92923D] bg-[#A939350A] p-4 transition hover:shadow-md"
                >
                  <div className="mb-4 flex justify-center md:justify-start">
                    {work.icon}
                  </div>
                  <h4 className="mt-4 text-center text-[20px] font-semibold text-[#262626]">
                    {work.title}
                  </h4>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurApprocah;
