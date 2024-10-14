import React from "react"
import TextSplitter from "../TextSpletter"
import { LazyLoadImage } from "react-lazy-load-image-component"

const CompaniesIworkedWith = () => {
  return (
    <div
      data-aos="fade-up"
      className="md:px-[10vw] min-h-[100vh] flex flex-col justify-center"
    >
      <div className=" flex justify-between  md:flex-row gap-10 items-center  bg-[#12121222] p-8 rounded-xl">
        <div className="py-20 text-4xl md:max-w-[40vw] flex gap-2 text-four">
          <TextSplitter strokeWordsArray={[0, 1, 2]} text="I worked With" />
        </div>
        <div className="flex gap-10 flex-1 items-center justify-evenly [&_img]:rounded-xl hover:[&_img]:-translate-y-1 hover:[&_img]:-translate-x-1 [&_img]:transition-all [&_img]:duration-200 hover:[&_img]:shadow-[10px_10px_10px_2px_#121212] [&_img]:w-[120px] [&_img]:h-[120px] [&>a]:justify-self-center">
          <a
            href="https://sarayjewellery.com/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="0"
          >
            <LazyLoadImage alt="saray" src="https://i.imgur.com/E3HEC0X.jpeg" />
          </a>
          <a
            href="https://marinedesignhub.co.uk/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="250"
          >
            <LazyLoadImage alt="mdh" src="https://i.imgur.com/bDPzNxQ.jpeg" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CompaniesIworkedWith
