import React, { useState } from 'react'
import WeatherForm from './WeatherForm'


export default function WatherApp() {
  const [weather, setWeather] = useState(null)

  async function loadInfo(city = "London"){
    try {
      const request = await fetch(`${import.meta.env.VITE_SOME_URL}&key=${import.meta.env.VITE_SOME_KEY}&q=${city}`)
      const json = await request.json()
      console.log(json)
    } catch (error) {
      
    }
  }

  function handleChangeCity(city){
    setWeather(null)
    loadInfo()
  }

  return (
    <>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <div>Info</div>
    </>
  )
}
