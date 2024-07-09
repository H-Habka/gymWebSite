import React from "react"
import PlanCard from "./PlanCard"
import { AiTwotoneFire } from "react-icons/ai"
import StrokText from "../StrokText"
import { TbHeartPlus } from "react-icons/tb"
import { FaCrown } from "react-icons/fa"

const StartJourneySection = () => {
  return (
    <div id="plans" className="my-20 flex flex-col gap-10">
      <div className="flex justify-around flex-col xs:flex-row font-bold  lg:text-4xl items-center text-4xl xs:text-2xl">
        <StrokText content="READY TO START" />
        <p className="text-white">YOUR JOURNEY</p>
        <StrokText content="NOW WITHUS" />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 px-4 lg:px-8 xs:grid-cols-2 lg:grid-cols-4 ">
        <PlanCard
          icon={<AiTwotoneFire size={44} />}
          title="NUTRITIONAL PLAN"
          price="45"
          details={[
            "One month follow-up",
            "A diet with supplements and vitamins added when needed",
          ]}
          whatsappMessage="Hi, coach I Want to Subscribe to NUTRITIONAL PLAN"
        />
        <PlanCard
          icon={<AiTwotoneFire size={44} />}
          title="BASIC PLAN"
          price="120"
          details={[
            "One month follow-up",
            "All In NUTRITIONAL plan",
            "Detailed training program through educational videos",
          ]}
          whatsappMessage="Hi, coach I Want to Subscribe to STARTER PLAN"
        />
        <PlanCard
          icon={<TbHeartPlus size={44} />}
          title="PREMIUM PLAN"
          price="280"
          details={[
            "Three months follow-up",
            "All In starter plan",
            "A strict training regimen for bodybuilding competitions",
          ]}
          whatsappMessage="Hi, coach I Want to Subscribe to BASIC PLAN"
        />
        <PlanCard
          icon={<FaCrown size={44} />}
          title="PRO PLAN"
          price="450"
          details={[
            "Six months follow-up",
            "All In Basic plan",
            "Daily follow-up on WhatsApp when needed for any inquiries",
          ]}
          whatsappMessage="Hi, coach I Want to Subscribe to PREMIUM PLAN"
        />
      </div>
    </div>
  )
}

export default StartJourneySection
