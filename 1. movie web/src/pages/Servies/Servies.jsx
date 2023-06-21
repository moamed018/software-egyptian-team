/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
import Soon from "../../components/Soon/Soon";

const Servies = () => {
    useEffect(() => {
        document.title = "Movie web | Servies";
    }, []);

    return <Soon pageName="Servies" />;
};

export default Servies;
