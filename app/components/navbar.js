"use client";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { Rajdhani } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[90vw] rounded-xl fixed bg-white px-6 py-5 justify-self-center mt-6 shadow-lg z-[9999]">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <div className="logo">
            <Image
              src="/sigmoit-logo.svg"
              alt="Sigmoit logo"
              width={150}
              height={50}
            />
          </div>
        </Link>

        {/* Links - hidden on mobile */}
        <div className={`${rajdhani.className} hidden md:block`}>
          <ul className="flex gap-10 text-xl">
            <Link href={"/"}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href={"/#services"}>
              <li className="cursor-pointer">Services</li>
            </Link>

            <Link href={"/about"}>
              <li className="cursor-pointer">About</li>
            </Link>
            <Link href={"/contact"}>
              <li className="cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>

        {/* Search Icon */}
        <div className="hidden md:flex items-center">
          <FaSearch className="text-black text-2xl cursor-pointer" />
        </div>

        {/* Hamburger - shows only on mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`${rajdhani.className} mt-4 md:hidden`}>
          <ul className="flex flex-col gap-4 text-lg">
            <Link href={"/"}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href={"/#services"}>
              <li className="cursor-pointer">Services</li>
            </Link>

            <Link href={"/about"}>
              <li className="cursor-pointer">About</li>
            </Link>

            <li className="cursor-pointer">Contact</li>
            <li>
              <FaSearch className="text-black text-xl cursor-pointer mt-2" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
