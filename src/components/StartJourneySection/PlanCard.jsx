import React from "react"
import ContentWithIcon from "../ContentWithIcon"

const PlanCard = ({ icon, title, price, details, whatsappMessage }) => {
  return (
    <div className="bg-gray-600 text-white flex flex-col gap-8 p-6 group relative z-10 md:hover:scale-110 hover:scale-105 transition-all duration-500">
      <div className="w-14 h-14 absolute rounded-1/2 top-7 left-7 -z-10 bg-gradient-to-tr to-three from-four group-hover:w-full group-hover:h-full group-hover:rounded-none transition-all duration-500 group-hover:top-0 group-hover:left-0" />
      <div className="flex flex-col gap-4 ">
        <div className="bg-gradient-to-tr to-three from-four rounded-1/2 p-2 group-hover:bg-white group-hover:text-two w-fit h-fit transition-all duration-500 group-hover:bg-none">
          {icon}
        </div>
        <p className="text-2xl">{title}</p>
      </div>
      <div className="text-5xl">$ {price}</div>
      <div className="flex flex-col gap-2">
        {details.map((item, idx) => (
          <ContentWithIcon content={item} key={idx} />
        ))}
      </div>
      <a
        href={`https://api.whatsapp.com/send?phone=971565561153&text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        <button className="group-hover:text-two group-hover:bg-white duration-500 bg-two transition-all w-full py-2 px-4">
          Join now
        </button>
      </a>
    </div>
  )
}

export default PlanCard
