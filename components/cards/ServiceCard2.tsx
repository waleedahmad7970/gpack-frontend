import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
    icon: any;
    title: string;
    description: string;
}

const ServiceCard2: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description
}) => {
    return (
        <>
            <div className="flex min-h-[250px] max-w-[270px] cursor-pointer flex-col justify-between rounded-lg border border-[#8F92923D] bg-white p-[15px] shadow-sm transition-all duration-300 hover:border-[#8F92923D] hover:shadow-md md:min-h-[380px] md:p-6">
                <div>
                    <div className="mb-4 text-2xl text-[#D98918]">
                        <Image
                            src={icon}
                            alt="icon"
                            className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
                        />
                    </div>
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
        </>
    );
};

export default ServiceCard2;