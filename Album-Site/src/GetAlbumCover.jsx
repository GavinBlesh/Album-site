import { useState, useEffect } from 'react';

export default function GetAlbumCover() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = '';

    fetch(`https://api.discogs.com/releases/${id}`, {
      headers: {
        'Authorization': `Discogs token=${token}`,
        'User-Agent': 'MyTestApp/1.0' 
      }
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <callapi className='callapi'>{data.title}</callapi> : 'Loading...'}
    </div>
  );
}
