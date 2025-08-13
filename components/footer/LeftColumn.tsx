import React from 'react';
import Image from 'next/image';
import { ContactInfo } from '@/types/contact';
import footerLogo from "../../public/assets/logo/footer-logo.svg";
import { SocialMedia, SocialMediaItem } from '@/types/social';

import {
  	FaFacebookF,
  	FaInstagram,
  	FaXTwitter,
  	FaLinkedinIn,
  	FaYoutube,
} from "react-icons/fa6";

type LeftColumnProps = {
    socialMedia: SocialMedia[],
    contactInfo: ContactInfo
}

const LeftColumn: React.FC<LeftColumnProps> = ({ socialMedia, contactInfo }) => {

	function showIcon(item: SocialMediaItem, index: number)
	{
		switch(item.platform) {
			case 'facebook':
				return (
					<a 
						href={item.url}
						key={index}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookF className="cursor-pointer hover:text-blue-500" />
					</a>
				);
			case 'twitter':
				return (
					<a 
						href={item.url}
						key={index}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaXTwitter className="cursor-pointer hover:text-black" />
					</a>
				)
			case 'linkedin':
				return (
					<a 
						href={item.url}
						key={index}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
					</a>
				)
			case 'youtube':
				return (
					<a 
						href={item.url}
						key={index}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaYoutube className="cursor-pointer hover:text-red-600" />
					</a>
				)
			case 'instagram':
				return (
					<a 
						href={item.url}
						key={index}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="cursor-pointer hover:text-pink-600" />
					</a>
				)
			default:
				return (
					<a 
						href={item.url}
						key={index}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="cursor-pointer hover:text-pink-600" />
					</a>
				)
		}
	}

    return (
        <>
            <div className="w-full space-y-4 lg:w-auto">
                <div className="flex flex-col items-start gap-3 sm:flex-row md:h-[70px]">
                    <Image
                        src={footerLogo}
                        alt="GPAC Logo"
                        className="w-[150px] sm:w-[188px]"
                    />
                </div>

                <div className="mt-4 lg:mt-0">
                    <strong className="text-[16px] leading-[150%] font-semibold text-[#192451]">
                        Contact:
                    </strong>
                    <div className="text-[16px] leading-[24px] font-normal text-[#192451] underline">
                        {contactInfo.phone}
                    </div>
                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-[16px] leading-[24px] font-normal text-[#192451] underline hover:underline"
                    >
                        {contactInfo.email}
                    </a>
                </div>

                <div className="flex items-center space-x-4 pt-2 text-lg text-[#1c1c1c]">
                    {socialMedia
                        ?.filter((item): item is SocialMediaItem => !!item && !!item.url)
                        .map((item, index) => showIcon(item, index)
                    )}
                </div>
            </div>   
        </>
    );
};

export default LeftColumn;