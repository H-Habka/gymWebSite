import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"

const ProgramCard = ({ icon, title, content, whatsappMessage }) => {
  return (
    <div className="flex flex-col gap-4 p-4 group relative transition-all duration-500 bg-[#343434] justify-between z-1 cursor-pointer">
      <div className="absolute group-hover:w-full group-hover:h-full group-hover:rounded-none bg-gradient-to-tr from-four to-three group-hover:top-0 group-hover:left-0 -z-10 group-hover:-z-1 transition-all duration-500 rounded-1/2 w-12 h-12 top-4 left-4" />
      <div className="rounded-full group-hover:text-two group-hover:bg-white text-white bg-two w-fit h-fit p-2 transition-all duration-500">
        {icon}
      </div>
      <p className="text-white text-lg">{title}</p>
      <p className="text-white">{content}</p>
      <a
        href={`https://api.whatsapp.com/send?phone=971565561153&text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        <button className="flex gap-2 py-2 px-0 group-hover:px-2  group-hover:bg-white text-white group-hover:text-two w-fit transition-all duration-500 rounded-lg">
          <p>Learn More</p>
          <AiOutlineArrowRight size={24} />
        </button>
      </a>
    </div>
  )
}

export default ProgramCard
