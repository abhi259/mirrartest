import React from "react"
import { useWeatherInfo } from "../store/store"
import Image from "next/image"

export const Forecast = () => {
  const { weatherInfo } = useWeatherInfo()

  const forecastWeatherData = []
  const forecastDates = []

  weatherInfo.list.map((item, index) => {
    const date = new Date(item.dt_txt).getDate()
    if (!forecastDates.includes(date)) {
      forecastDates.push(date)
      forecastWeatherData.push(item)
    }
  })

  return (
    <div className="bg-[#212121] rounded-2xl p-2 bg-cover" 
    style={{ backgroundImage: 'url("/bg-2.jpg")' }}>
      <div className="backdrop-blur-sm bg-[#1b1b1bb8] rounded-2xl m-3 p-5 flex flex-col ">
        <h1 className="font-bold text-lg ">Forecast:</h1>
        <div>
          {forecastWeatherData.map((item, index) => {
            if (index != 0)
              return (
                <div
                  key={item.dt}
                  className="forecast-container flex justify-between pt-4 items-center "
                >
                  <div className="forecast-details">
                    <h4 className="font-bold text-[12px]">
                      {new Date(item.dt_txt).toDateString()}
                    </h4>
                    <h5 className="font-bold text-[12px]  ">
                      {item.weather[0].description}
                    </h5>
                  </div>
                  <h5 className="font-bold">
                    {item.main.temp} <span className="temp-unit">°C</span>
                  </h5>
                  <div className="icon-container">
                    <Image
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                      alt="icon"
                      width={50}
                      height={50}
                      className="f-icon-img"
                    />
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </div>
  )
}
