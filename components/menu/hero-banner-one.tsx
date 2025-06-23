import Image from "next/image";
import React from "react";

const HeroBannerOne = () => {
  return (
    <section className="relative h-[500px] w-full">
      {/* Background image */}
      <Image
        fill
        src="/banner.jpg" // replace with your actual image path
        alt="Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#7f1d1d]/60" />

      {/* Centered Text */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <h1 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          Committing To Excellence, <br className="hidden sm:block" />
          Delivering Better & More
        </h1>
      </div>
    </section>
  );
};

export default HeroBannerOne;
