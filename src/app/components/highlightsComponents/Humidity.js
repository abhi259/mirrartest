import { useWeatherInfo } from "@/app/store/store"
import Image from "next/image"
import React from "react"

export const Humidity = () => {

  const { weatherInfo } = useWeatherInfo()

  const humidity = weatherInfo.list[0].main.humidity
  
  return (
    <div className="flex flex-col grow  justify-center gap-3 backdrop-blur-sm bg-[#1b1b1bb8] rounded-2xl m-3 p-5 ">
      <div>
        <h1 className="font-bold text-lg ">Humidity:</h1>
      </div>
      <div className="flex justify-between pt-4 items-center text-2xl">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/727/727790.png"
          className="invert"
          width={44}
          height={44}
          alt="icon"
        />
        <h1>{humidity} %</h1>
      </div>
    </div>
  )
}
