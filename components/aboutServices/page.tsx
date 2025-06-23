"use client";

import React from "react";
import Image from "next/image";
import bulb from "../../public/assets/icons/card-icon.svg";
import center from "../../public/assets/icons/card-icon2.svg";
import arrow from "../../public/assets/icons/card-icon3.svg";
import progress from "../../public/assets/icons/card-icon4.svg";
import check from "../../public/assets/icons/card-icon5.svg";
import book from "../../public/assets/icons/card-icon6.svg";
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex min-h-[250px] max-w-[270px] cursor-pointer flex-col justify-between rounded-lg border border-[#8F92923D] bg-white p-[15px] shadow-sm transition-all duration-300 hover:border-[#8F92923D] hover:shadow-md md:min-h-[380px] md:p-6">
    <div>
      <div className="mb-4 text-2xl text-[#D98918]">{icon}</div>
      <h3 className="mb-2 text-[14px] font-semibold md:text-[20px]">{title}</h3>
      <p className="font-Inter max-w-[220px] text-[11px] font-normal text-[#5C6161] md:text-[14px]">
        {description}
      </p>
    </div>

    {/* Animated Learn More Button */}
    <button className="group relative z-10 cursor-pointer overflow-hidden rounded-full border border-gray-300 px-4 py-2 text-[9px] transition-colors md:text-sm">
      <span className="relative z-20 text-black transition-colors group-hover:text-white">
        Learn More
      </span>
      <span className="absolute inset-0 z-10 w-0 bg-[#E39B35] transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </button>
  </div>
);

const OurServices: React.FC = () => {
  const services = [
    {
      icon: (
        <Image
          src={bulb}
          alt="icon"
          className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
        />
      ),
      title: "Policy Design & Sectoral Studies",
      description:
        "Crafting evidence-based policies and conducting in-depth analysis across key sectors.",
    },
    {
      icon: (
        <Image
          src={center}
          alt="icon"
          className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
        />
      ),
      title: "Delivering policy",
      description:
        "Translating policy frameworks into actionable programs with measurable outcomes.",
    },
    {
      icon: (
        <Image
          src={arrow}
          alt="icon"
          className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
        />
      ),
      title: "Trainings",
      description:
        "Building capacity through customized training sessions for stakeholders and institutions.",
    },
    {
      icon: (
        <Image
          src={progress}
          alt="icon"
          className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
        />
      ),
      title: "Mid Term Programme Reviews",
      description:
        "Assessing program progress midway to ensure alignment with goals and recommend course corrections.",
    },
    {
      icon: (
        <Image
          src={check}
          alt="icon"
          className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
        />
      ),
      title: "Third Party Validation Studies",
      description:
        "Providing independent assessments to verify program implementation and impact.",
    },
    {
      icon: (
        <Image
          src={book}
          alt="icon"
          className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
        />
      ),
      title: "Evaluation Studies",
      description:
        "Measuring effectiveness, efficiency, and sustainability of initiatives to inform future strategy.",
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] px-[10px] py-[5rem] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200]">
        <div className="mb-6 grid gap-4 md:mb-12 md:grid-cols-2 md:gap-8">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Our Services
          </h2>

          <div className="max-w-[480px] justify-self-end text-[20px] leading-snug font-normal md:text-right">
            <p>With a strong focus on innovation</p>
            <p>and tailored solutions, we work closely</p>
            <p className="text-gray-400">
              with our clients to develop strategies.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-wrap gap-6 md:justify-center">
          <div className="flex w-[calc(50%-5px)] flex-wrap justify-center gap-6 md:w-full">
            {services?.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div> */}
        {/* <div className="grid grid-cols-2 gap-1 px-4 sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
          {services?.map((service, index) => (
            <ServiceCard key={`service-${index}`} {...service} />
          ))}
        </div> */}
        <div className="flex flex-wrap justify-between md:justify-center md:gap-[40px]">
          {services?.map((service, index) => (
            <div
              key={index}
              className="mb-2 flex w-[calc(50%-2px)] justify-center sm:w-full md:mb-0 md:w-auto"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
