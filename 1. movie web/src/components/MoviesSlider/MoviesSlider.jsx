/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import classes from "./MoviesSlider.module.css";
import data from "../../data/data.json";
import MovieItem from "../MovieItem/MovieItem";
import Slider from "./../ui/Slider/Slider";

const MoviesSlider = () => {
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState("all");
    const [content, setContent] = useState([]);
    const [slides, setSlides] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setGenres(["all", ...data.genres]);
    }, []);

    useEffect(() => {
        if (genre === "all") {
            setContent(data.data);
        } else {
            setContent(
                data.data.filter((show) => {
                    return show.genre === genre;
                })
            );
        }
    }, [genre]);

    useEffect(() => {
        setIsLoading(true);
        let listItems = [];

        for (let i = 0; i < content.length; i += 12) {
            listItems.push(content.slice(i, i + 12));
        }

        let listArray = listItems.map((item, i) => {
            return (
                <div className={`${classes["movies-slide"]} slide`} key={i}>
                    <div className={`${classes["movies-slide-content"]}`}>
                        {item.map((show, j) => {
                            return <MovieItem key={j} show={show} />;
                        })}
                    </div>
                </div>
            );
        });

        setSlides(listArray);
        setIsLoading(false);
    }, [content]);

    const clickGenreHandler = (e) => {
        const value = e.target.dataset.value;
        if (value !== genre) {
            setGenre(e.target.dataset.value);
        }
    };

    return (
        <div className={`padding-x ${classes["movies-slider"]} movies-slider`}>
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

            {slides.length > 0 && !isLoading && (
                <Slider slides={slides} classPar="movies-slider" />
            )}
            {slides.length === 0 && (
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
    );
};

export default MoviesSlider;
