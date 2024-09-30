import React from "react"
import TextSplitter from "../TextSpletter"
import WorkCard from "./workCard"

const LatestWork = () => {
  return (
    <div className="px-[10vw] ">
      <div className="bg-[#12121222] relative  rounded-xl px-10  flex flex-col justify-center">
        <div className="sticky -top-2">
          <div className="relative justify-center flex">
            <div className="text-[7em] flex items-center gap-6 justify-center font-[900] text-white  top-[100px]">
              <TextSplitter strokeWordsArray={[1]} text="LATEST WORK" />
            </div>
          </div>
        </div>
        <div className="sticky top-[30px] left-0 z-1 w-full h-[50px]  mix-blend-darken bg-orange-300"></div>
        <div data-aos="fade-up" className="flex flex-col gap-8 z-20 pb-8  px-8">
          <WorkCard title="floting doc">1</WorkCard>
          <WorkCard>2</WorkCard>
        </div>
      </div>
    </div>
  )
}

export default LatestWork
