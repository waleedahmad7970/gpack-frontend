"use client";

import { logo } from "@/public/assets/logo";
import Image from "next/image";
import React, { useState } from "react";
import { HeaderList } from "../Lists/header-list";
import { headerSocialIcons } from "@/static/static";
import menuIcon from "../../public/assets/logo/List.svg";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-inter absolute top-10 right-0 left-0 z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 md:px-10">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={logo} alt="gPack" className="z-50" />
      </Link>

      <div className="hidden md:flex">
        <HeaderList />
      </div>

      <div className="hidden gap-5 md:flex">
        {headerSocialIcons?.map((icon, index) => (
          <Image
            className="cursor-pointer"
            src={icon}
            alt="social"
            key={index}
          />
        ))}
      </div>

      <button
        className="z-50 p-2 md:hidden"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {!isMenuOpen ? (
          <Image src={menuIcon} alt="Open menu" width={24} height={24} />
        ) : (
          <span className="text-4xl leading-none font-bold text-white">
            &times;
          </span>
        )}
      </button>

      {isMenuOpen && (
        <div className="bg-opacity-90 fixed inset-0 z-40 flex flex-col items-center justify-center bg-black md:hidden">
          <div className="flex flex-col items-center gap-8">
            <HeaderList />

            <div className="mt-8 flex gap-5">
              {headerSocialIcons?.map((icon, index) => (
                <Image
                  src={icon}
                  alt="social"
                  key={index}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
