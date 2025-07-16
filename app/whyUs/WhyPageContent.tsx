"use client";

import useSwr from "swr";
import { API_URL, BACKEND_URL } from "@/config/config";
// import { BACKEND_URL } from "@/config/config";
import { fetcher } from "@/lib/fetcher";

import HeroSection from '@/components/hero/HeroSection';
// import GlobalSouth from '@/components/globalSouth/page';
// import KeyWorks from '@/components/keyWorks/pages';
// import PersonSocial from '@/components/personSocial/page';
// import GovernmentWork from '@/components/governmentWork/page';
import CommitingExcellenceBaner from '@/components/banner/CommitingExcellenceBanner';
import ScholarSection from '@/components/Sections/ScholarSection';
import ScrollingSection from '@/components/Sections/ScrollingSection';

import whyBanner from "../../public/assets/banners/why-banner.jpg";
import FullPageLoader from "@/components/Loaders/FullPageLoader";
import GlobalSouthSection from "@/components/Sections/GlobalSouthSection";
import KeyWorksSection from "@/components/Sections/KeyWorksSection";
import PersonSocialSection from "@/components/Sections/PersonSocialSection";
import GovernmentWorkSection from "@/components/Sections/GovernmentWorkSection";

const WhyPageContent = () => {

    const { data, error, isLoading, mutate } = useSwr(`${API_URL}/page/why-us`, fetcher)
    
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
				image={whyBanner}
				title="What makes us<br />different?"
			/>

			{/* <GlobalSouth /> */}
            <GlobalSouthSection />
			{/* <KeyWorks /> */}
            <KeyWorksSection />
			{/* <PersonSocial /> */}
            <PersonSocialSection
                ceo_name={data.data.ceo_name}
                ceo_message={data.data.ceo_message}
                ceo_image={BACKEND_URL + '/' + data.data.ceo_image_url}
            />
			{/* <GovernmentWork /> */}
            <GovernmentWorkSection />

			<CommitingExcellenceBaner />
			{/* <TeamSection /> */}
			<ScholarSection />
			<ScrollingSection />  
        </>
    );
};

export default WhyPageContent;