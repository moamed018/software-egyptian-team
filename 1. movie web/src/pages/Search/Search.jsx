/* eslint-disable no-unused-vars */
import React, { Fragment, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import classes from "./Search.module.css";
import SearchIcon from "../../assets/search-icon.png";
import data from "../../data/data.json";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MovieItem from "./../../components/MovieItem/MovieItem";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState([]);

    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");

    useEffect(() => {
        if (q?.trim().length > 0) {
            setSearchValue(q);
            setSearchInput(q);
        }
    }, [q]);

    useEffect(() => {
        setIsLoading(true);
        if (searchValue.trim().length > 0) {
            setContent(
                data.data.filter((show) => {
                    return (
                        show.title
                            ?.toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                        show.name
                            ?.toLowerCase()
                            .includes(searchValue.toLowerCase())
                    );
                })
            );
        }
        setIsLoading(false);
    }, [searchValue]);
    console.log(classes);

    const inputHandler = (e) => {
        setSearchInput(e.target.value);
    };

    const clickHandler = (e) => {
        if (searchInput.trim().length > 0) {
            setSearchValue(searchInput);
        }
    };

    const formHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Fragment>
            <Navbar />
            <div className={`${classes.search} padding-x`}>
                <h1 className={`${classes.heading}`}>Search</h1>
                <form
                    className={`${classes["search-form"]}`}
                    onSubmit={formHandler}
                >
                    <div>
                        <input
                            type="search"
                            onChange={inputHandler}
                            value={searchInput}
                            placeholder="Search..."
                        />
                        <button
                            className={`${classes["search-btn"]} 
                            ${
                                searchInput.trim().length === 0
                                    ? classes["disabled-link"]
                                    : ""
                            }
                            `}
                            onClick={clickHandler}
                        >
                            <img src={SearchIcon} alt="Search Icon" />
                        </button>
                    </div>
                </form>

                {content.length > 0 && !isLoading && (
                    <div className={`${classes["content"]}`}>
                        {content.map((show, i) => {
                            return <MovieItem key={i} show={show} />;
                        })}
                    </div>
                )}
                {content.length === 0 && (
                    <div className={`${classes["no-shows"]}`}>
                        <h2>Opps...</h2>
                        <p>
                            No Shows like <span>{searchValue}</span>
                        </p>
                    </div>
                )}
                {isLoading && (
                    <div className={`${classes["loading"]}`}>
                        <h2>Loading...</h2>
                    </div>
                )}
            </div>
            <Footer />
        </Fragment>
    );
};

export default Search;
