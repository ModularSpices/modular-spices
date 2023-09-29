"use client";
import { titleFont } from "@/utils/fonts";

export default function Mission() {
  document.body.style.backgroundColor = "#6A8B30";
  return (
    <div className="bg-[#6A8B30] min-h-screen">
      <section className="flex flex-col items-center justify-center mx-8 relative">
        <div className="text-[#E5E5E0] order-2 sm:order-1 columns-1 md:columns-2 sm:leading-none leading-[1.2rem] text-xl sm:text-3xl sm:mt-2 ">
          <p>
            Our mission at Modular Spices is to be your premier destination for
            exceptional spices and sustainable food solutions. We are committed
            to sourcing the finest quality ingredients from around the world,
            all while upholding the highest standards of environmen- tal and
            social responsibility.
          </p>
          <p className="mt-6">
            Our goal is to empower you to elevate your culi- nary experience
            with our handpicked spices and eco-friendly products. We envision a
            future where we offer a comprehensive collection of sustainable food
            solutions, designed to reduce waste and mini- mize your carbon
            footprint. By doing so, we aim to promote a greener and healthier
            lifestyle.
          </p>
          <p>
            Modular Spices was founded on a profound love for food and spices,
            cultivated through years of experi- ence in diverse European
            kitchens. Our dream is to revolutionize the way people engage with
            food by providing creative, sustainable, and healthier options.
          </p>
          <p className="mt-6">
            We invite you to join us in our journey towards sus- tainable
            living. You not only enrich your culinary ad- ventures but also
            contribute to the preservation of our planet.
          </p>
        </div>
        <h1
          className={`text-4xl order-1 sm:order-2 font-bold text-[#F2AAFA] ${titleFont.className} leading-[0.85] uppercase text-center mb-6 sm:text-[86px] sm:leading-[80px] md:text-[100px] md:leading-[90px] lg:text-[120px] lg:leading-[110px] xl:text-[180px] xl:leading-[153px] sm:mt-20 -mb-26`}
        >
          Our <br />
          Mission
        </h1>
      </section>
    </div>
  );
}
