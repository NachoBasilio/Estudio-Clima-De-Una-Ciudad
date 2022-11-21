import React from 'react'
import WeatherApp from './components/WeatherApp'

export default function App() {
  console.log(import.meta.env.VITE_SOME_KEY) 
  return (
    <>
    <WeatherApp/>
    </>
  )
}
