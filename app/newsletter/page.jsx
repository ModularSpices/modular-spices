"use client";
import { titleFont } from "@/utils/fonts";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
titleFont;

export default function Newsletter() {
  if (typeof window !== "undefined") {
    document.body.style.backgroundColor = "#66205B";
  }

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const updateOpacity = () => {
      if (ref.current) {
        const yOffset = window.pageYOffset;
        const sectionHeight = ref.current.offsetHeight;
        const scrollYProgress = yOffset / sectionHeight;
        controls.start({ opacity: 1 - scrollYProgress });
      }
    };

    window.addEventListener("scroll", updateOpacity);
    return () => window.removeEventListener("scroll", updateOpacity);
  }, [controls]);

  return (
    <div className="bg-[#66205B] min-h-screen">
      <section className="flex flex-col items-center justify-center mx-8 -mt-[3rem] md:mt-0">
        <div>
          <Image
            className="hidden sm:block drop-shadow-[0_8px_8px_#684929] w-full h-full object-cover lg:mt-[2rem]"
            src="/assets/images/photo.png"
            height="3000"
            width="3000"
            alt="Product mockup"
          />
          <Image
            className="sm:hidden drop-shadow-[0_8px_8px_#684929] w-full h-full object-cover"
            src="/assets/images/photo4.png"
            height="3000"
            width="3000"
            alt="Product mockup"
          />
        </div>
        <div className="relative">
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[160px] font-bold text-[#EB5027]  leading-[2.5rem] sm:leading-[3rem] md:leading-[3.5rem] lg:leading-[5rem] xl:leading-[8.4rem] uppercase text-center ${titleFont.className} text-center`}
          >
            Discover more?
          </h1>
          <motion.img
            src="/assets/images/arrows-02.png"
            alt="Product mockup"
            initial={{ opacity: 1 }}
            animate={controls}
            transition={{ duration: 0 }}
            className="absolute -bottom-9 sm:-bottom-5 scale-[70%] sm:scale-100 m-auto left-0 right-0"
            width="60"
            height="60"
          />
        </div>
      </section>
      <main className="mx-8 h-[100vh]" ref={ref}>
        <div className="columns-1 md:columns-2 text-[#E5E5E0] mt-4 leading-[1.2rem] sm:leading-[1.3rem] sm:mt-2 text-xl sm:text-2xl pb-10">
          <p className="">
            {`At Modular Spices, we're all about elevating your culinary
            experience. Our newsletter is your gateway to a world of flavor,
            creativity, and culinary adventure. Join us as we share innovative
            recipes, insider tips, and cooking hacks that will transform your
            meals into gourmet masterpieces. Whether you're a kitch- en newbie
            or a seasoned chef, come spice up your life with us. Subscribe now
            to receive our updates filled with flavor-packed inspiration.`}
          </p>
          <span className="text-[#E5E5E0] mt-8 inline-block text-right w-full">
            <Link
              href="https://modularspices.beehiiv.com/subscribe"
              className={`text-xl leading-[20px] sm:text-3xl md:text-3xl lowercase font-bold ${titleFont.className} bg-[#6A8B30] px-1`}
            >
              Sign up
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
}
