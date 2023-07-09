import React from "react";
import Gif from "./gif";

function GifList({gifs}) {
    return (
      <div className="gifs">
        {gifs.map((gif) => (<Gif url={gif.url} title={gif.title} key={gif.id} id={gif.id}/>))}
      </div>
    )
  }

export default GifList;