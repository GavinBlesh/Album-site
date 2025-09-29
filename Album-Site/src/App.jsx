import { useState } from 'react'
import Heading from './Heading'
import Button from './Button'
import Line from './Line'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading />
      <Button />
      <Line />
    </>
  )
}

export default App
