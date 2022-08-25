import React from "react";
import PlanCard from "./PlanCard";
import { AiTwotoneFire } from "react-icons/ai";
import StrokText from "../StrokText";
import {TbHeartPlus} from 'react-icons/tb'
import {FaCrown} from 'react-icons/fa'

const StartJourneySection = () => {
    return (
        <div id="plans" className="my-20 flex flex-col gap-10">
            <div className="flex justify-around flex-col xs:flex-row font-bold  lg:text-4xl items-center text-4xl xs:text-2xl">
                <StrokText content="READY TO START" />
                <p className="text-white">YOUR JOURNEY</p>
                <StrokText content="NOW WITHUS" />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:gap-8 px-4 lg:px-8 xs:grid-cols-2 lg:grid-cols-3 ">
                <PlanCard
                    icon={<TbHeartPlus size={44} />}
                    title="BASIC PLAN"
                    price="25"
                    details={[
                        "2 hours of excercises",
                        "Free consultaion to coaches",
                        "Access to The Community",
                    ]}
                />
                <PlanCard
                    icon={<FaCrown size={44} />}
                    title="PREMIUM PLAN"
                    price="30"
                    details={[
                        "5 hour of excercises",
                        "Free consultaion of Coaches",
                        "Accessto minibar",
                    ]}
                />
                <PlanCard
                    icon={<AiTwotoneFire size={44} />}
                    title="PRO PLAN"
                    price="45"
                    details={[
                        "8 hours of excercises",
                        "Consultation of Private Coach",
                        "Free Fitness Merchandises",
                    ]}
                />
            </div>
        </div>
    );
};

export default StartJourneySection;
