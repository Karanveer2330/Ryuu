

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 pt-24 bg-gradient-to-l from-[rgb(210,180,140)] to-[rgb(128,0,32)]">

      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          INTRODUCING <span className="text-[rgb(210,180,140)]">RYUU</span><span className="text-[rgb(128,0,32)]">COLLECTIONS</span>
        </h2>
        <div>
          <p className="text-[rgb(210,180,140)] text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
             Look out for the trending fashion.
          </p>
          <p className="text-[rgb(210,180,140)] text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
          Detailed size guides with model measurements for accurate fit.
          </p>
          <Link href="/shop" className="block text-[rgb(128,0,32)] bg-white font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
