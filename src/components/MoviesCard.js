import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, CONSOLE_LOG } from '../constants';
import './style.css'; // Import your CSS file here
import Loader from '../Loader';
import { ToastContainer, toast } from 'react-toastify';

export default function MoviesCard({ searchTerm }) {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    const stopLoading = () => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const viewImage = (doc) => {
        window.open(doc, "_blank")
    }

    useEffect(() => {
        stopLoading();
        if (searchTerm === "undefined") {
            searchTerm = "";
        }
        const url = `${API_URL}&t=${searchTerm}`;
        setLoading(true);
        axios.get(url)
            .then((response) => {
                if (response.request.status === 200) {
                    CONSOLE_LOG("response--->", response.data);
                    setMovie(response.data);
                }
                else {
                    CONSOLE_LOG("", "Error Fetching data");
                }
            })
            .catch((error) => {
                CONSOLE_LOG("Error--->", error);
            });
    }, [searchTerm]);

    return (
        <>
            <ToastContainer />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {movie.Response === "False" ? (
                        <div className="not-found-message">
                        <h1>Movie Not Found</h1>
                      </div>
                    ) : (
                        <div className="movie-details">
                            <div className="movie-poster">
                                {movie.Poster === "N/A" ? (
                                    <b>--No Poster--</b>
                                    ) : (
                                        <img src={movie.Poster} alt={movie.Title} onClick={()=>viewImage(movie.Poster)} />
                                        )}
                                <p><strong>IMDb Votes:</strong> {movie.imdbVotes}</p>
                                <p><strong>IMDb ID:</strong> {movie.imdbID}</p>
                                <p><strong>Type:</strong> {movie.Type}</p>
                                <p><strong>DVD:</strong> {movie.DVD}</p>
                                <p><strong>Box Office:</strong> <i className='red'>{movie.BoxOffice}</i></p>
                                <p><strong>Production:</strong> {movie.Production}</p>
                                <p><strong>Website:</strong> {movie.Website}</p>
                            </div>
                            <div className="movie-info">
                                <h2>{movie.Title}</h2>
                                <p><strong>Year:</strong> {movie.Year}</p>
                                <p><strong>Rated:</strong> {movie.Rated}</p>
                                <p><strong>Runtime:</strong> {movie.Runtime}</p>
                                <p><strong>Genre:</strong> {movie.Genre}</p>
                                <p><strong>Director:</strong> {movie.Director}</p>
                                <p><strong>Writer:</strong> {movie.Writer}</p>
                                <p><strong>Actors:</strong> {movie.Actors}</p>
                                <p><strong>Plot:</strong> {movie.Plot}</p>
                                <p><strong>Language:</strong> {movie.Language}</p>
                                <p><strong>Country:</strong> {movie.Country}</p>
                                <p><strong>Awards:</strong> {movie.Awards}</p>
                                <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
                                <p><strong>Metascore:</strong> {movie.Metascore}</p>
                                <div className="ratings">
                                    {/* {movie.Ratings.map((rating, index) => (
                                        <div key={index}>
                                            <strong>{rating.Source}:</strong> {rating.Value}
                                        </div>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
