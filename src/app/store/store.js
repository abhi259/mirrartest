import { create } from "zustand"

export const useDarkMode = create((set) => ({
  darkMode: true,
  setDarkMode: (payload) => set({ darkMode: payload }),
}))

export const useCity = create((set) => ({
  city: {},
  setCity: (payload) => set({ city: payload }),
}))

export const useWeatherInfo = create((set) => ({
  weatherInfo: "",
  setWeatherInfo: (payload) => set({ weatherInfo: payload }),
}))
