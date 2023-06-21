/* eslint-disable no-unused-vars */
import React from "react";

import classes from "./Footer.module.css";

import LogoBlack from "../../assets/logo-000.png";
import Facebook from "../../assets/logos_facebook.png";
import Instagram from "../../assets/icons_instagram.png";
import Twitter from "../../assets/icons_twitter.png";

const Footer = () => {
    return (
        <footer className={`${classes.footer} padding-x`}>
            <div className={`${classes.logo}`}>
                <img src={LogoBlack} alt="Logo" />
            </div>
            <div className={`${classes.contact}`}>
                <ul>
                    <li>
                        <a href="#">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Twitter} alt="Twitter" />
                        </a>
                    </li>
                </ul>
                <a href="#">movie@gmail.com</a>
            </div>
        </footer>
    );
};

export default Footer;
