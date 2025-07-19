"use client";

import useSwr from "swr";
import { API_URL } from "@/config/config";
// import { BACKEND_URL } from "@/config/config";
import { fetcher } from "@/lib/fetcher";

import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import { contact_bg } from "@/public/assets/banners";
import ContactForm from './ContactForm';

import FullPageLoader from "@/components/Loaders/FullPageLoader";
import ScrollingSection from "@/components/Sections/ScrollingSection";

const ContactPageContent = () => {

    const { data, error, isLoading } = useSwr(`${API_URL}/page/contact`, fetcher)
    
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
                image={contact_bg} 
                title="Contact Us" 
            />
            <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between rounded-lg bg-white px-[10px] py-[40px] md:flex-row md:px-0 md:py-[100px]">
                <div className="max-w-[581px]">
                    <h2 className="font-manrope mb-5 text-[48px] leading-normal font-semibold text-[#192451]">
                        Get in Touch
                    </h2>

                    <p className="mb-[50px] text-[16px] leading-[24px] text-[#192451]">
                        We are here to help you achieve financial success! Whether you have
                        a question, need expert financial advice, or want to schedule a
                        consultation, feel free to reach out to us.
                    </p>

                    <div className="mb-[50px]">
                        <p className="mb-5 text-[16px] leading-normal font-normal text-[#192451] underline">
                            info@opse.org
                        </p>
                        <p className="text-[16px] leading-normal font-normal text-[#192451] underline">
                            +82 51 123 4567
                        </p>
                    </div>
                </div>

                <div className="hidden h-[270px] w-[1px] bg-[#000] md:block" />
                
                <ContactForm />
            
            </div>

            <ScrollingSection />   
        </>
    );
};

export default ContactPageContent;