import { useState, useEffect } from 'react';

export default function GetAlbumCover() {
  const [data, setData] = useState(null);
  const[error, setERror] = useState(null);

  useEffect(() => {
    const getCover = async () => {
      const albumTitle = (document.querySelector('.callapi')).innerText.trim();
      if (!albumTitle){
        return;
      }
      const token = import.meta.env.VITE_DISCOGS_KEY;
      const searchURL = `https://api.discogs.com/database/search?q=${encodeURIComponent(albumTitle)}&type=release&per_page=1`;

      try {
        const response = await fetch(searchURL, {
          headers: {
            'Authorization': `Discogs token=${token}`,
            'User-Agent': 'MyTestApp/1.0'
          }
        })
        const json = await response.json();

        //Takes first result
        if (json.results ** json.results.length > 0){
          setData(json.results[0]);
        } else {
          setError("No cover found");
        }

      } catch (error){
        console.error(error);
      }
    }
    const interval = setInterval(() => {
      const title = document.querySelector('.callapi');
      if (title && title.innerText.trim() !== 'Loading...'){
        getCover();
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {data ? <img className="album-cover" src={data.cover_image} alt="cover" /> : 'Loading...'}
    </div>
  );
}
