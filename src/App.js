import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";


import './App.css';
import SearchIcon from './search.svg';

// 4dd3c08d
// 'YOUR KEY'

const API_URL = 'http://www.omdbapi.com?apikey=4dd3c08d'

const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const [movies, setMovies] = useState([]);

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
                <MovieCard movie1={movie1}/>
            </div>
        </div>
    );
}

export default App;