import React from "react";

import bulb from "../../public/assets/icons/card-icon.svg";
import center from "../../public/assets/icons/card-icon2.svg";
import quotes from "../../public/assets/icons/quotes-icon.svg";
import checkList from "../../public/assets/icons/check-icon.svg";
import mange from "../../public/assets/icons/mange-icon.svg";
import WorkCard from "../cards/WorkCard";

const works = [
    {
        title: "Instruction To Deliver",
        description: "Fighting to Transform Britain’s Public Services",
        year: "2007",
        icon: bulb,
    },
    {
        title: "Deliverology 101",
        description: "A Field Guide for Educational Leaders",
        year: "2011",
        icon: center,
    },
    {
        title: "How to Run a government",
        description: "So that Citizens Benefit and Taxpayers Don’t Go Crazy",
        year: "2015",
        icon: checkList,
    },
    {
        title: "Deliverology in Practice",
        description: "How Education Leaders Are Improving Student Outcomes",
        year: "2016",
        icon: mange,
    },
    {
        title: "Accomplishment",
        description: "How Ambitious and Challenging Things Get Done",
        year: "2021",
        icon: quotes,
    },
];

const GovernmentWorkSection: React.FC = () => {
    return (
        <div className="bg-gray-50 px-4 py-12 sm:px-8 lg:px-20">
            <div className="mx-auto max-w-[1200] text-center lg:text-left">
                <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
                    <div>
                        <h2 className="font-manrope hidden max-w-[380px] text-4xl font-semibold text-[#192451] md:block md:text-[48px]">
                            Making the Government Work
                        </h2>
                        <h2 className="font-manrope block max-w-[230px] text-left text-4xl font-semibold text-[#262626] md:hidden md:text-[48px]">
                            Emphasis on Deliverology
                        </h2>
                    </div>
                    <div>
                        <h3 className="font-Inter text-[16px] font-normal text-[#0C1313] md:text-[32px]">
                            Making public services re-designed & <br />
                            <span className="font-Inter text-[16px] font-normal text-[#19245199] md:text-[32px]">
                                delivered at a pace
                            </span>
                        </h3>
                    </div>
                </div>

                <p className="font-Inter mt-6 max-w-6xl text-left text-[16px] font-normal text-[#5C6161] md:text-[18px] md:text-[#192451]">
                    This work is heavily inspired by Sir Michael Barber’s pioneering
                    Deliverology approach, a practical and results-driven framework
                    designed to empower system leaders in rapidly improving public
                    services. Rooted in the principles of strategic planning, rigorous
                    data analysis, and relentless focus on outcomes, Deliverology provides
                    a clear pathway for leaders to implement reforms effectively and
                    achieve measurable improvements in a short time frame. By leveraging
                    these proven methodologies, this work aims to drive impactful change
                    and elevate the quality of services delivered to the public.
                </p>

                <p className="font-Itlic mt-6 max-w-6xl text-left text-[16px] font-normal text-[#5C6161] md:text-[18px] md:text-[#192451]">
                    Michael’s Key Works Provide Details:
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-x-[10px] gap-y-[10px] md:gap-x-[25px] md:gap-y-0">
                    {works.map((work, idx) => (
                        <WorkCard
                            key={idx}
                            icon={work.icon} 
                            title={work.title}
                            description={work.description}
                            year={work.year}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GovernmentWorkSection;
