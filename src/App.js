import React from "react";
import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

// 4dd3c08d

const API_URL = 'http://www.omdbapi.com?apikey=4dd3c08d'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');

    }, [])

    return(
        <div className='app'>
            <h1>CineSpot</h1>
        </div>
    );
}

export default App