import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "react-phone-input-2/lib/style.css";

import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import { getSiteData } from "@/lib/getSiteData";
import FullPageLoader from "@/components/Loaders/FullPageLoader";

const inter = Inter({
  	subsets: ["latin"],
  	display: "swap",
  	variable: "--font-inter",
  	weight: ["400", "500", "700"],
});

const manrope = Manrope({
  	subsets: ["latin"],
  	variable: "--font-manrope",
  	weight: ["400", "500", "700"],
});

const poppins = Poppins({
  	subsets: ["latin"],
  	variable: "--font-poppins",
  	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  	title: "GPAC - Global South Policy Action Collection",
  	description: "Global south policy action collection",
	icons: {
    	icon: '/assets/favicons/32x32-v1.png'
  	},
};

export default async function RootLayout({ children }: { children: React.ReactNode; }) {

	const siteData = await getSiteData();

	if (!siteData) {
    	return <FullPageLoader />
  	}

  	return (
    	<html
      		lang="en"
      		className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}
    	>
      		<body suppressHydrationWarning className={`${inter.className}`}>
        		<Navbar
					socialMedia={siteData.socialMedia} 
				/>
          		{children}
        		<Footer
					socialMedia={siteData.socialMedia}
					contactInfo={siteData.contactInfo}
				/>
      		</body>
    	</html>
  	);
}
