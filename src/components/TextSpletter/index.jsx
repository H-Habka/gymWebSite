import React, { useRef } from "react"

const TextSplitter = ({ text, strokeWordsArray }) => {
  const arrayOfWords = text.split(" ")
  const counter = useRef(0)
  return (
    <div className="flex flex-wrap">
      {arrayOfWords.map((word, i) => {
        return (
          <div key={i}>
            {word.split("").map((letter, j) => {
              counter.current = counter.current + 1
              if (
                Array.isArray(strokeWordsArray) &&
                strokeWordsArray.includes(i)
              )
                return (
                  <span
                    key={j}
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
                  key={j}
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
