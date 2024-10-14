import React from "react"
import PhotoGallery from "../photoGallery"
import TextSplitter from "../../../TextSpletter"
import Tags from "../../Tags"

const renderedImages = [
  {
    original: "https://i.imgur.com/6QaKtmH.jpeg",
    thumbnail: "https://i.imgur.com/6QaKtmH.jpeg",
  },
  {
    original: "https://i.imgur.com/Ttr9Akn.jpeg",
    thumbnail: "https://i.imgur.com/Ttr9Akn.jpeg",
  },
  {
    original: "https://i.imgur.com/sXsd4LT.jpeg",
    thumbnail: "https://i.imgur.com/sXsd4LT.jpeg",
  },
  {
    original: "https://i.imgur.com/kNKyprI.jpeg",
    thumbnail: "https://i.imgur.com/kNKyprI.jpeg",
  },
  {
    original: "https://i.imgur.com/8LZ7Wc1.jpeg",
    thumbnail: "https://i.imgur.com/8LZ7Wc1.jpeg",
  },
  {
    original: "https://i.imgur.com/oZQyzAo.jpeg",
    thumbnail: "https://i.imgur.com/oZQyzAo.jpeg",
  },
  {
    original: "https://i.imgur.com/E7sXJcu.jpeg",
    thumbnail: "https://i.imgur.com/E7sXJcu.jpeg",
  },
]
const structurImages = [
  {
    original: "https://i.imgur.com/3Mft2En.jpeg",
    thumbnail: "https://i.imgur.com/3Mft2En.jpeg",
  },
  {
    original: "https://i.imgur.com/OQwVNWu.jpeg",
    thumbnail: "https://i.imgur.com/OQwVNWu.jpeg",
  },
  {
    original: "https://i.imgur.com/xodToKP.jpeg",
    thumbnail: "https://i.imgur.com/xodToKP.jpeg",
  },

  {
    original: "https://i.imgur.com/undfLYH.jpeg",
    thumbnail: "https://i.imgur.com/undfLYH.jpeg",
  },
  {
    original: "https://i.imgur.com/a6n0oZL.jpeg",
    thumbnail: "https://i.imgur.com/a6n0oZL.jpeg",
  },
  {
    original: "https://i.imgur.com/yU5bnI4.jpeg",
    thumbnail: "https://i.imgur.com/yU5bnI4.jpeg",
  },
  {
    original: "https://i.imgur.com/gZv26HV.jpeg",
    thumbnail: "https://i.imgur.com/gZv26HV.jpeg",
  },
  {
    original: "https://i.imgur.com/a9goLAK.jpeg",
    thumbnail: "https://i.imgur.com/a9goLAK.jpeg",
  },
  {
    original: "https://i.imgur.com/3M3JNgs.jpeg",
    thumbnail: "https://i.imgur.com/3M3JNgs.jpeg",
  },
  {
    original: "https://i.imgur.com/CJOHTbP.jpeg",
    thumbnail: "https://i.imgur.com/CJOHTbP.jpeg",
  },
  {
    original: "https://i.imgur.com/P5zjy3T.jpeg",
    thumbnail: "https://i.imgur.com/P5zjy3T.jpeg",
  },
]

const Dockwise = () => {
  return (
    <div className=" md:px-[10vw] pt-10 min-h-screen flex flex-col justify-center">
      <div className="bg-[#23232388] text-white rounded-md px-8 py-10">
        <div className=" max-w-[50%]">
          <div className="flex items-center justify-between">
            <div className="text-[100px] font-bold">
              <TextSplitter text="Dockwise" />
            </div>
          </div>
          <p
            className="text-[20px]"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            The importance of the research lies in providing an integrated
            design study for the Dockwise ship, where the complex design process
            that the design process took is to design a model of the ship using
            the Rhinoceros program. Stabilization studies, hydrodynamic studies
            and vessel resistances studies were performed using Maxsurf
            software.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="800"
            className="mt-4 text-[20px]"
          >
            After the studies were completed, a wooden model of the ship was
            implemented and field tests were conducted on it in the ship models
            test yard.
          </p>
          <div className="mt-8">
            <Tags
              keywords={[
                "Final year project",
                "Rhinoceros",
                "Maxsurf",
                "3D model",
                "99% Grade Rate",
                "autocad",
              ]}
            />
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
          <TextSplitter strokeWordsArray={[1]} text="STRUCTURE DESIGN" />
        </div>
        <PhotoGallery images={structurImages} />
      </div>
    </div>
  )
}

export default Dockwise
