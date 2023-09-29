"use client";
import Image from "next/image";
import Animation from "./components/Animation";

export default function Home() {
  document.body.style.backgroundColor = "#F095F9";

  return (
    <div className=" bg-[#F095F9] h-full flex justify-center items-center">
      <div className="relative mt-10">
        <div className="scale-[83%]">
          <Image
            className="w-full h-full object-contain p-2 pt-14"
            src="/assets/images/logoText.svg"
            height="350"
            width="350"
            alt="Product mockup"
          />
        </div>
        <div className="absolute -bottom-[20px] sm:-bottom-10  md:-bottom-[60px]  lg:-bottom-24 scale-[99%] mx-auto left-0 right-0">
          <Animation />
        </div>
      </div>
    </div>
  );
}
