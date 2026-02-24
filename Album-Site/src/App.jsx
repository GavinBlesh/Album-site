import { useState } from 'react'
import Heading from './Heading'
import Button from './Button'
import Line from './Line'
import RecHeading from './RecHeading'
import CallApi from './CallApi'
import GetAlbumCover from './GetAlbumCover'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Heading />
      <Button />
      <Line />
      <RecHeading />
      <CallApi />
      <GetAlbumCover />
    </div>
  )
}

export default App
