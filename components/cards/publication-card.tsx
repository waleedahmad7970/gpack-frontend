"use client";

import React from "react";
import Image from "next/image";

type Publication = {
  image: string;
  name: string;
  author?: string | null;
  title?: string | null;

  description?: string;
};

type PublicationCardProps = {
  publication: Publication;
};

export const PublicationCard: React.FC<PublicationCardProps> = ({
  publication,
}) => {
  return (
    <div className="flex max-w-[calc(50%-2px)] flex-col items-start md:max-w-[380px]">
      <div className="relative h-[200px] w-full overflow-hidden rounded-[8px] [clip-path:polygon(40px_0%,100%_0%,100%_100%,0%_100%,0%_40px)] md:h-[433px] md:w-[388px] md:rounded-xl md:[clip-path:polygon(100px_0%,100%_0%,100%_100%,0%_100%,0%_100px)]">
        <Image
          src={publication?.image}
          alt={publication?.name}
          fill
          className="object-cover md:min-h-[330px]"
        />
      </div>

      <div className="mt-4">
        <h3 className="font-manrope text-[14px] leading-normal font-semibold text-[#262626] md:text-[24px]">
          {publication?.author}
        </h3>
        <h3 className="font-manrope text-[14px] leading-normal font-semibold text-[#262626] md:text-[24px]">
          {publication?.title}
        </h3>

        {publication?.description && (
          <p className="text-[10px] font-normal text-[#262626] md:text-[16px] md:leading-[24px]">
            {publication?.description}
          </p>
        )}
      </div>
    </div>
  );
};
