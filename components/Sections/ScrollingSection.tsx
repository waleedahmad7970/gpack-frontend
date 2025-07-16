"use client";

import React, { useEffect, useRef } from "react";

const ScrollingSection: React.FC = () => {

	const topLineRef = useRef<HTMLDivElement>(null);
	const bottomLineRef = useRef<HTMLDivElement>(null);
	const topAnimationRef = useRef<number | null>(null);
	const bottomAnimationRef = useRef<number | null>(null);
	const isTopHovered = useRef(false);
	const isBottomHovered = useRef(false);

	useEffect(() => {
		const topLine = topLineRef.current;
		const bottomLine = bottomLineRef.current;

		if (!topLine || !bottomLine) return;

		const topContent = topLine.innerHTML;
		const bottomContent = bottomLine.innerHTML;
		topLine.innerHTML = `${topContent}${topContent}`;
		bottomLine.innerHTML = `${bottomContent}${bottomContent}`;

		bottomLine.scrollLeft = bottomLine.scrollWidth / 2;

		const animateTop = () => {
			
			if (topLine && !isTopHovered.current) {
				if (topLine.scrollLeft >= topLine.scrollWidth / 2) {
					topLine.scrollLeft = 0;
				}
					
				topLine.scrollLeft += 1;
			}

			topAnimationRef.current = requestAnimationFrame(animateTop);
		};

		const animateBottom = () => {
			
			if (bottomLine && !isBottomHovered.current) {
				if (bottomLine.scrollLeft <= 0) {
					bottomLine.scrollLeft = bottomLine.scrollWidth / 2;
				}

				bottomLine.scrollLeft -= 1;
			}

			bottomAnimationRef.current = requestAnimationFrame(animateBottom);
		};

		topAnimationRef.current = requestAnimationFrame(animateTop);
		bottomAnimationRef.current = requestAnimationFrame(animateBottom);

		return () => {
			if (topAnimationRef.current)
				cancelAnimationFrame(topAnimationRef.current);
			if (bottomAnimationRef.current)
				cancelAnimationFrame(bottomAnimationRef.current);
		};
	}, []);

  	return (
    	<div className="w-full overflow-hidden py-[40px] font-sans text-4xl font-semibold text-black md:my-[5rem] md:py-4">
      		<div
				ref={topLineRef}
				className="hide-scrollbar flex w-full touch-pan-x overflow-x-auto scroll-smooth py-2 whitespace-nowrap"
				onMouseEnter={() => (isTopHovered.current = true)}
				onMouseLeave={() => (isTopHovered.current = false)}
      		>
				<span className="font-manrope relative text-[40px] font-semibold">
					Smartest Strategy
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative px-5 text-[40px] font-semibold text-[#D98918]">
					Innovative Solutions
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Smartest Strategy
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold text-[#D98918]">
					Innovative
				</span>
				<span className="mtext-[#D98918] mx-2">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Smartest Strategy
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold text-[#D98918]">
					Innovative Solutions
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Smartest Strategy
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold text-[#D98918]">
					Innovative
				</span>
      		</div>

      		<div
				ref={bottomLineRef}
				className="hide-scrollbar flex w-full touch-pan-x overflow-x-auto scroll-smooth py-2 whitespace-nowrap"
				onMouseEnter={() => (isBottomHovered.current = true)}
				onMouseLeave={() => (isBottomHovered.current = false)}
      		>
				<span className="font-manrope relative text-[40px] font-semibold">
					Secure
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Grow Business
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Grow And Big Well
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Secure
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Grow Business
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Secure
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Grow Business
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Grow And Big Well
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Secure
				</span>
				<span className="mx-2 text-[#D98918]">•</span>
				<span className="font-manrope relative text-[40px] font-semibold">
					Grow Business
				</span>
      		</div>

      		<style jsx global>{`
        		.hide-scrollbar::-webkit-scrollbar {
          			display: none;
        		}
        		.hide-scrollbar {
          			-ms-overflow-style: none;
          			scrollbar-width: none;
        		}
      		`}</style>
    	</div>
  	);
};

export default ScrollingSection;
