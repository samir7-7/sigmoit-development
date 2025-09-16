"use client";

import { Carousel } from "./ui/carousel";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export function Projects() {
  const slideData = [
    {
      title: "E-Commerce Platform",
      button: "Explore Component",
      src: "/project-images/ecommerce.png",
    },
    {
      title: "Rising Diamond",
      button: "Explore Component",
      src: "/project-images/Rising Diamond.jpg",
    },
    {
      title: "Food Delivery App",
      button: "Explore Component",
      src: "/project-images/fooddelivary.png",
    },
    {
      title: "My Personal Tutors",
      button: "Explore Component",
      src: "/project-images/my-personal-tutors.png",
    },
    {
      title: "Terminal Portfolio",
      button: "Explore Component",
      src: "/project-images/terminalwebsite.png",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] flex flex-col gap-10 items-center">
      <h1
        className={
          rajdhani.className + " text-5xl font-extrabold mb-10 text-gray-800"
        }
      >
        Our <span className="text-[#24a556]">Projects</span>
      </h1>
      <Carousel slides={slideData} />
    </div>
  );
}
