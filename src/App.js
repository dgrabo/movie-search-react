import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";


import './App.css';
import SearchIcon from './search.svg';

// 'YOUR KEY'

const API_URL = 'http://www.omdbapi.com?apikey=YOUR_KEY'

const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
         
    }

    useEffect(() => {
        searchMovies('Spiderman');

    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        searchMovies(searchTerm);
    }

    return(
        <div className="app">
            <h1>CineSpot</h1>

            <form onSubmit={handleOnSubmit} className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </form>
             

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movie found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;