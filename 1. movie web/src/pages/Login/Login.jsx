/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import classes from "./Login.module.css";

import Bg from "../../assets/bg-login.jpg";
import Logo from "../../assets/logo-fff.png";
import Facebook from "../../assets/facebook-login.png";
import Google from "../../assets/google-login.png";

const Login = () => {
    useEffect(() => {
        document.title = "Movie web | Login";
    }, []);

    return (
        <div
            className={`${classes.login}`}
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className={`${classes.logo}`}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={`${classes["login-content"]}`}>
                <h2>Log in</h2>
                <form>
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <div className={`${classes["links-form"]}`}>
                        <div className={`${classes["remember"]}`}>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="#">Forgot password</a>
                    </div>

                    <button>Log in</button>
                </form>

                <div className={`${classes["new-user"]}`}>
                    <p>You do not have an Account?</p>
                    <a href="#">Sign Up Here</a>
                </div>

                <div className={`${classes["icons"]}`}>
                    <a href="#">
                        <img src={Facebook} alt="icon" />
                    </a>
                    <a href="#">
                        <img src={Google} alt="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
