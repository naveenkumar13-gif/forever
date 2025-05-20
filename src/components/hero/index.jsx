import React from "react";
import { assets } from "../../assets/assets";

function Hero() {
  return (
    <div className="flex  gap-4 max-sm:gap-2 border border-gray-400 max-sm:flex-col mt-5">
      <div className="w-1/2 flex items-center justify-center py-10 max-sm:py-5 max-sm:w-full ">
        <div className="text-[#4141414]">
          <div className="flex items-center gap-2">
            <p className="w-12 bg-[#414141] h-[3px] max-sm:w-8"></p>
            <p className="font-medium ">OUR BESTELLER</p>
          </div>
          <h1 className="text-6xl leading-relaxed prata-regular max-sm:text-3xl max-sm:leading-10">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold "> SHOP NOW</p>
            <p className="w-12 bg-[#414141] h-[3px] max-sm:w-8"></p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-1/2 max-sm:w-full ">
        <img src={assets.hero_img} className="w-full h-full" alt="" />
      </div>
    </div>
  );
}

export default Hero;
