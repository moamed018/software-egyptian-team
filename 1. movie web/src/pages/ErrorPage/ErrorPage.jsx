/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import classes from "./ErrorPage.module.css";

import Logo from "../../assets/logo-000.png";
import Image404 from "../../assets/404-page.gif";
import LinkButton from "../../components/ui/LinkButton/LinkButton";

const ErrorPage = () => {
    useEffect(() => {
        document.title = "Movie web | 404";
    }, []);

    return (
        <div className={`${classes["error-page"]}`}>
            <div className={`${classes.logo}`}>
                <img src={Logo} alt="Logo" />
            </div>
            <h1>Here is nothing</h1>
            <p>Whatever you expect is not here</p>

            <figure>
                <img src={Image404} alt="image" />
                <figcaption>
                    Source:{" "}
                    <a href="https://www.svgator.com/blog/404-page-svg-animations/">
                        svgator
                    </a>
                </figcaption>
            </figure>

            <LinkButton to="/">Go to Home</LinkButton>
        </div>
    );
};

export default ErrorPage;
