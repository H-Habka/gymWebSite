import React from "react"
import CustomButton from "../CustomButton"
import StrokText from "../StrokText"

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row">
      <div className="order-2 md:order-none w-full md:w-9/12 md:pt-40 pt-8 ">
        <div className="flex flex-col gap-8 px-2 md:px-10 md:w-10/12 w-full items-center md:items-start ">
          <h1 className="text-5xl sm:text-6xl font-bold flex flex-col gap-4">
            <div style={{ boxShadow: "0 0 10000px 80px #f48915" }} />
            <p>
              <StrokText content="HASAN" />{" "}
              <span className="text-white">HABKA</span>
            </p>
            <p className="animate-pulse">
              <span className="text-white text-4xl uppercase">Design </span>{" "}
              <span className="text-white text-4xl uppercase">Engineer</span>{" "}
            </p>
          </h1>
          {/* <div className="z-1 relative bg-[#343434] p-3 w-fit rounded-full border-8 border-[#343434] before:absolute before:bg-two before:rounded-full before:w-4/12 before:h-full before:top-0 before:-z-1 hover:before:left-0 before:left-[66.66%] before:transition-all before:duration-1000 ">
            <p className="text-white sm:tracking-wider text-sm sm:text-base">
              Ships and Jewellery designer
            </p>
            
          </div> */}
          <p className="text-white tracking-widest  px-2 sm:px-20 md:px-0 max-w-md">
            I graduated from Tishreen University with a degree in Marine
            Engineering, achieving a graduation rate of 85.4%, which earned me
            the top position in my class. My dedication and excellence in my
            graduation project were recognized with an Appreciation Certificate
            from Mire Marine Shipping Company and Mobin Marine Design Technical
            Engineering.
          </p>

          {/* <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-4">
            <div className="flex gap-2 md:gap-6 flex-wrap md:flex-nowrap justify-center">
              <RectangleComponent number="+ 140" text="EXPERT COACHES" />
              <RectangleComponent number="+ 978" text="MEMBERS JOINED" />
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
          </div> */}
          <div className="mt-10">
            <CustomButton title="Get Started" />
            <CustomButton title="Learn More" reversed={true} />
          </div>
        </div>
      </div>
      <div className="mt-[80px] flex items-start justify-center md:w-3/12 bg-transparent md:bg-two relative md:h-auto z-1 ">
        <img
          loading="lazy"
          src={require("../../images/hero2.webp")}
          alt="hero2"
          className="absolute md:top-1/4 md:-left-1/2 h-4/6 -z-1 left-1/4  top-0 transition-all duration-1000"
        />
        <img
          loading="lazy"
          src={require("../../images/hasan-profile-image.png")}
          alt="hero1"
          className="animate-bounce-2 scale-105 md:absolute left-0  bottom-[50px] max-w-[320px] w-10/12 md:w-auto rounded-full"
          style={{
            boxShadow: "0px 12px 12px 5px rgba(0,0,0,.8)",
          }}
        />
      </div>
    </div>
  )
}

export default HeroSection
