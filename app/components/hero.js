import React from "react";
import Image from "next/image";
import { Cover } from "./ui/cover";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function hero() {
  return (
    <main className="w-[100vw] h-[100vh]">
      {/* <Image
        src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg"
        alt="Hero image"
        className="w-[100vw] h-[100vh]"
        width={1000}
        height={400}
      /> */}
      <div
        className="h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg')",
        }}
      >
        <div className="left-hero bg-black w-[80%] h-full rounded-tr-4xl rounded-br-4xl opacity-90 flex justify-center items-center text-white lg:w-[60%]">
          <h1
            className={
              rajdhani.className +
              " text-4xl font-extrabold ml-8  lg:ml-0 lg:text-7xl"
            }
          >
            Let&apos;s Make{" "}
            <span className="text-[#24a556] lg:text-7xl">{"{ }"}</span>
            <br /> Softwares with <Cover>Sigmoit</Cover> !
          </h1>
        </div>
      </div>
    </main>
  );
}

export default hero;
