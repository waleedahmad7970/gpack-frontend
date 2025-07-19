"use client";

import React from "react";
import Image from "next/image";
import pattern from "../../public/assets/banners/footer-banner.svg";
import { SocialMedia } from "@/types/social";
import { ContactInfo } from "@/types/contact";

import BottomBar from "./BottomBar";
import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";

type FooterProps = {
	socialMedia: SocialMedia[],
	contactInfo: ContactInfo
}

const Footer: React.FC<FooterProps> = ({ socialMedia, contactInfo }) => {
  	return (
    	<footer className="w-full bg-[#F8F8F8] text-sm text-[#1c1c1c]">
			<div className="container mx-auto px-4 py-10 lg:px-[7rem]">
				{/* Main Content - Stack on mobile, row on larger screens */}
				<div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-6">
					{/* Left Column */}
					<LeftColumn
						socialMedia={socialMedia}
						contactInfo={contactInfo} 
					/>

					{/* Right Column */}
					<RightColumn
						socialMedia={socialMedia} 
					/>
				</div>

				{/* Decorative Line */}
				<div className="mt-8">
					<Image src={pattern} alt="Footer Pattern" className="w-full" />
				</div>

				{/* Bottom Bar */}
				<BottomBar />
			</div>
		</footer>
  	);
};

export default Footer;
