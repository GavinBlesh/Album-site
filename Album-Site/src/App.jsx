import { useState, useCallback } from 'react'
import Heading from './Heading'
import Button from './Button'
import Line from './Line'
import RecHeading from './RecHeading'
import CallApi from './CallApi'
import GetAlbumCover from './GetAlbumCover'
import './App.css'
import Artist from './Artist'

function App() {
  const [count, setCount] = useState(0);
  const [albumTitle, setAlbumTitle] = useState(null);
  const [albumCover, setAlbumCover] = useState(null);
  const [artistName, setArtistName] = useState(null);

  const handleAlbumFound = useCallback((title, cover, artist) => {
    setAlbumTitle(title);
    setAlbumCover(cover);
    setArtistName(artist);
  }, []);

  const handleManualRoll = useCallback(() => {
    setAlbumTitle(null);
    setAlbumCover(null);
    setArtistName(null);
    setCount(prev => prev + 1);
  }, [])

  return (
    <div>
      <Heading />
      <Button onRoll={handleManualRoll}/>
      <Line />
      <RecHeading />
      <CallApi trigger={count} onAlbumFound={handleAlbumFound} onRetry={handleManualRoll}/>
      <GetAlbumCover coverUrl={albumCover} />
      <Artist name={artistName} />
    </div>
  )
}

export default App
