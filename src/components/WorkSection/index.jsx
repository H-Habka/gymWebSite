import React from "react"
import TextSplitter from "../TextSpletter"
import WorkCard from "./workCard"

const projects = [
  {
    title: "Dockwise",
    name: "dockwise",
    CardContent: (
      <div className="flex">
        <img
          className="lg:w-1/2 "
          src="https://i.imgur.com/kNKyprI.jpeg"
          alt="dockwise"
        />
        <img
          className="lg:inline hidden w-1/2 h-1/2"
          src="https://i.imgur.com/8LZ7Wc1.jpeg"
          alt="dockwise"
        />
      </div>
    ),
  },
  {
    title: "Dry Dock",
    name: "dryDock",
    CardContent: (
      <div className="flex">
        <img
          className="lg:w-[61%]"
          src="https://i.imgur.com/HV5ckqw.jpeg"
          alt="dockwise"
        />
        <img
          className="lg:inline hidden w-[39%]"
          src="https://i.imgur.com/9LADgPW.jpeg"
          alt="dockwise"
        />
      </div>
    ),
  },
]

const WorkSection = ({ title, isSticky, cardToHide }) => {
  return (
    <div className="px-[10vw] ">
      <div className="bg-[#12121222] relative  rounded-xl px-10  flex flex-col justify-center">
        <div className={isSticky ? "sticky -top-2" : ""}>
          <div className="relative justify-center flex">
            <div className="text-[7em] flex items-center gap-6 justify-center font-[900] text-white  top-[100px]">
              <TextSplitter strokeWordsArray={[1]} text={title} />
            </div>
          </div>
        </div>
        <div
          className={`${
            isSticky ? "sticky top-[30px] " : "absolute top-10"
          }  left-0 z-1 w-full h-[50px]  mix-blend-darken  bg-orange-300`}
        ></div>
        <div data-aos="fade-up" className="flex flex-col gap-8 z-20 pb-8  px-8">
          {projects.map((project) => {
            return (
              project.name !== cardToHide && (
                <WorkCard
                  isSticky={isSticky}
                  to={`/projects/${project.name}`}
                  title={project.title}
                  key={project.name}
                >
                  {project.CardContent}
                </WorkCard>
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkSection
