import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  	icon: StaticImageData | string;
  	title: string;
  	description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  	icon,
  	title,
  	description,
}) => {
  	return (
    	<div className="group relative flex h-full min-h-[240px] max-w-[385px] cursor-pointer flex-col overflow-hidden rounded-xl bg-[#F8F8F8] p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[465px] md:p-10">
      		{/* Glow effect */}
      		<div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      			{/* Icon */}
				<div className="mb-4 transition-transform duration-300 group-hover:scale-110 md:mb-10">
					<Image src={icon} alt="icon" className="h-auto w-[32px] md:w-[74px]" />
				</div>

				{/* Content area with flex-grow */}
				<div className="flex flex-grow flex-col gap-4">
					<h3 className="font-manrope text-[20px] font-semibold text-[#262626] transition-colors duration-300 group-hover:text-[#D98918] md:text-[24px]">
						{title}
					</h3>
					<p className="font-inter text-[11px] text-[#262626] transition-all duration-300 group-hover:translate-x-1 md:text-[16px]">
						{description}
					</p>
				</div>

				{/* Learn more link - now fixed at bottom */}
				{/* <div className="mt-4 pt-4">
					<a
						href="#"
						className="font-manrope inline-block text-[#D98918] underline transition-all duration-300 group-hover:translate-x-2"
					>
						Learn more
					</a>
				</div> */}

      			{/* Animated border */}
      			<div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D98918] transition-all duration-500 group-hover:w-full" />
    		</div>
  		);
};

export default ServiceCard;
