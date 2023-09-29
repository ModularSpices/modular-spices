"use client";

import { textFont, titleFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoAnimated from "./LogoAnimated";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function getFontForPath(path, currentPath) {
    if (path === currentPath) {
      return titleFont.className;
    }
    return textFont.className;
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="fixed top-0 w-full flex z-10 justify-between items-start">
      <div className="xl:bg-[#F094F9] text-[#66205B] font-bold self-stretch">
        <div
          // className='hidden md:block cursor-pointer ml-2'
          className="cursor-pointer mx-2 mt-3 w-[90px] h-auto"
        >
          <Link href="/">
            <LogoAnimated
              className={pathname === "/newsletter" ? "text-white" : ""}
            />
          </Link>
        </div>
      </div>
      <button
        onClick={toggleMenu}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-5 w-20 h-12 -mr-2 mt-2 justify-center text-sm text-[#FF3F00] rounded-lg xl:hidden focus:outline-none"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-20 h-8"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            // strokeLinecap="round"
            // strokeLinejoin="round"
            strokeWidth="3.9
            "
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <ul
        className="uppercase flex-1 justify-evenly text-right text-6xl hidden xl:flex leading-[3.50rem]
"
      >
        <li className="bg-[#6A8B30] flex-1 pr-2 text-[#F094F9] py-1 lg:pl-20">
          <Link
            href="/mission"
            className={getFontForPath("/mission", pathname)}
          >
            Mission
          </Link>
        </li>
        <li className="bg-[#E5E5E0] flex-1 pr-2 text-[#2E47D2] pl-20 py-1">
          <Link
            href="/products"
            className={getFontForPath("/products", pathname)}
          >
            Products
          </Link>
        </li>
        <li className="bg-[#66205B] flex-1 pr-2 text-[#FF3F00] pl-6 py-1">
          <Link
            href="/newsletter"
            className={getFontForPath("/newsletter", pathname)}
          >
            Newsletter
          </Link>
        </li>
      </ul>

      <ul
        className={`fixed inset-0 top-[4rem]  right-0 backdrop-blur-md z-20 flex flex-col justify-start items-center text-3xl uppercase ${
          isOpen ? "block" : "hidden"
        } xl:hidden`}
      >
        <li className="bg-[#6A8B30] text-[#F094F9] py-1 w-full text-center">
          <Link
            href="/mission"
            className={getFontForPath("/mission", pathname)}
            onClick={closeMenu}
          >
            Mission
          </Link>
        </li>
        <li className="bg-[#E5E5E0] text-[#2E47D2] py-1 w-full text-center">
          <Link
            href="/products"
            className={getFontForPath("/products", pathname)}
            onClick={closeMenu}
          >
            Products
          </Link>
        </li>
        <li className="bg-[#66205B] text-[#FF3F00] py-1 w-full text-center">
          <Link
            href="/newsletter"
            className={getFontForPath("/newsletter", pathname)}
            onClick={closeMenu}
          >
            Newsletter
          </Link>
        </li>
      </ul>
    </div>
  );
}
