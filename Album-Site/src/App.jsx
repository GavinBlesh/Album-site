import { useState, useCallback } from 'react'
import Heading from './Heading'
import Button from './Button'
import Line from './Line'
import RecHeading from './RecHeading'
import CallApi from './CallApi'
import GetAlbumCover from './GetAlbumCover'
import './App.css'
import Artist from './Artist'
import Tracklist from './Tracklist'

function App() {
  const [count, setCount] = useState(0);
  const [albumTitle, setAlbumTitle] = useState(null);
  const [albumCover, setAlbumCover] = useState(null);
  const [artistName, setArtistName] = useState(null);
  const [tracklist, setTrackList] = useState(null);
  const [albumYear, setAlbumYear] = useState(null);

  const handleAlbumFound = useCallback((title, cover, artist, tracklist, year) => {
    setAlbumTitle(title);
    setAlbumCover(cover);
    setArtistName(artist);
    setTrackList(tracklist);
    setAlbumYear(year);
  }, []);

  const handleManualRoll = useCallback(() => {
    setAlbumTitle(null);
    setAlbumCover(null);
    setArtistName(null);
    setTrackList([]);
    setAlbumYear(null);
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
      <Tracklist name={tracklist}/>
      
    </div>
  )
}

export default App
