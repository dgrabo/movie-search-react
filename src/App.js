import React from "react";
import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

// 4dd3c08d
// 'YOUR KEY'

const API_URL = 'http://www.omdbapi.com?apikey= YOUR KEY'

const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${        API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');

    }, [])

    return(
        <div className="app">
            <h1>CineSpot</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <div classname="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;