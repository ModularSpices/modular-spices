"use client";

import { titleFont } from "@/utils/fonts";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import ReactCurvedText from "react-curved-text";

export default function Products() {
  if (typeof window !== "undefined") {
    document.body.style.backgroundColor = "#E5E5E0";
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
    <div className="bg-[#E5E5E0] text-[#66205B] min-h-screen">
      <section className="flex flex-col items-center justify-center mx-8 relative">
        <div className="lg:relative lg:mt-[4rem]">
          <Image
            className="drop-shadow-[0_15px_15px_rgba(0,0,0,0.7)] scale-[80%] sm:scale-100"
            src="/assets/images/mockup.png"
            height="500"
            width="500"
            alt="Product mockup"
          />
          <div
            className={`${titleFont.className} uppercase absolute top-6 lg:-top-6 -left-[48%] lg:left-0 m-0 lg:-ml-20 scale-[52%] sm:scale-100`}
          >
            <ReactCurvedText
              width={630}
              height={630}
              cx={315}
              cy={315}
              rx={267.3}
              ry={267.3}
              startOffset={0}
              reversed={true}
              text={
                "Smokey Sensation" +
                "\u00A0".repeat(5) +
                "Smokey Sensation" +
                "\u00A0".repeat(5) +
                "Smokey Sensation" +
                "\u00A0".repeat(5)
              }
              textProps={{
                style: { fontSize: "36px" },
              }}
              textPathProps={{ fill: "#F094F9" }}
              tspanProps={null}
              ellipseProps={null}
              svgProps={{ className: "rotating-curved-text" }}
            />
          </div>
        </div>
        <div className="relative">
          <h1
            className={`text-4xl leading-[2rem] sm:text-7xl md:text-8xl md:leading-[5rem] xl:text-[160px] xl:leading-[8.4rem] font-bold text-[#2E47D2] uppercase text-center ${titleFont.className}`}
          >
            Smokey <br />
            Sensation
          </h1>
          <motion.img
            src="/assets/images/arrows-01.png"
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
      <main className="mx-8 h-auto" ref={ref}>
        <h2
          className={`text-xl leading-[20px] sm:text-3xl md:text-4xl lg:text-6xl font-bold ${titleFont.className} text-center`}
        >
          Unveiling the Culinary Realm:
        </h2>
        <h2 className="text-xl leading-[20px] mt-2 md:mt-0 sm:text-3xl md:text-4xl lg:text-6xl font-normal text-center mb-2">
          A Journey Through Distinctive Modular Spice Blends
        </h2>
        <div className="columns-1 md:columns-3 mt-4 sm:mt-2 leading-[1.2rem] sm:leading-[1.3rem] text-xl sm:text-2xl pb-10">
          <p>
            Our mission at Modular Spices is to be your premier destination for
            exceptional spices and sustainable food solutions. We are committed
            to sourcing the finest quality ingredients from around the world,
            all while upholding the highest standards of environmen- tal and
            social responsibility.
          </p>
          <p className="mt-4">
            Our goal is to empower you to elevate your culi- nary experience
            with our handpicked spices and eco-friendly products. We envision a
            future where we offer a comprehensive collection of sustainable food
            solutions, designed to reduce waste and mini- mize your carbon
            footprint. By doing so, we aim to promote a greener and healthier
            lifestyle.
          </p>
          <p className="mt-4">
            Modular Spices was founded on a profound love for food and spices,
            cultivated through years of experi- ence in diverse European
            kitchens. Our dream is to revolutionize the way people engage with
            food by providing creative, sustainable, and healthier options.
          </p>
          <p className="mt-4">
            We invite you to join us in our journey towards sus- tainable
            living. You not only enrich your culinary ad- ventures but also
            contribute to the preservation of our planet.
          </p>
          <span className="text-[#F094F9] mt-8 inline-block text-right w-full">
            <Link
              href="https://checkout.stripe.com/c/pay/cs_live_a1Onxh5wIiXfuAepyy3JhEMcz0NNRWMT960LUenLFi9QrMoJNmJPX5APy2#fidkdWxOYHwnPyd1blppbHNgWjA0SHNXVGpCSFdNSElAYnBKNUdDNl19cVVXU3FvaFVmUDY8MjFKT0pXZktsYU5tNDZsdV1dcW5hQ2hOM0duRE1GamlHd2d%2FdnF1cmFWd31oY0xRfGo9f0xENTVrR25jNH9sSScpJ3VpbGtuQH11anZgYUxhJz8nNz1qMG5PMUxVMlFoZDVAZkhVJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnJycitoamFwaWR3dnVsZmB2K2ZqaConeCUl"
              className={`text-xl leading-[20px] sm:text-3xl md:text-3xl font-bold ${titleFont.className} bg-[#2E47D2] px-1`}
            >
              Order here
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
}
