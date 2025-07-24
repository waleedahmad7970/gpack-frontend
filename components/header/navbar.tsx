"use client";

import { logo } from "@/public/assets/logo";
import Image from "next/image";
import React, { useState } from "react";
import { HeaderList } from "../Lists/HeaderList";
import menuIcon from "../../public/assets/logo/List.svg";
import Link from "next/link";
import { SocialMedia, SocialMediaItem } from "@/types/social";

import {
  	FaFacebookF,
  	FaInstagram,
  	FaXTwitter,
  	FaLinkedinIn,
  	FaYoutube,
} from "react-icons/fa6";

type NavBarProps = {
	socialMedia: SocialMedia[]
}

const Navbar: React.FC<NavBarProps> = ({ socialMedia }) => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

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
						<FaFacebookF size={20} className="text-white cursor-pointer hover:text-blue-500" />
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
						<FaXTwitter size={20} className="text-white cursor-pointer hover:text-red-500" />
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
						<FaLinkedinIn size={20} className="text-white cursor-pointer hover:text-blue-400" />
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
						<FaYoutube size={20} className="text-white cursor-pointer hover:text-red-400" />
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
						<FaInstagram size={20} className="text-white cursor-pointer hover:text-pink-600" />
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
						<FaInstagram size={20} className="text-white cursor-pointer hover:text-pink-600" />
					</a>
				)
		}
	}

  	return (	
    	<div className="font-inter absolute top-10 right-0 left-0 z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 md:px-10">
      		{/* Logo */}
			<Link href={"/"}>
				<Image src={logo} alt="gPack" className="z-50" />
			</Link>

			<div className="hidden md:flex">
				<HeaderList 
					setIsMenuOpen={setIsMenuOpen}
				/>
			</div>

			<div className="hidden gap-5 md:flex">
				{socialMedia
					?.filter((item): item is SocialMediaItem => !!item && !!item.url)
					.map((item, index) => showIcon(item, index)
				)}
			</div>

			<button
				className="z-50 p-2 md:hidden cursor-pointer"
				onClick={toggleMenu}
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
			>
				{!isMenuOpen ? (
					<Image 
						src={menuIcon} 
						alt="Open menu" 
						width={24} 
						height={24} 
					/>
				) : (
					<span className="text-4xl leading-none font-bold text-white">
						&times;
					</span>
				)}
			</button>

			{isMenuOpen && (
				<div className="bg-opacity-90 fixed inset-0 z-40 flex flex-col items-center justify-center bg-black md:hidden">
					<div className="flex flex-col items-center gap-8">
						<HeaderList
							setIsMenuOpen={setIsMenuOpen} 
						/>

						<div className="mt-8 flex gap-5">
							{socialMedia
								?.filter((item): item is SocialMediaItem => !!item && !!item.url)
								.map((item, index) => showIcon(item, index)
							)}
						</div>
					</div>
				</div>
			)}
    	</div>
  	);
}

export default Navbar;