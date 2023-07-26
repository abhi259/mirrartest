import { useWeatherInfo } from "@/app/store/store"
import Image from "next/image"
import React from "react"

export const Pressure = () => {

  const { weatherInfo } = useWeatherInfo()

  const pressure = weatherInfo.list[0].main.pressure

  return (
    <div className="flex flex-col grow  justify-center gap-3 backdrop-blur-sm bg-[#1b1b1bb8] rounded-2xl m-3 p-5">
      <div>
        <h1 className="font-bold text-lg ">Pressure:</h1>
      </div>
      <div className="flex justify-between pt-4 items-center text-2xl">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/7334/7334246.png"
          className="invert"
          width={44}
          height={44}
          alt="icon"
        />
        <h1>{pressure} hPa</h1>
      </div>
    </div>
  )
}
