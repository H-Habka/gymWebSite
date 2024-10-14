import React from "react"
import CustomButton from "../CustomButton"
import StrokText from "../StrokText"
import { LazyLoadImage } from "react-lazy-load-image-component"

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row h-screen relative">
      <div
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }}
        className="hover:scale-110 transition-all duration-500 opacity-30 hover:opacity-100 cursor-pointer  absolute left-1/2 bottom-3 w-8 h-16 rounded-full border-2 flex border-gray-400 -translate-x-1/2 group"
      >
        <div className="transition-all duration-700 flex items-center group-hover:translate-y-7 justify-center w-8 h-8 rounded-full bg-gray-700">
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="order-2 md:order-none w-full md:w-9/12 md:pt-40 pt-8 ">
        <div className="flex flex-col gap-2 px-2 md:px-10 md:w-10/12 w-full items-center md:items-start ">
          <h1 className=" font-bold flex flex-col gap-4 my-[50px]">
            <div style={{ boxShadow: "0 0 1000000px 60px #f48915" }} />
            <p className="text-[80px]">
              <StrokText content="HASAN" />{" "}
              <span className="text-white">HABKA</span>
            </p>
            <p className="animate-pulse mt-6">
              <span className="text-white text-5xl uppercase">Naval </span>{" "}
              <span className="text-white text-5xl uppercase">
                Architecture
              </span>{" "}
            </p>
          </h1>
          <a href="#getInTouch">
            <CustomButton title="Get in touch" reversed />
          </a>
        </div>
      </div>
      <div className="mt-[80px] flex items-start justify-center md:w-3/12 bg-transparent md:bg-two relative md:h-auto z-1 ">
        <LazyLoadImage
          loading="lazy"
          src="/images/hero2.webp"
          alt="hero2"
          className="absolute md:top-1/4 md:-left-1/2 h-4/6 -z-1 left-1/4  top-0 transition-all duration-1000"
        />
        <LazyLoadImage
          loading="lazy"
          src="/images/hasan-profile-image.png"
          alt="hero1"
          className="min-h-[300px] animate-bounce-2 scale-105 md:absolute left-0  bottom-[50px] max-w-[320px] w-10/12 md:w-auto rounded-full"
          style={{
            boxShadow: "0px 12px 12px 5px rgba(0,0,0,.8)",
          }}
        />
      </div>
    </div>
  )
}

export default HeroSection
