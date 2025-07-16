import React from 'react';
import Image from 'next/image';

interface WorkCardProps {
    icon: any;
    title: string;
    description: string;
    year: string
}

const WorkCard: React.FC<WorkCardProps> = ({ icon, title, description, year }) => {
    return (
        <div
            className="min-h-[210px] w-[calc(50%-5px)] max-w-[224px] border border-[#8F92923D] bg-white p-3 transition hover:shadow-md sm:w-[calc(50%-20px)] md:min-h-[250px] md:w-[calc(33.33%-20px)] md:p-4 xl:w-[calc(20%-20px)]"
        >
            <div className="mb-4 flex justify-start">
                <Image 
                    src={icon} 
                    alt="Gpac" 
                    width={48} 
                    height={48} 
                />
            </div>
            <h4 className="mb-3 text-left text-[14px] font-semibold text-[#0C1313] md:mb-4 md:text-[20px]">
                {title}
            </h4>
            <p className="font-manrope text-left text-[11px] font-normal text-[#5C6161] md:text-[14px]">
                {description} ({year})
            </p>
        </div>
    );
};

export default WorkCard;