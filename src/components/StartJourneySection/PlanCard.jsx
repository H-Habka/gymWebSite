import React from "react"
import ContentWithIcon from "../ContentWithIcon"
import moment from "moment"

const couponFormat = "name_YYYY-MM-DD_discountAmmount_plan1-plan2-plan3"

const PlanCard = ({
  icon,
  title,
  price,
  details,
  whatsappMessage,
  planNumber,
}) => {
  const couponCode = new URLSearchParams(window.location.search).get("coupon")
  const couponExpirationDate = couponCode?.split("_")?.[2]
  const couponDiscountAmount = couponCode?.split("_")?.[1]
  const applyDiscountTo = couponCode?.split("_")?.[3]?.split("-")
  console.log({ couponFormat })
  const discountedPrice = couponDiscountAmount
    ? +price - (+price * +couponDiscountAmount) / 100
    : +price

  const isExpired = moment(couponExpirationDate).isBefore(moment(new Date()))
  const shouldApplyDiscountTo = (applyDiscountTo || []).includes(
    String(planNumber)
  )

  return (
    <div className="bg-gray-600 text-white flex flex-col justify-between gap-10 p-6 group relative z-10 md:hover:scale-110 hover:scale-105 transition-all duration-500">
      <div className="w-14 h-14 absolute rounded-1/2 top-7 left-7 -z-10 bg-gradient-to-tr to-three from-four group-hover:w-full group-hover:h-full group-hover:rounded-none transition-all duration-500 group-hover:top-0 group-hover:left-0" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 ">
          <div className="flex justify-between">
            <div className="bg-gradient-to-tr to-three from-four rounded-1/2 p-2 group-hover:bg-white group-hover:text-two w-fit h-fit transition-all duration-500 group-hover:bg-none">
              {icon}
            </div>
            {couponDiscountAmount && !isExpired && shouldApplyDiscountTo ? (
              <div>
                <p className="flag-discount">{couponDiscountAmount}% OFF</p>
              </div>
            ) : null}
          </div>
          <p className="text-2xl">{title}</p>
        </div>
        <div className="">
          {+discountedPrice === +price ||
          isExpired ||
          !shouldApplyDiscountTo ? (
            <p className="text-5xl">$ {price}</p>
          ) : (
            <p className="text-5xl">
              ${" "}
              <span className="text-5xl text-green-500">{discountedPrice}</span>{" "}
              <sub className="text-2xl line-through">{price}</sub>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {details.map((item, idx) => (
            <ContentWithIcon content={item} key={idx} />
          ))}
        </div>
      </div>
      <a
        href={`https://api.whatsapp.com/send?phone=971565561153&text=${`${whatsappMessage} ${
          shouldApplyDiscountTo ? `- Coupon Code: ${couponCode}` : ``
        } `}`}
        target="_blank"
        rel="noreferrer"
      >
        <button className="group-hover:text-two group-hover:bg-white duration-500 bg-two transition-all w-full py-2 px-4">
          Join now
        </button>
      </a>
    </div>
  )
}

export default PlanCard
