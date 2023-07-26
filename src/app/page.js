"use client"

import axios from "axios"
import { Inter } from "next/font/google"
import { Navbar } from "./components/Navbar"
import { CurrentWeather } from "./components/CurrentWeather"
import { Highlights } from "./components/Highlights"
import { Forecast } from "./components/Forecast"
import { useEffect, useState } from "react"
import { useWeatherInfo } from "./store/store"

import { Rubik } from "@next/font/google"

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
})

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const { weatherInfo } = useWeatherInfo()

  return (
    <div
      className={`p-3 bg-[#1b1b1b] min-h-screen ${rubik.variable} font-rubik`}
    >
      <Navbar />
      {weatherInfo && (
        <>
          <div className="flex flex-col gap-3 md:hidden ">
            <CurrentWeather />
            <Highlights />
            <Forecast />
          </div>
          <div className="  gap-3 justify-center hidden md:flex">
            <div className="flex flex-col md:w-[450px]  gap-3">
              <CurrentWeather />
              <Forecast />
            </div>
            <div className=" md:w-[450px] md:max-w-[800px]  grow">
              <Highlights />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
