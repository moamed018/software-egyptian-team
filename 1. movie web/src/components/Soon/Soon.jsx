/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import classes from "./Soon.module.css";

import Logo from "../../assets/logo-000.png";
import SoonImage from "../../assets/soon.jpg";
import LinkButton from "./../ui/LinkButton/LinkButton";

const Soon = ({ pageName }) => {
    return (
        <div className={`${classes.soon}`}>
            <div className={`${classes.logo}`}>
                <img src={Logo} alt="Logo" />
            </div>
            <h1>Coming Soon</h1>
            <p>
                This page (<span>{pageName} Page</span>) is under construction
            </p>

            <figure>
                <img src={SoonImage} alt="image" />
                <figcaption>
                    Source:{" "}
                    <a href="https://www.istockphoto.com/vector/website-construction-line-style-illustration-gm931042070-255214037?phrase=website+under+construction&searchscope=image%2Cfilm">
                        iStock
                    </a>
                </figcaption>
            </figure>

            <LinkButton to="/">Back to Home</LinkButton>
        </div>
    );
};

export default Soon;
