"use client";

import useSwr from "swr";
import { API_URL } from "@/config/config";
// import { BACKEND_URL } from "@/config/config";
import { fetcher } from "@/lib/fetcher";

import HeroSection from "@/components/hero/HeroSection";
import CommitingExcellenceBaner from "@/components/banner/CommitingExcellenceBanner";
import TeamSection from "@/components/Sections/TeamSection";
import ScholarSection from "@/components/Sections/ScholarSection";
import ScrollingSection from "@/components/Sections/ScrollingSection";
import PolicySection from "@/components/Sections/PolicySection";
import OurServicesSection from "@/components/Sections/OurServicesSection";

import aboutBanner from "../../public/assets/banners/about-banner.jpg";
import FullPageLoader from "@/components/Loaders/FullPageLoader";

const AboutPageContent = () => {

    const { data, error, isLoading } = useSwr(`${API_URL}/page/about`, fetcher)
    
    if(error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">Error loading data: {error.message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
        );
    }

    if(isLoading && !data) {
        return <FullPageLoader />
    }

    return (
        <>
            <HeroSection
				bannerHeight={500}
				image={aboutBanner}
				title="Delivering <br /> long term change"
			/>
            <PolicySection />
			<OurServicesSection />
			<CommitingExcellenceBaner />
			<TeamSection
                members={data.data.team_members} 
            />
			<ScholarSection />
			<ScrollingSection />  
        </>
    );
};

export default AboutPageContent;