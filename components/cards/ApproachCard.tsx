import React from 'react';
import Image from 'next/image';

interface WorkItemProps {
  	icon: any;
    title: string;
}

const ApproachCard: React.FC<WorkItemProps> = ({ icon, title }) => {
    return (
        <div
            className="mx-auto flex min-h-[190px] w-full max-w-[380px] min-w-[300px] flex-col items-center justify-center rounded-[10px] border border-[#8F92923D] bg-[#A939350A] p-3 transition hover:shadow-md md:min-h-[300px] md:p-4"
        >
            <div className="mb-4 flex justify-center md:justify-start">
                <Image
                    src={icon}
                    alt="icon"
                    className="h-[32px] w-[32px] md:h-[74px] md:w-[74px]"
                />
            </div>
            <h4 className="mt-4 text-center text-[16px] font-semibold text-[#000] md:text-[20px] md:text-[#262626]">
                {title}
            </h4>
        </div>
    );
};

export default ApproachCard;