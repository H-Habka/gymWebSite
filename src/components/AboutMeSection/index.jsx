import React from "react"
import TextSplitter from "../TextSpletter"

const AboutMe = () => {
  return (
    <div className="md:px-[10vw] min-h-screen flex flex-col justify-center">
      <div className="relative justify-center flex mt-10">
        <div className="pointer-events-none text-[7em] flex items-center gap-6 justify-center font-[900] text-white">
          {/* <StrokText content="ABOUT" />
          <span className="text-white">ME</span> */}
          <TextSplitter strokeWordsArray={[0]} text="ABOUT ME" />
        </div>
        <div className="absolute bottom-0 mix-blend-darken  w-full h-1/2 bg-orange-300"></div>
      </div>
      <div
        data-aos="fade-up"
        className="py-20 flex flex-col  md:flex-row gap-6 justify-around  bg-[#12121222] p-8 rounded-xl"
      >
        <div className="text-6xl md:max-w-[40vw] flex gap-2 text-four">
          <TextSplitter
            strokeWordsArray={[0]}
            text="Hi, I'm Yacht and Jewellery designer"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="700"
          className="md:max-w-[40vw] text-white text-lg "
        >
          I graduated from Tishreen University with a degree in Marine
          Engineering, achieving a graduation rate of 85.4%, which earned me the
          top position in my class. My dedication and excellence in my
          graduation project were recognized with an Appreciation Certificate
          from Mire Marine Shipping Company and Mobin Marine Design Technical
          Engineering.
        </div>
      </div>
    </div>
  )
}

export default AboutMe
