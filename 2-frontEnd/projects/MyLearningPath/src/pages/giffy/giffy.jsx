import React, {useEffect, useState} from "react";
import getGifs from "../../services/getGif";
import Searcher from "../../components/searcher";
import GifList from "./gifList";
import '../../assets/giffy.css';

const searchPlaceholder = 'Dogs, Cats, Cars, etc...'

function Giffy({params}) {
  const {search} = params;
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState(search)

  useEffect( function () {getGifs({keyword}).then(gifs => setGifs(gifs))}, [keyword]);

  return (
    <div className="giffy">
      <h1>Giffy</h1>
      <Searcher keyword={keyword} setKeyword={setKeyword} placeholder={searchPlaceholder}/>
      <GifList gifs={gifs}/>
    </div>
  );
}

export default Giffy;