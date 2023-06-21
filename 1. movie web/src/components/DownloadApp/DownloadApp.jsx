/* eslint-disable no-unused-vars */
import React from "react";

import classes from "./DownloadApp.module.css";

import Phone from "../../assets/phone.png";
import IconDownload from "../../assets/icon-download.png";
import GooglePlayIcon from "../../assets/google-play-icon.png";
import AppleStoreIcon from "../../assets/apple-store-icon.png";

const DownloadApp = () => {
    return (
        <div className={`${classes.download} padding-x`}>
            <div className={`${classes.content}`}>
                <h2>Download the app and enjoy now</h2>
                <p>
                    Download the application and enjoy watching the events of
                    movies and series in the highest quality.
                </p>
                <div className={`${classes.icon}`}>
                    <img src={IconDownload} alt="Download icon" />
                </div>
                <div className={`${classes.links}`}>
                    <a href="#" className={`${classes["google-link"]}`}>
                        Google play
                        <img src={GooglePlayIcon} alt="Google Play Icon" />
                    </a>
                    <a href="#" className={`${classes["ios-link"]}`}>
                        Apple store
                        <img src={AppleStoreIcon} alt="Apple Store Icon" />
                    </a>
                </div>
            </div>
            <div className={`${classes.img}`}>
                <img src={Phone} alt="Phone" />
            </div>
        </div>
    );
};

export default DownloadApp;
