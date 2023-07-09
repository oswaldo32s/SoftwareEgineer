import React from "react";

function Gif({url, title, id}) {
    return (
      <div className="gif">
        <h5>{title}</h5>
        <img src={url} alt={title} key={id}/>
      </div>
    )
  }

export default Gif;