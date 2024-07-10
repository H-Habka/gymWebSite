import React from "react"
import ProgramCard from "./ProgramCard"
import { FaHeartbeat, FaRunning } from "react-icons/fa"
import { MdTrain } from "react-icons/md"
import { AiTwotoneFire } from "react-icons/ai"
import ContentWithIcon from "../ContentWithIcon"
import StrokText from "../StrokText"

const ProgramsSection = () => {
  return (
    <div id="programs" className="flex flex-col gap-4 px-4 mt-20">
      <h2 className="flex flex-col xs:flex-row gap-4 items-center justify-around w-full text-3xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider">
        <StrokText content="EXPLORE OUR" />
        <p className="text-white">PROGRAMS</p>
        <StrokText content="TO SHAPE YOU" />
      </h2>
      <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
        <ProgramCard
          content="In this program, you are trained to improve your strength and build a toned body and gain muscle mass."
          title="Strength Training"
          icon={<MdTrain size={32} />}
          whatsappMessage="Hi, Coach Can You Please Tell Me More About 'Strength Training'"
        />
        <ProgramCard
          content="In this program, you are trained to do sequential moves in range of 20 until 30 minutes."
          title="Cardio Training"
          icon={<FaRunning size={32} />}
          whatsappMessage="Hi, Coach Can You Please Tell Me More About 'Cardio Training'"
        />
        <ProgramCard
          content="This program is suitable for you who wants to get rid of your fat and lose their weight."
          title="Fat Burning"
          icon={<AiTwotoneFire size={32} />}
          whatsappMessage="Hi, Coach Can You Please Tell Me More About 'Fat Burning'"
        />
        <ProgramCard
          content="This programs is designed for those who exercises only for their body fitness not body building."
          title="Health Fitness"
          icon={<FaHeartbeat size={32} />}
          whatsappMessage="Hi, Coach Can You Please Tell Me More About 'Health Fitness'"
        />
      </div>
      <div className="flex flex-col items-center md:items-start  md:flex-row gap-10 justify-between mt-10">
        <div className="flex lg:gap-4 md:gap-2 gap-1 flex-1 justify-between">
          <div>
            <img
              className="w-[360px] "
              loading="lazy"
              src={require("../../images/test2.webp")}
              alt="img1"
            />
          </div>
          <div className="flex flex-col lg:gap-4 md:gap-2 gap-1  ">
            <div className=" ">
              <img
                className="w-[500px]"
                loading="lazy"
                src={require("../../images/test3.webp")}
                alt="img2"
              />
            </div>
            <div className="flex lg:gap-4 md:gap-2 gap-1  ">
              <div>
                <img
                  className="w-[345px]"
                  loading="lazy"
                  src={require("../../images/test4.webp")}
                  alt="img3"
                />
              </div>
              <div>
                <img
                  className="w-[230px]"
                  loading="lazy"
                  src={require("../../images/test5.webp")}
                  alt="img4"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="whyUs" className="flex-1 flex flex-col gap-6 ">
          <p className="text-xl text-two">SOME REASONS</p>
          <h1 className="text-5xl font-bold">
            <StrokText content="WHY" />{" "}
            <span className="text-white">CHOOSE ME?</span>
          </h1>
          <div className="flex flex-col gap-3 text-xl font-semibold">
            <ContentWithIcon
              content="OVER 15 YEAR OF HARD TRAINING"
              bgGradient
            />
            <ContentWithIcon
              content="TRAIN SMARTER AND FASTER THAN BEFORE"
              bgGradient
            />
            <ContentWithIcon
              content="I was among the top three in more than 15 local and international tournaments"
              bgGradient
            />
            <ContentWithIcon
              content="Achieved two professional cards"
              bgGradient
            />
            <ContentWithIcon
              content="Familiar with the most important exercises and programs that must be followed to participate in tournaments"
              bgGradient
            />
          </div>
          {/* <p className="text-[#232323] text-xl font-semibold">OUR PARTNERS</p>
                    <div className="flex lg:gap-4 md:gap-2 gap-1   ">
                        <img
                            loading="lazy"
                            src={require("../../images/NB.webp")}
                            alt="NB"
                        />
                        <img
                            loading="lazy"
                            src={require("../../images/adidas.webp")}
                            alt="adidas"
                        />
                        <img
                            loading="lazy"
                            src={require("../../images/nick.webp")}
                            alt="nick"
                        />
                    </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProgramsSection
