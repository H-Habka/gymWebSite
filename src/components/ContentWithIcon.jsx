import React from "react"
import Check from "../images/check.webp"
import WhiteCheck from "../images/white-check.webp"

const ContentWithIcon = ({ icon, content, bgGradient }) => {
  return (
    <div className=" flex gap-2">
      <div className="min-w-[40px]">
        {bgGradient ? (
          <img src={Check} alt="check" />
        ) : (
          <img src={WhiteCheck} alt="check" />
        )}
      </div>
      <p className="text-white">{content.toUpperCase()}</p>
    </div>
  )
}

export default ContentWithIcon
