"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { Rajdhani } from "next/font/google";
import Image from "next/image";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function About() {
  return (
    <div
      className={
        rajdhani.className +
        " about w-[100vw] h-fit py-10 flex mt-10 flex-col justify-center items-center justify-self-center bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] px-10"
      }
    >
      <h1
        className={
          rajdhani.className + " text-5xl font-extrabold mb-10 text-gray-800"
        }
      >
        Our <span className="text-[#24a556]">Services</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-violet-900 min-h-[400px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              We provide softwares for business and organizations
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              We also provide HRM solutions tailored for schools — making it
              easier to manage teachers 👩‍🏫, staff 👨‍💼, attendance 📋, and payroll
              💰 all in one place.
            </p>
          </div>
          <Image
            src="/hrm.png"
            width={400}
            height={400}
            alt="linear demo image"
            className="absolute -right-20 lg:-right-[20%] grayscale filter -bottom-50 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            We provide skill oriented courses
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            We provide skill-oriented courses 🎯 to help students &
            professionals grow 🚀
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              We build custom website for your business
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              We create custom websites 🛠️ designed specifically for your
              business, helping you stand out ✨, reach more customers 👥, and
              grow 🚀.
            </p>
          </div>
          <Image
            src="/webs.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-15 md:-right-[40%] lg:-right-[10%] -bottom-7 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
