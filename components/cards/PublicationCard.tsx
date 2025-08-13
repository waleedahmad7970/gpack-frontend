"use client";

import React from "react";
import Image from "next/image";
import { Publication } from "@/types/publication";

import { publication_bg } from "@/public/assets/banners";

type PublicationProps = {
	publication: Publication
}

export const PublicationCard: React.FC<PublicationProps> = ({
  	publication
}) => {
  	return (
    	<>
			<div className="relative h-[200px] w-full overflow-hidden rounded-[8px] [clip-path:polygon(40px_0%,100%_0%,100%_100%,0%_100%,0%_40px)] md:h-[433px] md:w-[388px] md:rounded-xl md:[clip-path:polygon(100px_0%,100%_0%,100%_100%,0%_100%,0%_100px)]">
				<Image
					src={publication_bg}
					alt={publication.title}
					fill
					className="object-cover md:min-h-[330px]"
				/>
			</div>

			<div className="mt-4">
				<h3 className="font-manrope text-[14px] leading-normal font-semibold text-[#262626] md:text-[24px]">
					{publication?.author}
				</h3>
				<h3 className="font-manrope text-[14px] leading-normal font-semibold text-[#262626] md:text-[24px]">
					{publication.title}
				</h3>

				{publication?.summary && (
					<p className="text-[10px] font-normal text-[#262626] md:text-[16px] md:leading-[24px]">
						{publication?.summary}
					</p>
				)}
			</div>
    	</>
  	);
};
