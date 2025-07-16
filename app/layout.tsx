import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "react-phone-input-2/lib/style.css";
// import { AppDispatch } from "@/components/AppDispatch";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";

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
  	title: "GPACK - Global South Policy Action Collection",
  	description: "Global south policy action collection",
};

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode;
}) {
  	return (
    	<html
      		lang="en"
      		className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}
    	>
      		<body suppressHydrationWarning className={`${inter.className}`}>
        		<Navbar />
          		{children}
        		<Footer />
      		</body>
    	</html>
  	);
}
