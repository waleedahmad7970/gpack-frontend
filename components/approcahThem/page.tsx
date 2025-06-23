"use client";

import React from "react";
import Image from "next/image";
import themeImage from "../../public/assets/icons/thems-img.svg";

interface Theme {
  id: number;
  title: string;
  description: string;
  keyActors?: string;
  subtitle?: string;
  color: string;
}

const ApproachThemes = () => {
  const themesData: Theme[] = [
    {
      id: 1,
      title: "Localization",
      description:
        "Facilitate The Power Imbalance Between Donors And Local Organization By Increasing Intermediary Creativity, Organizational Development in a Hand Heating Support To Thousands of Grassroots And Mid-Level Organizations.",
      keyActors:
        "International Donors, INDCA, Local CEOs, Local NGOs, Governments Regulatory Bodies Like EAD, NOD And Charity Commission.",
      color: "green",
    },
    {
      id: 2,
      title: "Last Mile Advocacy",
      description:
        "Pakistani Decision Making is Structured in A Particular Way With Masters like Capture, Citizens Lack Of Access To The Boolean Master And Lack Of Implementation Capacity Of The State Where Have After Legislation Changes It Takes Years To Get The Actual Change Happen.",
      keyActors:
        "Federal And Provincial Assemblies, Federal And Provincial Ministries, District-And Local Officials.",
      color: "blue",
    },
    {
      id: 3,
      title: "Girls Rising",
      subtitle:
        "Fighting access and learning poverty challenges specially in low HDI districts",
      description:
        "Education Sector Ratings & Transformational Role In Lightning Youth to Erastic Trust To Participate in Economics Life, Make Schools To Deliver On Essential Skills And Make Our Colleges Embrace Creativity And Critical Skills And Eventually Employability.",
      keyActors:
        "Federal And Provincial Education Ministries, Employable Skills Development",
      color: "purple",
    },
    {
      id: 4,
      title: "Climate Action",
      description:
        "From Policy Commitments in Fortuna Like Cup 25 To Number Of Cultural Decisions On Climate Avgacity. They no Finance Pakistan Authorities To Value Help To The Return That Not Achievated Global Resources Can Make Their Country Climate Resilient in They Threatens the Low Manifestation of Human Development Planning For Communities, Cities And Regions Designing Their Domestic Investment To Promote Green Economics.",
      color: "orange",
    },
  ];

  const colorMap: Record<string, string> = {
    green: " text-[#192451]",
    blue: " text-[#192451]",
    purple: " text-[#192451]",
    orange: " text-[#192451]",
  };

  return (
    <div className="bg-[#0000001A] px-4 py-[6rem] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 md:mb-12">
          <h1 className="font-manrope mb-2 text-2xl font-semibold text-[#192451] md:mb-4 md:text-[64px]">
            Themes
          </h1>
          <p className="font-Inter mb-4 max-w-[620px] text-[16px] font-semibold text-[#192451] md:mb-6 md:text-[32px]">
            Our work centers around sustainability, early wins, institutional
            resilience, and strategic stakeholder engagement.
          </p>
          <div className="block w-full flex-1 md:hidden lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={themeImage}
                alt="Themes illustration"
                className="h-auto w-full object-cover shadow-none"
              />
            </div>
          </div>
          <h2 className="font-Inter mt-[32px] mb-4 max-w-[620px] text-[16px] font-normal text-[#192451] md:mb-6 md:text-[30px]">
            Key Works Of The Scholars Inspired The Conception Of Our Approach
          </h2>
        </div>

        <div className="flex flex-col items-start gap-10 lg:flex-row">
          <div className="flex-1">
            <div className="space-y-5 md:space-y-8">
              {themesData.map((theme) => (
                <div
                  key={theme.id}
                  className={`inset-0 py-6 ${colorMap[theme.color]}`}
                >
                  <div className="inline-grid !min-h-fit border-l border-[#192451] px-6">
                    <h3
                      className={`font-manrope mb-3 text-2xl font-bold md:text-[32px] ${colorMap[theme.color].split(" ")[1]}`}
                    >
                      {theme.title}
                    </h3>

                    {theme.subtitle && (
                      <p className="font-Itlic mb-4 text-[18px] font-medium text-[#192451] capitalize md:text-[21px]">
                        {theme.subtitle}
                      </p>
                    )}

                    <div className="pl-4">
                      {theme.keyActors && (
                        <div className="mb-4">
                          <h4 className="font-Itlic text-[18px] font-medium text-[#192451] capitalize md:text-[21px]">
                            Key Actors:
                          </h4>
                          <p className="text-[#192451]">{theme.keyActors}</p>
                        </div>
                      )}

                      <p className="font-Inter text-[16px] font-normal text-[#192451] md:text-[18px]">
                        {theme.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden w-full flex-1 md:block lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={themeImage}
                alt="Themes illustration"
                className="h-auto w-full object-cover shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachThemes;
