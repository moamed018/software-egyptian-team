/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MovieItem from "../../components/MovieItem/MovieItem";

import classes from "./Tv.module.css";
import data from "../../data/data.json";
import Footer from "../../components/Footer/Footer";

const Tv = () => {
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState("all");
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setGenres(["all", ...data.genres]);

        document.title = "Movie web | Tv";
    }, []);

    useEffect(() => {
        setIsLoading(true);
        if (genre === "all") {
            setContent(
                data.data.filter((show) => {
                    return show.type === "tv";
                })
            );
        } else {
            setContent(
                data.data.filter((show) => {
                    return show.type === "tv" && show.genre === genre;
                })
            );
        }
        setIsLoading(false);
    }, [genre]);

    const clickGenreHandler = (e) => {
        const value = e.target.dataset.value;
        if (value !== genre) {
            setGenre(e.target.dataset.value);
        }
    };

    return (
        <div>
            <Navbar />
            <div className={`padding-x ${classes["tv"]}`}>
                <div className={`${classes["genres-btns"]}`}>
                    {genres.map((g, i) => {
                        return (
                            <button
                                key={i}
                                data-value={g}
                                className={`${classes["genre-btn"]} ${
                                    genre === g ? classes["active"] : ""
                                }`}
                                onClick={clickGenreHandler}
                            >
                                {g}
                            </button>
                        );
                    })}
                </div>

                {content.length > 0 && !isLoading && (
                    <div className={`${classes["tv-content"]}`}>
                        {content.map((show, i) => {
                            return <MovieItem key={i} show={show} />;
                        })}
                    </div>
                )}
                {content.length === 0 && (
                    <div className={`${classes["no-shows"]}`}>
                        <h2>Sorry</h2>
                        <p>No Shows is here</p>
                    </div>
                )}
                {isLoading && (
                    <div className={`${classes["loading"]}`}>
                        <h2>Loading...</h2>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Tv;
