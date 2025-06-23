import React from "react";
import ServiceCard from "../cards/service-card";
import { services } from "@/static/static-elements";
import Image from "next/image";
import { GPAC } from "@/public/assets/logo";

const AboutSection = () => {
  return (
    <section className="mx-auto max-w-[1196px] px-[10px] py-[40px] md:px-0 md:py-[100px]">
      <Image src={GPAC} alt="gPackP2" className="hidden sm:block" />
      <div className="mt-5 mb-10 flex flex-col justify-between md:flex-row md:items-center">
        <h2 className="font-manrope mb-3 hidden text-[20px] leading-[140%] font-semibold text-[#192451] md:mb-0 md:block md:text-[48px]">
          About Global South
          <br /> Policy Action Collective{" "}
        </h2>
        <h2 className="font-manrope mb-3 block text-[32px] leading-[140%] font-semibold text-[#192451] md:mb-0 md:hidden md:text-[48px]">
          About Global South
          <br /> Policy Action <br />
          Collective{" "}
        </h2>
        <p className="text-inter mx-auto mb-0 max-w-[527px] text-[16px] leading-[150%] font-normal text-[#262626] md:text-[20px]">
          We Enable Governments, Donors, INGOs And The Civil Society To Deliver
          Rapid{" "}
          <span className="font-semibold text-[#192451]">
            Equitable Results
          </span>{" "}
          With{" "}
          <span className="font-semibold text-[#192451]">
            Long Term Institutional
          </span>{" "}
          Change
        </p>
      </div>
      <div className="mx-auto max-w-[1196px]">
        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
