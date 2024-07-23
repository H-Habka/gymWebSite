import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaFilePdf } from "react-icons/fa"

const PDFViewer = ({ title , imgPath }) => {
  return (
    <div className="h-full rounded-2xl flex flex-col gap-4 p-4 group relative transition-all duration-500 bg-[#232323] justify-between z-1 ">
      <div className="flex items-center gap-6">
        <div className="rounded-full w-fit h-fit p-2">
          <FaFilePdf
            size={40}
            className="fill-red-300 group-hover:fill-red-600 transition-all duration-500"
          />
        </div>
        <p className="text-white text-lg">{title}</p>
      </div>
      <img
        loading="lazy"
        src={imgPath}
        alt={title}
        className="rounded-md lg:opacity-50  lg:group-hover:opacity-100 transition-all duration-500"
      />

      <button className="flex gap-2 py-2 px-0 group-hover:px-2  group-hover:bg-white text-white group-hover:text-two w-fit transition-all duration-500 rounded-lg">
        <p>Donwload PDF</p>
        <AiOutlineArrowRight size={24} />
      </button>
    </div>
  )
}

export default PDFViewer
