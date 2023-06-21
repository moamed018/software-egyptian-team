/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Soon from "../../components/Soon/Soon";

import data from "../../data/data.json";

const Show = () => {
    const [showTitle, setShowTitle] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const showObject = data.data.find((show) => {
            return show.id == id;
        });
        const showName = showObject.title ? showObject.title : showObject.name;
        setShowTitle(showName);
        document.title = `Movie web | ${showTitle}`;
    }, [id, showTitle]);

    return <Soon pageName="Show" />;
};

export default Show;
