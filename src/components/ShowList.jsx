import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ShowCard from './ShowCard';
import SearchIcon from "../assets/search.svg"

const ShowList = () => {
    const [shows, setShows] = useState([]);
    const [serachTerm, setSearchTerm] = useState("");

    const searchShows = async (title) => {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${title}`);
        const data = await response.json();

        setShows(data);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchShows(serachTerm);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                setShows(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>

            <div className="search">
                <input placeholder="Search for Shows"
                    value={serachTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                />

                <img src={SearchIcon} alt="search" onClick={() => searchShows(serachTerm)} />
            </div>
            <div className="container">
                {shows.map((show) => (
                    <ShowCard show={show} key={show.show.id} />
                ))}
            </div>


        </>
    )
}

export default ShowList