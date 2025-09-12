"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { BackgroundBeams } from "./ui/background-beams";
export default function connect() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "websites",
    },
    {
      text: "with",
    },
    {
      text: "Sigmoit.",
      className: "text-[#24a556] dark:text-[#24a556]",
    },
  ];
  return (
    <div className="h-[15rem] lg:h-[25rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center mt-15 antialiased">
      <p className="text-gray-300 dark:text-neutral-200 text-xs sm:text-base">
        Your road to digilitization starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <button className="w-40 h-10 rounded-xl  text-white border-1 border-white  text-sm">
        Connect
      </button>
      <BackgroundBeams />
    </div>
  );
}
