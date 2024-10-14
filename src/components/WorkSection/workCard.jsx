import React from "react"
import { RiShareBoxFill } from "react-icons/ri"
import { Link } from "react-router-dom"

const WorkCard = ({ isSticky, title, to, children }) => {
  return (
    <div
      className={`${
        isSticky ? "sticky top-[150px]" : ""
      }  hover:scale-[1.008] transition-all duration-300`}
    >
      <Link to={to}>
        <div className="overflow-hidden  rounded-xl md:h-[340px] max-h-[400px] bg-[#121212]">
          <div className=" text-white flex justify-between p-4 text-2xl uppercase bg-gray-600">
            <p>{title}</p>
            <RiShareBoxFill className="w-8 h-8 animate-pulse" />
          </div>
          {children}
        </div>
      </Link>
    </div>
  )
}

export default WorkCard
