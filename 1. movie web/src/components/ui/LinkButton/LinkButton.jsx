/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import classes from "./LinkButton.module.css";

const LinkButton = ({ children, style, to, className }) => {
    return (
        <Link
            to={to}
            style={style}
            className={`${classes["link-button"]} ${className}`}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
