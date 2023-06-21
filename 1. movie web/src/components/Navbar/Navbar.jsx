/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LinkButton from "../ui/LinkButton/LinkButton";

import classes from "./Navbar.module.css";

import LogoWhite from "../../assets/logo-fff.png";
import LogoWhiteSmall from "../../assets/logo-fff-small.png";
import SearchIcon from "../../assets/search-icon.png";

const Navbar = ({ transparent, fixed }) => {
    const [showSearchForm, setShowSearchForm] = useState(false);
    const [showCloseBtnSearch, setShowCloseBtnSearch] = useState(false);
    const [openSmallNav, setOpenSmallNav] = useState(false);
    const [navSticky, setNavSticky] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    window.onscroll = () => {
        if (window.scrollY > 200) {
            setNavSticky(true);
        } else {
            setNavSticky(false);
        }
    };

    const buttonSearchHandler = () => {
        setShowSearchForm((pre) => !pre);
        setShowCloseBtnSearch((pre) => !pre);
    };

    const buttonSmallNavOpenHandler = () => {
        setOpenSmallNav(true);
    };

    const buttonSmallNavCloseHandler = () => {
        setOpenSmallNav(false);
    };

    const inputHandler = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <nav
            className={`${classes.navbar} ${navSticky ? classes.sticky : ""} ${
                fixed ? classes.fixed : ""
            }`}
            style={transparent ? { "--bg-navbar": "transparent" } : {}}
        >
            <div className={`${classes.logo}`}>
                <img
                    className={`${classes["logo-big"]}`}
                    src={LogoWhite}
                    alt="Logo"
                />
                <img
                    className={`${classes["logo-small"]}`}
                    src={LogoWhiteSmall}
                    alt="Logo"
                />
            </div>

            <ul className={`${classes["nav-links"]}`}>
                <li className={`${classes["nav-link"]}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => {
                            return isActive ? classes.active : "";
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={`${classes["nav-link"]}`}>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) => {
                            return isActive ? classes.active : "";
                        }}
                    >
                        Movies
                    </NavLink>
                </li>
                <li className={`${classes["nav-link"]}`}>
                    <NavLink
                        to="/tv"
                        className={({ isActive }) => {
                            return isActive ? classes.active : "";
                        }}
                    >
                        Tv
                    </NavLink>
                </li>
                <li className={`${classes["nav-link"]}`}>
                    <NavLink
                        to="/servies"
                        className={({ isActive }) => {
                            return isActive ? classes.active : "";
                        }}
                    >
                        Servies
                    </NavLink>
                </li>
                <li className={`${classes["nav-link"]}`}>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => {
                            return isActive ? classes.active : "";
                        }}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>

            <div className={`${classes["nav-btns"]}`}>
                <button
                    className={`${classes["nav-search"]} ${
                        showCloseBtnSearch ? classes["nav-search-close"] : ""
                    }`}
                    onClick={buttonSearchHandler}
                >
                    <img src={SearchIcon} alt="Search Icon" />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className={`${classes["close-icon"]}`}
                    >
                        <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" />
                    </svg>
                </button>
                <LinkButton className={`${classes["login-btn"]}`} to="/login">
                    Log In
                </LinkButton>

                <button
                    className={`${classes["nav-bars"]}`}
                    onClick={buttonSmallNavOpenHandler}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                    </svg>
                </button>
            </div>

            <form
                className={`${classes["search-form"]} ${
                    showSearchForm ? classes["search-form-show"] : ""
                }`}
            >
                <div>
                    <input
                        type="search"
                        onChange={inputHandler}
                        value={searchValue}
                        placeholder="Search..."
                    />
                    <Link
                        to={`/search?q=${searchValue}`}
                        className={`${classes["search-btn"]} ${
                            searchValue.trim().length === 0
                                ? classes["disabled-link"]
                                : ""
                        }`}
                    >
                        <img src={SearchIcon} alt="Search Icon" />
                    </Link>
                </div>
            </form>

            <nav
                className={`${classes["small-nav"]} ${
                    openSmallNav ? classes["small-nav-open"] : ""
                }`}
            >
                <div className={`${classes["small-nav-top"]}`}>
                    <div className={`${classes.logo}`}>
                        <img
                            className={`${classes["logo-big"]}`}
                            src={LogoWhite}
                            alt="Logo"
                        />
                        <img
                            className={`${classes["logo-small"]}`}
                            src={LogoWhiteSmall}
                            alt="Logo"
                        />
                    </div>

                    <button
                        className={`${classes["small-nav-close"]} `}
                        onClick={buttonSmallNavCloseHandler}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            className={`${classes["close-icon"]}`}
                        >
                            <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" />
                        </svg>
                    </button>
                </div>

                <ul className={`${classes["nav-links"]}`}>
                    <li className={`${classes["nav-link"]}`}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => {
                                return isActive ? classes.active : "";
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={`${classes["nav-link"]}`}>
                        <NavLink
                            to="/movies"
                            className={({ isActive }) => {
                                return isActive ? classes.active : "";
                            }}
                        >
                            Movies
                        </NavLink>
                    </li>
                    <li className={`${classes["nav-link"]}`}>
                        <NavLink
                            to="/tv"
                            className={({ isActive }) => {
                                return isActive ? classes.active : "";
                            }}
                        >
                            Tv
                        </NavLink>
                    </li>
                    <li className={`${classes["nav-link"]}`}>
                        <NavLink
                            to="/servies"
                            className={({ isActive }) => {
                                return isActive ? classes.active : "";
                            }}
                        >
                            Servies
                        </NavLink>
                    </li>
                    <li className={`${classes["nav-link"]}`}>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => {
                                return isActive ? classes.active : "";
                            }}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <LinkButton className={`${classes["login-btn"]}`} to="/login">
                    Log In
                </LinkButton>
            </nav>
        </nav>
    );
};

export default Navbar;
