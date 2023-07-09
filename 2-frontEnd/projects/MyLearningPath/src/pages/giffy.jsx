import React, {useEffect, useState} from "react";
import getGifs from "../services/getGif";

function Gif({url, title, id}) {
  return (
    <div className="gif">
      <h4>{title}</h4>
      <img src={url} alt={title} key={id}/>
    </div>
  )
}

function GifList({gifs}) {
  return (
    <div className="gifs">
      {gifs.map((gif) => (<Gif url={gif.url} title={gif.title} id={gif.id}/>))}
    </div>
  )
}

function Giffy() {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState('oso')

  useEffect( function () {getGifs({keyword}).then(gifs => setGifs(gifs))}, [keyword]);

  return (
    <div> 
      <h1>Giffy</h1>
      <button onClick={() => setKeyword('panda')}>Panda</button>
      <GifList gifs={gifs}/>
    </div>
  );
}

export default Giffy;