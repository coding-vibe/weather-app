import { useState } from 'react'
import reactLogo from 'assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import FetchWeatherData from 'components/FetchWeatherData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchWeatherData />
    </>
  )
}

export default App
