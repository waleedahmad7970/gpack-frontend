import React from 'react';
import Image from 'next/image';

interface ItemListProps {
  	icon: any;
  	title: string;
  	text: string;
}

const ItemList: React.FC<ItemListProps> = ({
    icon,
    title,
    text
}) => {
    return (
        <div className="flex flex-row items-center gap-4">
            <Image
                src={icon}
                alt="Global South Policy Action Collective"
                width={48}
                height={48}
            />
            <div>
                <h3 className="font-manrope text-[20px] font-semibold">
                    {title}
                </h3>
                <p className="font-Inter max-w-[527px] text-[16px] text-[#192451CC] sm:text-base">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ItemList;