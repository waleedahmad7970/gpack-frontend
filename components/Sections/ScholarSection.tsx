import React from "react";
import Image from "next/image";
import scholar from "../../public/assets/banners/scholar-section.jpg";
import arrow from "../../public/assets/icons/right-arrow.svg";

const ScholarSection: React.FC = () => {
  	return (
    	<section
      		className="relative min-h-[669px] bg-cover bg-center bg-no-repeat px-5 py-[40px] text-white md:px-[64px] md:py-[112px]"
      		style={{
        		backgroundImage: `linear-gradient(rgba(25, 36, 81, 0.7), rgba(25, 36, 81, 0.7)), url(${scholar.src})`,
      		}}
      		id="scholar"
    	>
      		<div className="mx-auto h-full w-full max-w-[1312px] md:py-16">
        		<div className="mx-auto grid gap-10 md:grid-cols-2">
          			{/* Left Section */}
          			<div>
            			<h4 className="mb-2 text-[14px] font-semibold md:text-base md:text-[16px] md:leading-[150%]">
              				What’s in the name!
            			</h4>
            			<h2 className="text-[30px] font-bold capitalize md:text-5xl">
              				What Makes Us <br />
              				Different?
            			</h2>
          			</div>

          			{/* Right Section */}
          			<div>
            			<h4 className="font-Inter mb-2 text-[16px] font-normal md:text-base md:text-[20px]">
              				What’s in the name. Why emphasis on{" "}
              				<span className="font-semibold underline">Global South?</span>
            			</h4>
						<p className="font-Inter max-w-[490px] py-[32px] text-[16px] md:text-base md:text-[20px]">
							Only those policy solutions work which are designed according to
							local capacities, resources and ownership and are carefully
							embedded in government systems and structures.
						</p>
            			<div className="align-center flex items-center gap-3">
              				<button className="font-poppins inline-block cursor-pointer text-[16px] font-medium text-white md:text-base md:text-[18px]">
                				Read More
              				</button>
              				<Image 
								src={arrow} 
								alt="arrow" 
								className="cursor-pointer" 
							/>
            			</div>
          			</div>
        		</div>

        		{/* Divider */}
        		<div className="my-10 h-px"></div>

        		{/* Scholars Section */}

        		<div className="px-4 md:px-0">
					<h3 className="font-manrope mb-6 text-left text-2xl font-normal md:text-[30px] lg:text-3xl">
						Key works of the scholars inspired the conception of our approach
					</h3>
					<div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-2">
						<div className="inline-grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-2">
							<div className="h-fit max-w-full border-l border-white pl-4 md:max-w-[437px]">
								<h4 className="font-manrope leading-tight font-bold md:text-[32px]">
									Amartya Sen
								</h4>
								<p className="font-Inter mt-1 text-[21px] font-normal">
									Development As Freedom (1999)
								</p>
							</div>

							<div className="mt-5 h-fit max-w-full border-l border-white pl-4 md:mt-0 md:max-w-[437px]">
								<h4 className="font-manrope leading-tight font-bold md:text-[32px]">
									Mahbub ul Haq
								</h4>
								<p className="font-Inter mt-1 text-[21px] font-normal">
									Reflections On Human Development (1995)
								</p>
							</div>

							<div className="mt-5 h-fit max-w-full border-l border-white pl-4 md:mt-0 md:max-w-[437px]">
								<h4 className="font-manrope leading-tight font-bold md:text-[32px]">
									Yuen Yuen Ang
								</h4>
								<p className="font-Inter mt-1 text-[21px] font-normal">
									How China Escaped Poverty Trap (2016)
								</p>
							</div>
						</div>
					</div>
        		</div>
      		</div>
    	</section>
  	);
};

export default ScholarSection;
