import React from "react";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function route() {
  return (
    <div class="relative h-[100vh] w-[100vw] bg-slate-950">
      <div className="flex h-full w-full justify-center">
        <h1
          className={
            rajdhani.className + " text-white text-5xl font-bold mt-[8rem]"
          }
        >
          About <span className="text-[#24a556]">Us</span>
        </h1>
      </div>

      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}

export default route;
