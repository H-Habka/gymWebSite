import React from "react"
import TextSplitter from "../TextSpletter"
import autocad from "../../images/software/autocad.webp"
import matrix from "../../images/software/matrix.webp"
import maxsurf from "../../images/software/maxsurf.webp"
import rhino from "../../images/software/rhino.webp"
import sketchUp from "../../images/software/sketchUp.webp"
import soldwork from "../../images/software/soldwork.webp"

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
            <img alt="autocad" src={autocad} />
          </a>
          <a
            href="https://gemvision.com/matrixgold"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="250"
          >
            <img alt="matrix" src={matrix} />
          </a>
          <a
            href="https://maxsurf.net/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="500"
          >
            <img alt="maxsurf" src={maxsurf} />
          </a>
          <a
            href="https://www.rhino3d.com/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="0"
          >
            <img alt="rhino" src={rhino} />
          </a>
          <a
            href="https://www.solidworks.com/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="250"
          >
            <img alt="soldwork" src={soldwork} />
          </a>
          <a
            href="https://www.sketchup.com/en"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="500"
          >
            <img alt="sketchUp" src={sketchUp} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SoftwareExperience
