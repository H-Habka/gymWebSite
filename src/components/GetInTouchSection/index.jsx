import React from "react"
import TextSplitter from "../TextSpletter"
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

const GetInTouchSection = ({ hideSocialMedia }) => {
  return (
    <div
      id="getInTouch"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <a href="mailto:hasanhabka9@gmail.com?subject=Get%20In%20Touch">
        <div
          data-aos="fade-up"
          className="group relative cursor-pointer hover:scale-105 transition-all duration-300 h-[260px] rounded-xl bg-[#12121222] w-[80vw]"
        >
          <div className="absolute text-white tracking-wider  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <TextSplitter
              strokeWordsArray={[0]}
              text="hasanhabka9@gmail.com "
            />
          </div>
          <div className="absolute bottom-0  translate-y-1/2 left-0 w-full text-center">
            <div className="text-white pointer-events-none text-[10em] flex items-center gap-6 justify-center font-[900]">
              <TextSplitter strokeWordsArray={[1]} text="GET IN TOUCH" />
            </div>
          </div>
        </div>
      </a>
      <div className="w-full top-full h-[100px] mix-blend-darken bg-orange-300"></div>
      {!hideSocialMedia && (
        <div className="mt-10 flex items-center justify-center gap-8">
          <a
            href="https://www.facebook.com/share/1EfsfAKVAy"
            target="_blank"
            data-aos="fade-right"
            data-aos-delay="250"
            rel="noreferrer"
          >
            <div className="hover:bg-white  cursor-pointer hover:-translate-y-[6px]  rounded-full transition-all duration-300 group">
              <FaFacebook className="w-9 h-9 group-hover:scale-[1.11]  group-hover:text-[#4267B2] text-[#121212]" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/hasan-habka-374b81220"
            target="_blank"
            data-aos="fade-right"
            data-aos-delay="300"
            rel="noreferrer"
          >
            <div className="hover:bg-[#0a66c2] cursor-pointer hover:-translate-y-[6px]  rounded-full transition-all duration-300 p-1 group">
              <FaLinkedinIn className="w-9 h-9  group-hover:scale-[0.85]  group-hover:text-white text-[#121212]" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/hasanhabka9"
            target="_blank"
            data-aos="fade-left"
            data-aos-delay="300"
            rel="noreferrer"
          >
            <div className="hover:bg-gradient-to-t hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]  cursor-pointer hover:-translate-y-[6px]  rounded-full transition-all duration-300 p-1 group">
              <FaInstagram className="w-9 h-9  group-hover:text-white text-[#121212]" />
            </div>
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=971527416292&text=Hi`}
            target="_blank"
            data-aos="fade-left"
            data-aos-delay="250"
            rel="noreferrer"
          >
            <div className="hover:bg-[#25D366] cursor-pointer hover:-translate-y-[6px]  rounded-full transition-all duration-300 p-1 group">
              <FaWhatsapp className="w-9 h-9  group-hover:text-white text-[#121212]" />
            </div>
          </a>
        </div>
      )}
    </div>
  )
}

export default GetInTouchSection
