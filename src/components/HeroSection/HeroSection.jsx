import React from "react"
import RectangleComponent from "./RectangleComponent"
import CustomButton from "../CustomButton"
import StrokText from "../StrokText"

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row">
      <div className="w-full md:w-9/12 pt-40 ">
        <div className="flex flex-col gap-8 px-2 md:px-10 md:w-10/12 w-full items-center md:items-start ">
          <div
            data-aos="fade-right"
            className="z-1 relative bg-[#343434] p-3 w-fit rounded-full border-8 border-[#343434] before:absolute before:bg-two before:rounded-full before:w-4/12 before:h-full before:top-0 before:-z-1 hover:before:left-0 before:left-[66.66%] before:transition-all before:duration-1000 "
          >
            <p className="text-white sm:tracking-wider text-sm sm:text-base">
              THE BEST COACH IN THE TOWN
            </p>
          </div>
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-5xl sm:text-6xl font-bold flex flex-col gap-4"
          >
            <div style={{ boxShadow: "0 0 10000px 80px #f48915" }} />
            <p>
              <StrokText content="SHAPE" />{" "}
              <span className="text-white">YOUR</span>
            </p>
            <p className="text-white"> IDEAL BODY</p>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-white tracking-widest text-center px-2 sm:px-20 md:px-0 md:text-start"
          >
            In here I will help you to shape and build your ideal body and live
            up your life to fullest
          </p>

          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-4"
          >
            <div className="flex gap-2 md:gap-6 flex-wrap md:flex-nowrap justify-center">
              {/* <RectangleComponent
                                number="+ 140"
                                text="EXPERT COACHES"
                            /> */}
              <RectangleComponent number="+ 500" text="MEMBERS JOINED" />
              <RectangleComponent number="+ 30" text="FITNESS PROGRAMS" />
            </div>
            <div className="flex gap-4 items-center bg-gray-500 md:w-fit px-4 py-2 rounded-xl justify-center w-11/12">
              <img
                loading="lazy"
                src={require("../../images/bars.webp")}
                alt="bars"
                className="h-20"
              />
              <div className="flex flex-col gap-2 ">
                <p className="text-gray-400">Calories burned</p>
                <p className=" text-white ">220 kcal</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="400">
            <a
              href="https://api.whatsapp.com/send?phone=971565561153"
              target="_blank"
              rel="noreferrer"
            >
              <CustomButton title="Get Started" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=971565561153"
              target="_blank"
              rel="noreferrer"
            >
              <CustomButton title="Reach Me Out" reversed={true} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center md:w-3/12 bg-transparent md:bg-two relative h-screen md:h-auto z-1 ">
        <div className="w-fit flex flex-col gap-4 md:bg-one p-4 rounded-xl absolute md:right-10 md:top-32 top-4 right-6 bg-[#343434aa]">
          <img
            loading="lazy"
            src={require("../../images/heart.webp")}
            alt="heart"
            className="w-1/3"
          />
          <p className="text-gray-400">Heart Rate</p>
          <p className="text-white text-2xl">116 bpm</p>
        </div>
        <img
          loading="lazy"
          src={require("../../images/hero2.webp")}
          alt="hero2"
          className="absolute md:top-1/4 md:-left-1/2 h-4/6 -z-1 left-1/4  top-0 transition-all duration-1000"
        />
        <img
          loading="lazy"
          src={require("../../images/hero3.webp")}
          alt="hero1"
          className="absolute md:left-0 md:-translate-x-1/2 md:bottom-2 bottom-[200px] -translate-x-1/2 left-1/2 max-w-[480px] w-10/12 md:w-auto"
        />
      </div>
    </div>
  )
}

export default HeroSection
