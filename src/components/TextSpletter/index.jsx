import React, { useRef } from "react"

const TextSplitter = ({ text, strokeCount }) => {
  const arrayOfWords = text.split(" ")
  const counter = useRef(0)
  return (
    <div className="flex flex-wrap">
      {arrayOfWords.map((word, i) => {
        return (
          <div>
            {word.split("").map((letter, j) => {
              counter.current = counter.current + 1
              if (i < strokeCount)
                return (
                  <span
                    style={{ WebkitTextStroke: "1px white" }}
                    className={`text-transparent`}
                    data-aos="fade-right"
                    data-aos-delay={counter.current * 50}
                  >
                    {letter}
                  </span>
                )
              return (
                <span
                  data-aos="fade-right"
                  data-aos-delay={counter.current * 50}
                >
                  {letter}
                </span>
              )
            })}
            <span className="opacity-0">.</span>
          </div>
        )
      })}
    </div>
  )
}

export default TextSplitter
