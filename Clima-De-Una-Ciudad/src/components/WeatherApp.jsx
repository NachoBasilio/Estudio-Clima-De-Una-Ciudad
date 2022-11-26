import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo'


export default function WatherApp() {
  const [weather, setWeather] = useState(null)

  useEffect(()=>{
    loadInfo()
  }, [])

  useEffect(()=>{
    document.title = `Clima | ${weather?.location.name ?? ''}`
  },[weather])

  async function loadInfo(city = "Charata"){
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
      <WeatherMainInfo weather={weather}/>
    </>
  )
}
