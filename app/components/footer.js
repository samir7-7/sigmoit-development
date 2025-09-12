import React from "react";
import Stars from "./ui/stars";
import ShootingStars from "./ui/sooting-stars";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function footer() {
  return (
    <footer
      className={
        rajdhani.className +
        " bg-[#24a556] h-fit relative w-full bottom flex flex-col justify-between items-center"
      }
    >
      <div className="footer-container w-[90%] text-white flex flex-col lg:flex-row justify-between items-center gap-10 p-2 lg:p-10">
        <div className="left-footer flex flex-col gap-5 w-[90%] lg:w-[40%]">
          <Image
            src="/logo-white.png"
            alt="Sigmoit Logo"
            width={200}
            height={70}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            vel iste sapiente quidem aut placeat quo porro nisi, asperiores,
            dicta illo harum totam? Voluptatem provident aspernatur repudiandae
            cum suscipit aliquam adipisci sint laudantium corrupti vel?
          </p>
        </div>
        <div className="right-footer flex flex-row lg:flex-col  gap-7">
          <div className="footer-links">
            <ul className="flex flex-col lg:flex-row gap-10">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social-links flex flex-col lg:flex-row gap-5 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="copyright w-full text-white text-center p-5 backdrop-blur-md bg-white/30 shadow-lg">
        © 2025 Sigmoit. All rights reserved.
      </div>
      <Stars />
      <ShootingStars />
    </footer>
  );
}

export default footer;
