import React from 'react';

interface ScholarCardProps {
    text: string;
}
const ScholarCard: React.FC<ScholarCardProps> = ({ text }) => {
    return (
        <div
            className="mx-auto max-h-fit w-full max-w-[346px] border border-white bg-transparent p-4 text-left"
        >
            <p className="font-Inter text-[16px] leading-[25px] text-white md:text-[24px]">
                {text}
            </p>
        </div>
    );
};

export default ScholarCard;