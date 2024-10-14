import React from "react"
import PhotoGallery from "../photoGallery"
import TextSplitter from "../../../TextSpletter"
import Tags from "../../Tags"

const renderedImages = [
  {
    original: "https://i.imgur.com/HV5ckqw.jpeg",
    thumbnail: "https://i.imgur.com/HV5ckqw.jpeg",
  },
  {
    original: "https://i.imgur.com/9LADgPW.jpeg",
    thumbnail: "https://i.imgur.com/9LADgPW.jpeg",
  },
  {
    original: "https://i.imgur.com/HeeTwue.jpeg",
    thumbnail: "https://i.imgur.com/HeeTwue.jpeg",
  },
  {
    original: "https://i.imgur.com/DjJJiGv.jpeg",
    thumbnail: "https://i.imgur.com/DjJJiGv.jpeg",
  },
]
const structurImages = [
  {
    original: "https://i.imgur.com/0he3NpU.jpeg",
    thumbnail: "https://i.imgur.com/0he3NpU.jpeg",
  },
  {
    original: "https://i.imgur.com/Nlj6oZI.jpeg",
    thumbnail: "https://i.imgur.com/Nlj6oZI.jpeg",
  },
  {
    original: "https://i.imgur.com/qKuQcBU.jpeg",
    thumbnail: "https://i.imgur.com/qKuQcBU.jpeg",
  },

  {
    original: "https://i.imgur.com/3aILDdM.jpeg",
    thumbnail: "https://i.imgur.com/3aILDdM.jpeg",
  },
  {
    original: "https://i.imgur.com/TuCBWN0.jpeg",
    thumbnail: "https://i.imgur.com/TuCBWN0.jpeg",
  },
]

const Dockwise = () => {
  return (
    <div className=" md:px-[10vw] pt-10 min-h-screen flex flex-col justify-center">
      <div className="bg-[#23232388] text-white rounded-md px-8 py-10">
        <div className=" max-w-[50%]">
          <div className="flex items-center justify-between">
            <div className="text-[100px] font-bold">
              <TextSplitter text="Dry Dock" />
            </div>
          </div>
          <p
            className="text-[20px]"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            This project aims to design a floating basin capable of withstanding
            operational loads and environmental conditions. The basin will be a
            stable and secure platform for various maritime applications, such
            as docking, ship repair, or temporary storage. The design will
            consider hydrodynamic behavior, stability, structural integrity, and
            aesthetic appeal.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="800"
            className="mt-4 text-[20px]"
          >
            Study of Design and Analysis Programs: To achieve these objectives,
            we will employ two powerful software tools: Maxsurf and Rhinoceros.
          </p>
          <div className="mt-8">
            <Tags keywords={["Rhinoceros", "Maxsurf", "3D model", "autocad"]} />
          </div>
        </div>
        <div className="mt-20">
          <div className="mb-6 text-white  text-[80px] flex justify-center">
            <TextSplitter strokeWordsArray={[0]} text="RENDERED MODEL" />
          </div>
          <PhotoGallery images={renderedImages} />
        </div>
      </div>
      <div className="mt-20">
        <div className="mb-6 text-[80px] text-white flex justify-center">
          <TextSplitter strokeWordsArray={[1]} text="GENERAL ARRANGEMENT" />
        </div>
        <PhotoGallery images={structurImages} />
      </div>
    </div>
  )
}

export default Dockwise
