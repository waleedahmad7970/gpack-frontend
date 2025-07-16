import React from "react";

const scholars = [
    "Paul Collier",
    "William Easterly",
    "Dani Rodrik",
    "Robert Chambers",
    "Amartya Sen",
    "Mahbub ul Haq",
    "Thandika Mkandawire",
    "Vandana Shiva",
];

const GlobalSouthSection = () => {
    return (
        <section className="mx-auto max-w-[1200px] px-[10px] py-[40px] md:px-0 md:py-[6rem]">
            <div className="mb-12 text-left">
                <h1 className="mb-6 text-[32px] font-semibold text-[#192451] md:text-[48px]">
                    Why emphasis on Global South?
                </h1>
                <p className="text-md font-Inter mb-8 leading-[150%] font-normal text-[#192451] md:text-[32px]">
                    Only those policy solutions work which are designed according to local
                    capacities, resources and ownership and are carefully embedded in
                    government systems and structures.
                </p>
            </div>

            <div className="space-y-6 text-[16px] font-normal text-[#192451] md:text-[20px]">
                <p>
                    The past fifty years of development policy work have provided a
                    crucial lesson: a one-size-fits-all approach is not only ineffective
                    but often counterproductive. Scholars like Paul Collier, William
                    Easterly, Dani Rodrik, and Robert Chambers, alongside South Asian and
                    African intellectuals such as Amartya Sen, Mahbub ul Haq, Thandika
                    Mkandawire, and Vandana Shiva, have consistently highlighted the
                    importance of recognizing the unique political, cultural, and social
                    contexts of developing countries. These nations are not homogenous
                    entities but are shaped by distinct histories, power dynamics, and
                    local realities that demand tailored solutions. The assumption that
                    strategies successful in one region can be universally applied has led
                    to misguided policies and unmet development goals. The Global Souths
                    experiences underscore the need for development frameworks that are as
                    diverse and nuanced as the challenges they aim to address.
                </p>

                <p>
                    To bridge this gap, it is essential to acknowledge the power and
                    conceptual imbalances that have long skewed development efforts. A
                    more equitable and informed approach is required—one that fosters
                    genuine collaboration between the Global North and South. This
                    partnership must be based on mutual respect and a shared understanding
                    that sustainable development can only be achieved when all voices are
                    heard and valued. By embracing this collaborative model, we can move
                    closer to realizing the Sustainable Development Goals in a way that
                    truly reflects the needs and aspirations of all people, regardless of
                    their geographical or economic circumstances.
                </p>
            </div>
        </section>
    );
};

export default GlobalSouthSection;
