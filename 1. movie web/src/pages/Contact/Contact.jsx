/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
import Soon from "../../components/Soon/Soon";

const Contact = () => {
    useEffect(() => {
        document.title = "Movie web | Contact";
    }, []);

    return (
        <div>
            <Soon pageName="Contact" />
        </div>
    );
};

export default Contact;
