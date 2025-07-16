import React from "react";
import scholar from "../../public/assets/banners/scholar-section.jpg";
import ScholarCard from "../cards/ScholarCard";

const ScholarApproachSection: React.FC = () => {

    const reformItems = [
        {
            text: `The aim of this work to help develop a broad
                    political agreement on key set of foundational reforms 
                    the country needed to give a fair deal to its citizens, strengthen
                        our federation and deliver a better quality of life.`,
        },
        {
            text: `Proud of our Pakistani identity, our collective effort 
                    will be to mobilize and build a national effort to help conceive 
                    a pragmatically implementable vision for Pakistan which political
                    parties could adopt and deliver while enhancing their own policy capacity
                        to deliver economic prosperity and development at a rapid pace.`,
        },
        {
            text: `Political Parties’ collective push to manage political conflicts
                    and manage effective federalism which could empower provinces following 
                    18th amendment vision and push for administrative decentralization in bureaucracy
                        and advocate for empower local governments and create an enabling environment for 
                        small businesses.`,
        },
    ];

    return (
        <section
            className="relative min-h-[669px] bg-cover bg-center bg-no-repeat px-2 py-[40px] text-white md:px-[64px] md:py-[112px]"
            style={{
                backgroundImage: `linear-gradient(rgba(25, 36, 81, 0.7), rgba(25, 36, 81, 0.7)), url(${scholar.src})`,
            }}
            id="scholar"
        >
            <div className="mx-auto max-w-[1200] text-left">
                <h2 className="text-left text-3xl font-bold md:text-[48px]">
                    Project For Pakistan Century
                </h2>
                <p className="mt-2 mb-8 max-w-4xl text-left text-[16px] font-normal md:mt-0 md:mb-12 md:text-[20px]">
                    Changes we want to push in Pakistan by 2047
                </p>

                <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reformItems.map((item, index) => (
                        <ScholarCard
                            key={index}
                            text={item.text} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScholarApproachSection;
