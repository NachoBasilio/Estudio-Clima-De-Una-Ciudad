import React from 'react'
import WatherApp from './components/WatherApp'

export default function App() {
  console.log(import.meta.env.VITE_SOME_KEY) 
  return (
    <>
    <WatherApp/>
    </>
  )
}
