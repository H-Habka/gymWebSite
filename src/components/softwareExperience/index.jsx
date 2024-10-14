import React from "react"
import TextSplitter from "../TextSpletter"
import { LazyLoadImage } from "react-lazy-load-image-component"

const SoftwareExperience = () => {
  return (
    <div
      data-aos="fade-up"
      className="md:px-[10vw] min-h-[100vh] flex flex-col justify-center"
    >
      <div className=" flex  md:flex-row gap-10 items-center  bg-[#12121222] p-8 rounded-xl">
        <div className="py-20 text-4xl md:max-w-[40vw] flex gap-2 text-four">
          <TextSplitter strokeWordsArray={[0, 1]} text="Software Experience" />
        </div>
        <div className="grid grid-cols-3 gap-10 flex-1 [&_img]:rounded-xl hover:[&_img]:-translate-y-1 hover:[&_img]:-translate-x-1 [&_img]:transition-all [&_img]:duration-200 hover:[&_img]:shadow-[10px_10px_10px_2px_#121212] [&_img]:w-[120px] [&_img]:h-[120px] [&>a]:justify-self-center">
          <a
            href="https://www.autodesk.com/ae/products/autocad/overview"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="0"
          >
            <LazyLoadImage alt="autocad" src="https://i.imgur.com/Ti9KMsH.jpeg" />
          </a>
          <a
            href="https://gemvision.com/matrixgold"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="250"
          >
            <LazyLoadImage alt="matrix" src="https://i.imgur.com/D8hbQWK.jpeg" />
          </a>
          <a
            href="https://maxsurf.net/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="500"
          >
            <LazyLoadImage alt="maxsurf" src="https://i.imgur.com/wCJkQre.jpeg" />
          </a>
          <a
            href="https://www.rhino3d.com/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="0"
          >
            <LazyLoadImage alt="rhino" src="https://i.imgur.com/kbr5fWo.jpeg" />
          </a>
          <a
            href="https://www.solidworks.com/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="250"
          >
            <LazyLoadImage alt="soldwork" src="https://i.imgur.com/areTsUj.jpeg" />
          </a>
          <a
            href="https://www.sketchup.com/en"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="500"
          >
            <LazyLoadImage alt="sketchUp" src="https://i.imgur.com/zqazLIo.jpeg" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SoftwareExperience
