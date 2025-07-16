import React from 'react';

import Icon1 from "../../public/assets/icons/Megaphone.svg";
import Icon2 from "../../public/assets/icons/Lighthouse.svg";
import Icon3 from "../../public/assets/icons/Build-icon.svg";
import ItemList from '../cards/ItemList';

const PolicySection = () => {
    return (
        <>
            <section className="mx-auto max-w-[1200px] px-[10px] py-12 font-sans text-[#192451] sm:py-16 md:px-0">
                {/* Heading */}
                <h1 className="text-[32px] font-semibold sm:text-left md:text-center md:text-4xl md:text-[48px]">
                    Global South Policy Action Collective
                </h1>
                <p className="ms:text-center mt-2 text-[16px] font-normal text-[#192451] sm:text-left md:text-[32px]">
                    Delivering long term change at a rapid pace
                </p>

                {/* Intro Paragraph */}
                <p className="font-Inter py-[50px] pr-0 text-[16px] font-normal text-[#192451] sm:text-[17px] md:mt-6 md:py-0 md:pr-[7rem] md:text-[20px]">
                    GPAC is an Islamabad based public policy and development organization to
                    become an effective bridge between international donors and local actors
                    to help design, deliver and evaluate development outcomes at a rapid
                    pace in Education, social protection, decentralized service delivery,
                    human rights and climate action while bringing three critical
                    shifts:
                </p>

                {/* 3 Points Grid */}
                <div className="mt-10 space-y-6">
                    {/* Item 1 */}
                    <ItemList
                        icon={Icon1}
                        title="Citizens empowerment & voice"
                        text="Helping citizens make informed financial decisions to improve their economic well-being." 
                    />

                    {/* Item 2 */}
                    <ItemList
                        icon={Icon2}
                        title="Mobilizing and sustaining political will for policy oversight"
                        text="Supporting leaders with data-driven insights to strengthen policy implementation and accountability." 
                    />

                    {/* Item 3 */}
                    <ItemList
                        icon={Icon3}
                        title="Development of state capacities in Government with a view to bring in long term changes in the institutions"
                        text="Enhancing institutional effectiveness for long-term governance reform and financial resilience." 
                    />
                </div>

                {/* Paragraphs */}
                <div className="font-Inter mt-10 space-y-4 pr-0 text-[16px] font-normal text-[#192451] sm:text-[20px] md:pr-[9rem]">
                    <p>
                        While essentially situating ourselves as an intermediary (In the words
                        of the eminent political economist Mushtaq Khan) between the state and
                        the people, we will help shape international aid and public finance in
                        the best interest of people, political governments and donors ensuring
                        value of money, transparency and implementing development solutions
                        based on global research but contextualizing it in local political,
                        social and institutional contexts.
                    </p>
                    <p>
                        A big part of our work will be around developing policy capability in
                        political parties and parliamentary structures to help them manage
                        policy at local, provincial and federal level specially in our core
                        areas of interest and hence playing our critical role in harnessing
                        and deepening our democracy and help build people’s faith in it.
                    </p>
                </div>
            </section>  
        </>
    );
};

export default PolicySection;