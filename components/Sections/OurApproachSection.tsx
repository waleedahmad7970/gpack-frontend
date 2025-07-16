import React from "react";

import vector from "../../public/assets/icons/approcah-1.svg";
import star from "../../public/assets/icons/approcah-2.svg";
import circle from "../../public/assets/icons/approcah-3.svg";
import rectangle from "../../public/assets/icons/approcah-4.svg";
import cube from "../../public/assets/icons/approcah-5.svg";
import ApproachCard from "../cards/ApproachCard";

const works = [
  	{
    	title: "Rapid Diagnostic",
    	icon: vector,
  	},
  	{
    	title: "Working Politically with a clear focus to have the attention of the decision makers",
    	icon: star,
  	},
  	{
    	title: "Solution Focused with a goal to have early gains",
    	icon: circle,
  	},
  	{
    	title: "Embedding programmes inside sustainable structures",
    	icon: cube,
  	},
  	{
    	title: "Change without major disruption. We believe in bridge building",
    	icon: rectangle,
  	},
];

const OurApproachSection: React.FC = () => {
  	return (
		<div className="bg-gray-50 px-[10px] py-[40px] sm:px-8 md:py-[8rem] lg:px-20">
			<div className="mx-auto max-w-[1200] text-center lg:text-left">
				<div className="flex flex-col justify-between gap-6 text-center md:items-start lg:flex-row">
					<div>
						<h2 className="font-manrope max-w-[380px] text-left text-[32px] font-semibold text-[#192451] md:text-[48px]">
							Our Approach
						</h2>
					</div>
					<div>
						<h3 className="font-Inter max-w-[527px] text-left text-[16px] font-normal text-[#192451] md:text-[20px]">
							We apply agile, politically smart, and solution-driven methods to
							create lasting impact with minimal disruption.
						</h3>
					</div>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{works.map((work, index) => {
						if (index < 3) {
							return (
								<ApproachCard
									key={index}
									icon={work.icon} 
									title={work.title}
								/>
							)
						}
					})}
					<div className="flex flex-col justify-start gap-6 md:flex-row md:justify-center lg:col-span-3">
						{works.slice(3).map((work, idx) => (
							<ApproachCard
								key={idx}
								icon={work.icon} 
								title={work.title}
							/>
						))}
					</div>
					{/* {works.length === 5 && (
						<div className="flex flex-col justify-start gap-6 md:flex-row md:justify-center lg:col-span-3">
							{works.slice(3).map((work, idx) => (
								<div
									key={idx}
									className="flex min-h-[300px] w-full max-w-[380px] min-w-[300px] flex-col items-center justify-center border border-[#8F92923D] bg-[#A939350A] p-4 transition hover:shadow-md"
								>
									<div className="mb-4 flex justify-center md:justify-start">
										{work.icon}
									</div>
									<h4 className="mt-4 text-center text-[20px] font-semibold text-[#262626]">
										{work.title}
									</h4>
								</div>
							))}
						</div>
					)} */}
				</div>
			</div>
		</div>
  	);
};

export default OurApproachSection;
