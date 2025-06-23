import React from "react";
import { team } from "@/static/static-elements";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-[10px] py-16 md:px-4">
      <div className="mb-12 text-center">
        <h2 className="font-manrope text-3xl font-semibold text-[#192451] md:text-[48px]">
          The Team
        </h2>
        <p className="font-Inter mx-auto mt-4 max-w-xl text-[14px] font-normal text-[#192451] md:text-[16px]">
          Our depth of work is informed by range of experts in diverse fields to
          advise on narrow specific challenges in their respective areas.
        </p>
      </div>

      <div className="flex flex-wrap gap-1 gap-y-12 md:justify-center md:gap-x-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex max-w-[calc(50%-2px)] flex-col items-start md:max-w-[388px]"
          >
            <div className="relative h-[200px] w-full overflow-hidden rounded-[8px] [clip-path:polygon(40px_0%,100%_0%,100%_100%,0%_100%,0%_40px)] md:h-[433px] md:w-[388px] md:rounded-xl md:[clip-path:polygon(100px_0%,100%_0%,100%_100%,0%_100%,0%_100px)]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-manrope text-[14px] font-semibold text-[#262626] md:text-[24px] md:leading-normal">
                {member.name}
              </h3>
              {member.title && (
                <p className="text-[10px] font-normal text-[#262626] md:text-[16px] md:leading-[24px]">
                  {member.title}
                </p>
              )}
              {member.role && (
                <p className="font-manrope text-[10px] font-semibold text-[#262626] underline md:text-[16px]">
                  {member.role}
                </p>
              )}
              <div className="mt-1 flex flex-wrap gap-2">
                <p className="text-[9px] font-bold text-[#262626] md:text-[12px]">
                  Fields:
                </p>
                {member.fields.map((field, i) => (
                  <span
                    key={i}
                    className="rounded-[50px] bg-[#F5F5F5] px-2 py-1 text-[9px] text-[#262626] md:text-[12px]"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
