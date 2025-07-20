'use client'

import useSwr from "swr";
import { API_URL } from "@/config/config";
import { fetcher } from "@/lib/fetcher";

import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import FullPageLoader from "./Loaders/FullPageLoader";

export default function LayoutShell({ children }: { children: React.ReactNode; }) {
  
    const { data, error, isLoading } = useSwr(`${API_URL}/site-data`, fetcher)
    
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
            <Navbar
                socialMedia={data.data.socialMedia} 
            /> 
            
            {children}
            
            <Footer
                socialMedia={data.data.socialMedia}
				contactInfo={data.data.contactInfo} 
            /> 
        </>
    )
}