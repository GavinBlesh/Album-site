//Formatting/Information Sourced from https://builtin.com/software-engineering-perspectives/react-api
//and the Discogs API Documentation

import { useState, useEffect } from 'react';

export default function CallApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const id = (Math.floor(Math.random() *10000000) + 1);
    const token = import.meta.env.VITE_DISCOGS_KEY;

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
      {data ? <div className='callapi'>{data.title}</div> : 'Loading...'}
    </div>
  );
}
