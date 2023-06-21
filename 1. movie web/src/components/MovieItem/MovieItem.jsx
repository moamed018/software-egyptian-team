/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import classes from "./MovieItem.module.css";
import { Link } from "react-router-dom";

const MovieItem = ({ show }) => {
    const urlImage = `https://image.tmdb.org/t/p/w200${show.poster_path}`;

    let dateNum = "";
    let dateText = "";
    let colorVote = "";

    if (show.type === "movie") {
        dateNum = show.release_date;
        dateText = "release date:";
    } else {
        dateNum = show.first_air_date;
        dateText = "first air date:";
    }

    if (show.vote_average >= 8) {
        colorVote = "#0f0";
    } else if (show.vote_average >= 6.5) {
        colorVote = "#fbff00";
    } else if (show.vote_average >= 5) {
        colorVote = "#ffbb00";
    } else if (show.vote_average >= 3) {
        colorVote = "#f00";
    } else {
        colorVote = " #642102";
    }

    return (
        <Link
            className={`${classes.movie}`}
            style={{
                backgroundImage: `url(${urlImage})`,
            }}
            to={show.type === "movie" ? `/movies/${show.id}` : `/tv/${show.id}`}
        >
            <div
                className={`${classes.content}`}
                style={{ "--color-vote": colorVote }}
            >
                <p className={`${classes.vote}`}>{show.vote_average}</p>

                <div className={`${classes["content-bottom"]}`}>
                    <ul>
                        <li>
                            Type: <span>{show.type}</span>
                        </li>
                        <li>
                            genre: <span>{show.genre}</span>
                        </li>
                        <li>
                            language: <span>{show.original_language}</span>
                        </li>
                        <li>
                            {`${dateText} `}
                            <span>{dateNum}</span>{" "}
                        </li>
                    </ul>

                    <h3 className={`${classes.title}`}>
                        {show.title ? show.title : show.name}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default MovieItem;
