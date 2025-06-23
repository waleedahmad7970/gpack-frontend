"use client";
import React from "react";
import Image from "next/image";

// Avatars
import avatar from "../../public/assets/icons/Avatar.svg";
import secondAvatar from "../../public/assets/icons/Avatar-2.svg";
import thirdAvatar from "../../public/assets/icons/Avatar-3.svg";
import fourthAvatar from "../../public/assets/icons/Avatar-4.svg";
import fifthAvatar from "../../public/assets/icons/Avatar-5.svg";
import sixthAvatar from "../../public/assets/icons/Avatar-6.svg";
import seventhAvatar from "../../public/assets/icons/Avatar-7.svg";
import eightAvatar from "../../public/assets/icons/Avatar-8.svg";

import { WhyUSCard } from "../cards/whyus-card";

// Works data
const works = [
  {
    avatar: <Image src={avatar} alt="avatar" width={40} height={40} />,
    author: "Amartya Sen",
    title: "Development as Freedom",
    year: "1999",
    rating: 5,
  },
  {
    avatar: <Image src={secondAvatar} alt="avatar" width={40} height={40} />,
    author: "Mahbub ul Haq",
    title: "Reflections on Human Development",
    year: "1995",
    rating: 5,
  },
  {
    avatar: <Image src={thirdAvatar} alt="avatar" width={40} height={40} />,
    author: "Thandika Mkandawire",
    title:
      "African Intellectuals: Rethinking Politics, Language, Gender, and Development",
    year: "2005",
    rating: 4,
  },
  {
    avatar: <Image src={fourthAvatar} alt="avatar" width={40} height={40} />,
    author: "Vandana Shiva",
    title: "Staying Alive: Women, Ecology, and Development",
    year: "1988",
    rating: 5,
  },
  {
    avatar: <Image src={fifthAvatar} alt="avatar" width={40} height={40} />,
    author: "Paul Collier",
    title:
      "The Bottom Billion: Why the Poorest Countries are Failing and What Can Be Done About It",
    year: "2007",
    rating: 5,
  },
  {
    avatar: <Image src={sixthAvatar} alt="avatar" width={40} height={40} />,
    author: "Robert Chambers",
    title: "Whose Reality Counts? Putting the First Last",
    year: "1997",
    rating: 5,
  },
  {
    avatar: <Image src={seventhAvatar} alt="avatar" width={40} height={40} />,
    author: "Mushtaq Khan",
    title:
      "Rents, Rent-Seeking and Economic Development: Theory and Evidence in Asia (2000, co-edited with Jomo K. S.)",
    year: "2000",
    rating: 5,
  },
  {
    avatar: <Image src={eightAvatar} alt="avatar" width={40} height={40} />,
    author: "Euan Euen Ang",
    title: "How China escaped poverty trap",
    year: "2016",
    rating: 5,
  },
];

const KeyWorks: React.FC = () => {
  return (
    <div className="bg-[#A93935] px-[10px] py-[40px] text-white sm:px-8 md:px-4 md:py-[8rem] lg:px-16">
      <div className="mb-12 text-center">
        <h2 className="font-manrope text-[30px] font-semibold md:text-[48px]">
          Key Works
        </h2>
        <p className="font-Inter mt-2 text-[16px] font-normal md:text-[32px]">
          Key works by scholars who inspired the conception of our approach.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap justify-center gap-3 md:gap-[40px]">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="flex w-[calc(50%-6px)] justify-center sm:w-[calc(50%-20px)] md:w-auto"
          >
            <WhyUSCard work={work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyWorks;
