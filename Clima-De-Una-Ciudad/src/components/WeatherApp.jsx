import React, { useState } from 'react'
import WeatherForm from './WeatherForm'


export default function WatherApp() {
  const [weather, setWeather] = useState(null)

  async function loadInfo(city = "Santa Fe"){
    try {
      const request = await fetch(`${import.meta.env.VITE_SOME_URL}&key=${import.meta.env.VITE_SOME_KEY}&q=${city}`)
      const json = await request.json()

      setWeather(json)

    } catch (error) {
      
    }
  }

  function handleChangeCity(city){
    setWeather(null)
    loadInfo(city)
  }

  return (
    <>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <div>{weather?.current.temp_c}</div>
    </>
  )
}
