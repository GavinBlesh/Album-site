//Formatting/Information Sourced from https://builtin.com/software-engineering-perspectives/react-api
//and the Discogs API Documentation

import { useState, useEffect } from 'react';

export default function CallApi({ trigger, onAlbumFound, onRetry }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    const id = (Math.floor(Math.random() *10000000) + 1);
    const token = import.meta.env.VITE_DISCOGS_KEY;

    fetch(`https://api.discogs.com/releases/${id}`, {
      headers: {
        'Authorization': `Discogs token=${token}`,
        'User-Agent': 'MyTestApp/1.0' 
      }
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
        const artist = json.artists && json.artists.length > 0 ? json.artists[0].name : null;
        const tracks = json.tracklist || [];
        const year = json.year || "";
        const genre = json.genres || [];
        if (json.title && json.images && json.images.length > 0 && artist) {
          onAlbumFound(json.title, json.images[0].resource_url, artist, tracks, year, genre);
        } else {
          onRetry();
        }
  })
      .catch(error => {
        console.error(error);
        onAlbumFound(null, null, null, null, null, null);
      })
  }, [trigger, onAlbumFound, onRetry]);

  return (
    <div>
      {data && data.title ? <div className='callapi'>{data.title} ({data.year})</div> : 'Loading...'}
    </div>
  );
}
