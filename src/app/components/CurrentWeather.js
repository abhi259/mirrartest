import Image from "next/image"
import React from "react"
import { useWeatherInfo } from "../store/store"

export const CurrentWeather = () => {
  const { weatherInfo } = useWeatherInfo()

  const temp = weatherInfo.list[0].main.temp
  const icon = weatherInfo.list[0].weather[0].icon
  const description = weatherInfo.list[0].weather[0].description
  const date = new Date(weatherInfo.list[0].dt_txt).toDateString()
  const name = weatherInfo.city.name

  return (
    <div className="bg-[#212121] rounded-2xl p-6   bg-cover backdrop-blur-3xl" 
    style={{ backgroundImage: 'url("/bg-2.jpg")' }}
    >
      <div className="backdrop-blur-sm bg-[#1b1b1bb8] rounded-2xl p-6">
      <div className="flex justify-between items-center  ">
        <div>
          <h1 className="text-sm">Now</h1>
          <h1 className="font-bold text-3xl">
            {temp} <span className="text-lg">°C</span>
          </h1>
          <div>{description}</div>
        </div>
        <div>
          <div>
            <Image
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              width={200}
              height={200}
              alt="icon"
              className=" translate-x-10 -m-6 "
            />
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex flex-col gap-2">
        <h5 className="flex items-center gap-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/3239/3239948.png"
            className="invert"
            width={20}
            height={20}
            alt="icon"
          />
          <span className="details">{date}</span>
        </h5>
        <h5 className="flex items-center gap-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/3082/3082383.png"
            className="invert"
            width={20}
            height={20}
            alt="icon"
          />
          <span className="details">{name}</span>
        </h5>
      </div>
    </div>
    </div>
  )
}
