import React from "react"

const Tags = ({ keywords }) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {keywords.map((keyword) => {
        return (
          <div
            key={keyword}
            className="border-2 border-gray-200 rounded-md px-3 py-1.5"
          >
            {keyword}
          </div>
        )
      })}
    </div>
  )
}

export default Tags
