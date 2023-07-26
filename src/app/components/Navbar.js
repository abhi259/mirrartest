import React, { useEffect, useState } from "react"
import { useDarkMode, useWeatherInfo } from "../store/store"
import Image from "next/image"
import axios from "axios"

export const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode()
  const [city, setCity] = useState("")
  const { weatherInfo, setWeatherInfo } = useWeatherInfo()

  const handleCityInput = (e) => {
    setCity(e.target.value)
  }

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      getCityCoordinates(city)
    }
  }

  const getCityCoordinates = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      if (res.data.length == 0) {
        alert("City not found")
      } else {
        const { lat, lon } = res.data[0]

        fetchWeather(lat, lon)
      }
    } catch (err) {
      console.log("err", err)
    }
  }

  const getUserLocation = () => {
    console.log("Requesting user location...")

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        // console.log(latitude, longitude)
        fetchWeather(latitude, longitude)
      },
      (error) => {
        console.error("Error getting user location:", error)
        alert("Enable location access to use this feature ")
      }
    )
  }

  const fetchWeather = async (latitude, longitude) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      setWeatherInfo(res.data)
      console.log("res", res.data)
    } catch (err) {
      console.log("err", err)
    }
  }

  return (
    
    <div className="flex justify-between items-center py-3 px-2 max-w-[1200px] m-auto">
      <div className=" ">
        <Image
          src="/mirrAr-white.png"
          alt="logo"
          autoFocus
          width={80}
          height={80}
          // className="bg-gradient-to-r from-[#39009c] to-[#7b00a8] p-3 rounded-xl"
        />
      </div>
      <div className="flex items-center  ">
        <input
          type="text"
          placeholder="Search city..."
          className="outline-none  h-8 p-2 px-4 rounded-l-full text-[#d6d6d6] bg-[#212121] w-36 md:w-96"
          onChange={handleCityInput}
          onKeyDown={handleEnterKey}
          value={city}
        />
        <button className="search-button h-8 bg-[#212121] rounded-r-full pr-3 ">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png"
            className=" invert"
            alt="icon"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div
        className="current-location flex items-center gap-2 bg-[#6b5f87] rounded-full p-2 px-4"
        onClick={getUserLocation}
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/128/1549/1549624.png"
          className=" invert"
          alt="icon"
          width={18}
          height={18}
        />
        {/* <span className="c-l">Current location</span> */}
      </div>
    </div>
  )
}
