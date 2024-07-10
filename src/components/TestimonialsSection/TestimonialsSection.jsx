import React, { useState } from "react"
import StrokText from "../StrokText"
import CustomButton from "../CustomButton"
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs"

const caro = [
  {
    id: 1,
    image: "TESTIMONIALS1.webp",
    text: `From a scrawny beginner to a muscle-bound powerhouse, our coaching program has been a transformative journey for me. The results speak for themselves!. I never thought I could achieve this level of strength.`,
    poster: "Yousef",
    role: "",
  },
  {
    id: 2,
    image: "TESTIMONIALS2.jpg",
    text: "Our coach’s expertise and personalized guidance have been invaluable. I’ve learned proper form, nutrition, and discipline, His impact goes beyond physical fitness; he’s positively transformed my lifestyle.",
    poster: "Omar",
    role: "",
  },
  {
    id: 3,
    image: "TESTIMONIALS3.jpg",
    text: "My coach knows how to make workouts enjoyable. I’ve become addicted to fitness thanks to their approach, My coach knows how to make workouts enjoyable. I’ve become addicted to fitness thanks to their approach.",
    poster: "Mohammad",
    role: "",
  },
]

const TestimonialsSection = () => {
  const totlaImages = caro.length
  const [currentImage, setCurrentImage] = useState(0)
  const nextImage = () => {
    setCurrentImage((prev) => (prev === totlaImages - 1 ? 0 : prev + 1))
  }
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? totlaImages - 1 : prev - 1))
  }
  return (
    <div id="testimonials" className="flex flex-col gap-20 my-10">
      <div className="flex w-11/12 lg:w-8/12 mx-auto justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-8 w-[320px] md:w-full">
          <div className="flex flex-col gap-4">
            <p className="tracking-wider text-two font-bold">TESTIMONIALS</p>
            <div className="text-white text-4xl xs:text-2xl xl:text-6xl lg:text-4xl md:text-3xl italic flex flex-col gap-4 font-bold">
              <StrokText content="WHAT THEY" />
              <p>SAY ABOUT US</p>
            </div>
          </div>
          <div className="relative leading-10 tracking-wider md:w-11/12  min-h-[290px] ">
            {caro.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`${
                    idx === currentImage
                      ? "opacity-100"
                      : "opacity-0 -translate-x-1/4"
                  } absolute w-full h-full transition-all duration-1000 ease-in-out`}
                >
                  {idx === currentImage && (
                    <div key={item.id}>
                      <p className="text-white font-semibold ">{item.text}</p>
                      <p>
                        <span className="text-two">{item.poster}</span>{" "}
                        <span className="text-white font-bold">
                          {item.role ? `- ${item.role}` : ""}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mr-4 md:mr-0 mt-10 md:mt-0 relative w-[345px] h-[400px] before:absolute before:w-full before:h-full before:top-8 before:left-8 before:bg-two border before:-z-10 z-10">
            <div className="flex gap-10 p-2 absolute md:bottom-0 md:translate-y-1/2 md:left-0 md:-translate-x-full bottom-full ">
              <button
                onClick={nextImage}
                className="bg-white rounded-full text-two hover:text-white hover:bg-two transition-all duration-500"
              >
                <BsFillArrowLeftCircleFill size={32} />
              </button>
              <button
                onClick={prevImage}
                className="bg-white rounded-full text-two hover:text-white hover:bg-two transition-all duration-500"
              >
                <BsFillArrowRightCircleFill size={32} />
              </button>
            </div>
            {caro.map((item, idx) => {
              const imageURL = require("../../images/" + item.image)
              return (
                <div
                  key={idx}
                  className={`${
                    idx === currentImage
                      ? "opacity-100"
                      : "opacity-0 translate-x-1/2"
                  } absolute left-4 top-4 w-full h-full transition-all duration-1000 ease-in-out`}
                >
                  {idx === currentImage && (
                    <img
                      src={imageURL}
                      alt="poster"
                      className="h-full w-full"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full px-10 md:justify-between items-center ">
        <div className=" relative flex text-white flex-col gap-2 text-2xl md:text-4xl before:absolute before:-top-4 before:rounded-1/2 before:bg-two md:before:left-0 before:h-2 before:w-40 font-bold before:left-1/2 before:-translate-x-1/2 md:before:translate-x-0">
          <p>
            <StrokText content="READY TO" /> <span>LEVEL UP</span>
          </p>
          <p>
            <span>YOUR BODY</span> <StrokText content="WITH US?" />
          </p>
        </div>
        <div className="py-2 bg-gray-400 flex gap-1 flex-col xs:flex-row xs:py-2">
          <input
            placeholder="Enter Your Email Address Here"
            className="outline-none text-lg text-white w-64 bg-transparent px-2 placeholder:text-white"
          />
          <CustomButton title="Join Now" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
