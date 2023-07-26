import { useWeatherInfo } from "@/app/store/store"
import Image from "next/image"
import React from "react"

export const TempDetails = () => {
  const { weatherInfo } = useWeatherInfo()

  const feelsLike = weatherInfo.list[0].main.feels_like
  const minTemp = weatherInfo.list[0].main.temp_min
  const maxTemp = weatherInfo.list[0].main.temp_max

  return (
    <div className="flex flex-col grow justify-center gap-3  rounded-2xl m-3 p-5 backdrop-blur-sm bg-[#1b1b1bb8]   ">
      <h4 className="font-bold text-lg">Temperature details:</h4>
      <div className="flex justify-center items-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/1684/1684324.png"
          className="invert"
          width={50}
          height={50}
          alt="icon"
        />
      </div>
      <div className="flex justify-center gap-7 font-bold">
        <div className="w-16 ">
          <h5>Feels like: </h5>
          <span>{feelsLike} °C</span>
        </div>
        <div className="w-16">
          <h5>Min Temp: </h5>
          <span>{minTemp} °C</span>
        </div>
        <div className="w-16">
          <h5>Max Temp: </h5>
          <span>{maxTemp} °C</span>
        </div>
      </div>
    </div>
  )
}
