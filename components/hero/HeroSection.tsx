"use client";

import Image from "next/image";
// import Navbar from "../header/navbar";

interface HeroSectionProps {
  	image: any;
  	title: string;
  	textList?: string[];
  	bannerHeight?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  	image,
  	title,
  	bannerHeight = 1024,
  	textList = [],
}) => {
	return (
    	<div
      		className="relative h-screen w-full overflow-hidden"
      		style={{ maxHeight: `${bannerHeight}px` }}
    	>
      		{/* Background Image */}
			<Image
				src={image}
				alt={title}
				className="h-full w-full object-cover"
				width={200}
				height={200}
				priority
			/>
      		<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60"></div>
			{/* Text Overlay */}
			<div className="absolute inset-0 flex w-full items-center justify-center">
				<div className="w-full max-w-4xl min-w-fit px-4">
					<h1
						className="font-manrope text-center text-[50px] leading-[100%] font-medium tracking-[-1%] text-white uppercase md:text-[60px]"
						dangerouslySetInnerHTML={{ __html: title }}
					/>

					{textList.length > 0 && (
						<div className="mt-5 flex flex-wrap justify-center gap-4">
							{textList.map((item, index) => (
								<div key={index} className="flex items-center">
									<p className="font-poppins text-[16px] leading-[150%] whitespace-nowrap text-white md:text-[20px]">
										{item}
									</p>
									{index !== textList.length - 1 && (
										<div className="ml-4 h-[12px] w-[12px] rounded-full border-[1.5px] border-white" />
									)}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
    	</div>
  	);
};

export default HeroSection;
