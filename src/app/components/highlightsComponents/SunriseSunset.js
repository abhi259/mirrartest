import { useWeatherInfo } from "@/app/store/store"
import Image from "next/image"
import React from "react"

export const SunriseSunset = () => {
  const { weatherInfo } = useWeatherInfo()

  const sunrise = weatherInfo.city.sunrise
  const sunset = weatherInfo.city.sunset

  const convertTimestamptoTime = (timestamp) => {
    const date = new Date(timestamp * 1000)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = (hours % 12 === 0) ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  const formattedSunrise = convertTimestamptoTime(sunrise)
    const formattedSunset = convertTimestamptoTime(sunset);

  return (
    <div className="flex flex-col grow justify-center  gap-3 backdrop-blur-sm bg-[#1b1b1bb8] rounded-2xl m-3 p-5 font-bold" >
      <h1 className="font-bold text-lg">Sunrise & Sunset:</h1>
      <div className="flex justify-around items-center pt-4">
        <div className="flex gap-3">
          <div className=" ">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3920/3920639.png"
              className="invert"
              width={40}
              height={40}
              alt="icon"
            />
          </div>
          <div>
            <h1>Sunrise:</h1>
            <h1>{formattedSunrise}</h1>
          </div>
        </div>
        <div className="flex gap-3 ">
          <div className=" ">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3920/3920728.png"
              className="invert"
              width={40}
              height={40}
              alt="icon"
            />
          </div>
          <div>
            <h1>Sunset</h1>
            <h1>{formattedSunset}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
