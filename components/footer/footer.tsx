"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import pattern from "../../public/assets/banners/footer-banner.svg";
import footerLogo from "../../public/assets/logo/footer-logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F8F8F8] text-sm text-[#1c1c1c]">
      <div className="container mx-auto px-4 py-10 lg:px-[7rem]">
        {/* Main Content - Stack on mobile, row on larger screens */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-6">
          {/* Left Column */}
          <div className="w-full space-y-4 lg:w-auto">
            <div className="flex h-[34px] flex-col items-start gap-3 sm:flex-row md:h-[70px]">
              <Image
                src={footerLogo}
                alt="GPAC Logo"
                className="h-full w-[150px] sm:w-[188px]"
              />
            </div>

            <div className="mt-4 lg:mt-0">
              <strong className="text-[16px] leading-[150%] font-semibold text-[#192451]">
                Contact:
              </strong>
              <div className="text-[16px] leading-[24px] font-normal text-[#192451] underline">
                +92 51 123 4567
              </div>
              <a
                href="mailto:Javed.ahmed@bath.edu"
                className="text-[16px] leading-[24px] font-normal text-[#192451] underline hover:underline"
              >
                Javed.ahmed@bath.edu
              </a>
            </div>

            <div className="flex items-center space-x-4 pt-2 text-lg text-[#1c1c1c]">
              <FaFacebookF className="cursor-pointer hover:text-blue-500" />
              <FaInstagram className="cursor-pointer hover:text-pink-600" />
              <FaXTwitter className="cursor-pointer hover:text-black" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
              <FaYoutube className="cursor-pointer hover:text-red-600" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full flex-col justify-between gap-7 space-y-6 text-sm font-medium md:flex-row md:space-y-0 lg:max-w-[450px] lg:items-start">
            <ul className="space-y-2 text-start">
              <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                <a href="#" className="hover:underline">
                  What We Do
                </a>
              </li>
              <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                <a href="#" className="hover:underline">
                  Insights & Publications
                </a>
              </li>
              <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                <a href="#" className="hover:underline">
                  Themes
                </a>
              </li>
              <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Hide duplicate social icons on mobile (already shown in left column) */}
            <div className="flex justify-start space-x-4 text-lg lg:justify-end">
              <FaXTwitter />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-8">
          <Image src={pattern} alt="Footer Pattern" className="w-full" />
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto flex flex-col-reverse items-center justify-between px-4 py-4 text-[16px] leading-[24px] font-normal text-[#192451] md:flex-row">
          <span className="mt-3 md:mt-0">
            © 2025 GPAC. All rights reserved.
          </span>
          <div className="mt-2 flex flex-wrap justify-center gap-4 md:mt-0 md:justify-end">
            <a href="#" className="underline hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="underline hover:underline">
              Terms of Use
            </a>
            <a href="#" className="underline hover:underline">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
