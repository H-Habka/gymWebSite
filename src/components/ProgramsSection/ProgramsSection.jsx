import React from "react";
import ProgramCard from "./ProgramCard";
import { FaHeartbeat, FaRunning } from "react-icons/fa";
import { MdTrain } from "react-icons/md";
import { AiTwotoneFire } from "react-icons/ai";
import ContentWithIcon from "../ContentWithIcon";
import StrokText from "../StrokText";

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
                    content="In this program, you are trained to improve your strength through many exercises."
                    title="Strength Training"
                    icon={<MdTrain size={32} />}
                />
                <ProgramCard
                    content="In this program, you are trained to do sequential moves in range of 20 until 30 minutes."
                    title="Cardio Training"
                    icon={<FaRunning size={32} />}
                />
                <ProgramCard
                    content="This program is suitable for you who wants to get rid of your fat and lose their weight."
                    title="Fat Burning"
                    icon={<AiTwotoneFire size={32} />}
                />
                <ProgramCard
                    content="This programs is designed for those who exercises only for their body fitness not body building."
                    title="Health Fitness"
                    icon={<FaHeartbeat size={32} />}
                />
            </div>
            <div className="flex flex-col items-center md:items-start  md:flex-row gap-10 justify-between mt-10">
                <div className="flex lg:gap-4 md:gap-2 gap-1 flex-1 justify-between">
                    <div>
                        <img
                            loading="lazy"
                            src={require("../../images/img1.webp")}
                            alt="img1"
                        />
                    </div>
                    <div className="flex flex-col lg:gap-4 md:gap-2 gap-1  ">
                        <div>
                            <img
                                loading="lazy"
                                src={require("../../images/img2.webp")}
                                alt="img2"
                            />
                        </div>
                        <div className="flex lg:gap-4 md:gap-2 gap-1  ">
                            <div>
                                <img
                                    loading="lazy"
                                    src={require("../../images/img3.webp")}
                                    alt="img3"
                                />
                            </div>
                            <div>
                                <img
                                    loading="lazy"
                                    src={require("../../images/img4.webp")}
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
                        <span className="text-white">CHOOSE US?</span>
                    </h1>
                    <div className="flex flex-col gap-3 text-xl font-semibold">
                        <ContentWithIcon
                            content="OVER 140+ EXPERT COACHS"
                            bgGradient={true}
                        />
                        <ContentWithIcon
                            content="TRAIN SMARTER AND FASTER THAN BEFORE"
                            bgGradient={true}
                        />
                        <ContentWithIcon
                            content="1 FREE PROGRAM FOR NEW MEMBER"
                            bgGradient={true}
                        />
                        <ContentWithIcon
                            content="RELIABLE PARTNERS"
                            bgGradient={true}
                        />
                    </div>
                    <p className="text-[#232323] text-xl font-semibold">OUR PARTNERS</p>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramsSection;
