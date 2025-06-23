import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Fragment } from "react";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Navbar />
      
      {children}
      <Footer />
    </Fragment>
  );
}
