import React from "react";
import '../assets/searcher.css';

function Searcher({placeholder, setKeyword}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword(e.target[0].value);

    }

    return (
        <div className="searcher">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={placeholder}/>
                <button type="submit" className="btn">Search</button>
            </form>
        </div>
    )
}

export default Searcher;