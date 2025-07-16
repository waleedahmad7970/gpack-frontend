import { excellence } from "@/public/assets/banners";
import Image from "next/image";

export default function CommitingExcellenceBaner() {
  	return (
    	<div className="relative mx-auto w-full overflow-hidden">
      		{/* Aspect ratio container */}
      		<div className="aspect-[1440/481] h-auto max-h-[700px] min-h-[186px] w-full">
        		{/* Background Image */}
				<Image
					src={excellence}
					alt="Commitment to Excellence"
					fill
					className="object-cover object-center"
					priority
				/>

        		{/* Semi-transparent overlay */}
        		<div className="absolute inset-0 bg-[#A93935]/50" />
				{/* Centered content */}
				<div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
					<h2 className="font-manrope max-w-[768px] text-[25px] leading-[120%] font-semibold tracking-[1%] md:text-[48px]">
						Committing to excellence, delivering better & more
					</h2>
				</div>
      		</div>
    	</div>
  	);
}
