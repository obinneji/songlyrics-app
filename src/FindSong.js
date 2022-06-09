import React, { useState } from 'react'
import './Body.css'
import  Axios  from 'axios';


const FindSong = () => {
    const [songName, setSongName] = useState("")
     const [artistName,setArtistName] = useState("")
     const [lyric, setLyric] = useState('')

    function serchLyrics () {
      
const options = {
  url: `https://lyrics-plus.p.rapidapi.com/lyrics/${songName}/${artistName}`,
  headers: {
    'X-RapidAPI-Host': 'lyrics-plus.p.rapidapi.com',
    'X-RapidAPI-Key': '7c45dd23ffmshf8b258d55d000fcp1878fajsnb1d58b71ea5e'
  }
};

Axios.request(options).then(function (response) {
	console.log(response.data);
  const data = response.data
  setSongName(data.name)
  setLyric(data.lyrics)
}).catch(function (error) {
	console.error(error);
});

    }
  return (
    <div>
    <div className='search-unit'>
    <input  type="text" placeholder='Enter Artist Name' onChange={(e)=>{setArtistName(e.target.value)}} />
     <input  type="text" placeholder='Enter Song Name' onChange={(e) => {setSongName(e.target.value)}} />
     <button className= "Search-btn" onClick= { () => serchLyrics()}>Search</button>
    </div>
      

      <div className='result'>
      
      <h3 className='title'>Lyrics for {songName}</h3>
      <pre>{lyric}</pre>
      </div>
    </div>
  )
}
export default FindSong
