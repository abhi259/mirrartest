import Image from "next/image"
import React from "react"
import { TempDetails } from "./highlightsComponents/TempDetails"
import { SunriseSunset } from "./highlightsComponents/SunriseSunset"
import { Pressure } from "./highlightsComponents/Pressure"
import { Humidity } from "./highlightsComponents/Humidity"
import { Visibility } from "./highlightsComponents/Visibility"
import { WindSpeed } from "./highlightsComponents/WindSpeed"

export const Highlights = () => {
  return (
    <div
      className=" rounded-2xl  p-2 bg-cover  "
      style={{ backgroundImage: 'url("/bg-2.jpg")' }}
    >
      <h1 className="font-bold text-sm m-3">{"Today's Highlights"}</h1>

      <div className=" flex flex-wrap  ">
        <TempDetails />
        <SunriseSunset />
        <Pressure />
        <Humidity />
        <Visibility />
        <WindSpeed />
      </div>
    </div>
  )
}
