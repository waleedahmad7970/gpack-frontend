import React from 'react';
// import Image from 'next/image';
import bulb from "../../public/assets/icons/card-icon.svg";
import center from "../../public/assets/icons/card-icon2.svg";
import arrow from "../../public/assets/icons/card-icon3.svg";
import progress from "../../public/assets/icons/card-icon4.svg";
import check from "../../public/assets/icons/card-icon5.svg";
import book from "../../public/assets/icons/card-icon6.svg";
import ServiceCard2 from '../cards/ServiceCard2';

 const services = [
    {
        icon: bulb,
        title: "Policy Design & Sectoral Studies",
        description: "Crafting evidence-based policies and conducting in-depth analysis across key sectors.",
    },
    {
        icon: center,
        title: "Delivering policy",
        description: "Translating policy frameworks into actionable programs with measurable outcomes.",
    },
    {
        icon: arrow,
        title: "Trainings",
        description: "Building capacity through customized training sessions for stakeholders and institutions.",
    },
    {
        icon: progress,
        title: "Mid Term Programme Reviews",
        description: "Assessing program progress midway to ensure alignment with goals and recommend course corrections.",
    },
    {
        icon: check,
        title: "Third Party Validation Studies",
        description: "Providing independent assessments to verify program implementation and impact.",
    },
    {
        icon: book,
        title: "Evaluation Studies",
        description: "Measuring effectiveness, efficiency, and sustainability of initiatives to inform future strategy.",
    },
];

const OurServicesSection = () => {
    return (
        <>
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
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="mb-2 flex w-[calc(50%-2px)] justify-center sm:w-full md:mb-0 md:w-auto"
                            >
                                <ServiceCard2 
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>  
        </>
    );
};

export default OurServicesSection;