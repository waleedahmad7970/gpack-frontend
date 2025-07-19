"use client";

import React from "react";
import Image from "next/image";
import quotes from "../../public/assets/icons/quotes.svg";
// import person from "../../public/assets/icons/MaskGroup.svg";

interface PersonSocialSectionProps {
    ceo_name: string;
    ceo_message: string;
    ceo_image: any;
}

const PersonSocialSection: React.FC<PersonSocialSectionProps> = ({
    ceo_name,
    ceo_message,
    ceo_image
}) => {
     return (
        <div className="bg-white px-4 py-12 sm:px-8 lg:px-16">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 lg:flex-row">
                {/* Text Content */}
                <div className="relative flex-1">
                    <h2 className="font-manrope mb-2 text-[64px] leading-[120%] font-semibold text-[#0C1313]">
                        {ceo_name}
                    </h2>
                    <h3 className="mb-6 max-w-[70%] text-[32px] leading-normal font-extrabold text-[#0C1313] md:max-w-full">
                        Programme on Social Mobility & Education
                    </h3>
                    <div className="hidden sm:block" dangerouslySetInnerHTML={{ __html: ceo_message }}>
                        
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 text-start">
                    <div className="inline-block overflow-hidden rounded-xl">
                        <Image
                            src={ceo_image}
                            alt="person"
                            className="h-full w-full object-cover"
                            width={800}
                            height={800}
                        />
                    </div>
                    <p className="font-manrope mt-4 text-[24px] font-semibold text-[#262626]">
                        {ceo_name}
                    </p>
                    <p className="font-Inter text-[16px] font-normal text-[#262626]">
                        Education & Social Mobility
                    </p>
                </div>

                <div className="block sm:hidden">
                    <p className="mb-6 text-[18px] font-normal text-[#192451]">
                        The true spirit of this center depicts the struggle, commitment and
                        intellectual contribution of Dr Arif Naveed in reconceptualizing the
                        role of schooling in intergenerational social mobility in bringing
                        extremely excluded families out of poverty through education. In his
                        path breaking doctoral thesis at Cambridge University, Arif explains
                        Pakistan ’s education policy failure for poor.
                    </p>

                    <Image
                        src={quotes}
                        alt="quotes"
                        className="absolute top-[21.5rem] left-[-50px] mb-6 h-[150px] w-[150px]"
                    />

                    <div className="font-Italic relative mb-6 max-w-[470px] p-4 text-[14px] leading-[160%] font-normal text-[#192451]">
                        “Data analysis reveals the existence of an ill-targeted education
                        assistance initiative that has reinforced unequal access to
                        education in favour of the more resource-rich geographies. Those who
                        benefitted most are the children of better educated and more
                        resourceful parents, and not those experiencing the worst forms of
                        deprivation and exclusion. Arif Naveed’s evidence-based explanation
                        of education failure since 2010, particularly provides exceptional
                        insights into the sociology of education in South Asia and redefines
                        the framing of education policy research into the issue of strategic
                        schooling.”
                    </div>

                    <p className="font-Inter mb-6 text-[18px] leading-[160%] font-normal text-[#192451]">
                        Arif Naveed’s Programme on Education and Social Mobility will solely
                        focus on pushing his vision to use the transformative power of
                        education to change the condition of families in extreme poverty by
                        promoting research, policy engagement and actual engagement
                        programmes for families living in extreme poverty to develop needed
                        social capital along with schooling for their children as Arif
                        argued to work towards familial social mobility route.
                    </p>

                    <button className="group relative z-10 cursor-pointer overflow-hidden rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold transition-colors md:px-4 md:py-2">
                        <span className="relative z-20 text-black transition-colors group-hover:text-white">
                        Learn More
                        </span>
                        <span className="absolute inset-0 z-10 w-0 bg-[#E39B35] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PersonSocialSection;
