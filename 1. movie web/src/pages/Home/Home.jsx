/* eslint-disable no-unused-vars */
import { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import LinkButton from "../../components/ui/LinkButton/LinkButton";
import Slider from "./../../components/ui/Slider/Slider";
import MoviesSlider from "./../../components/MoviesSlider/MoviesSlider";

import classes from "./Home.module.css";
import SlideImage1 from "../../assets/home-slide-1.jpg";
import SlideImage2 from "../../assets/home-slide-2.jpg";
import SlideImage3 from "../../assets/home-slide-3.jpg";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
        document.title = "Movie web | Home";
    }, []);

    const slides = [
        <div
            key="1"
            className={`${classes.slide} slide`}
            style={{ backgroundImage: `url(${SlideImage1})` }}
        >
            <h2 className={`${classes["slide-heading"]}`}>
                OUR SPECIAL{" "}
                <span className={`${classes["colored-word"]}`}>MOVIE</span>
            </h2>

            <p className={`${classes["slide-content"]}`}>
                You can now register on our site and enjoy watching the events
                of movies and series, action, horror, cartoons, wars, practical
                fiction and everything new to us.
            </p>

            <LinkButton to="/movies">Watch Now</LinkButton>
        </div>,
        <div
            key="2"
            className={`${classes.slide} slide`}
            style={{ backgroundImage: `url(${SlideImage2})` }}
        >
            <h2 className={`${classes["slide-heading"]}`}>
                OUR SPECIAL{" "}
                <span className={`${classes["colored-word"]}`}>series</span>
            </h2>

            <p className={`${classes["slide-content"]}`}>
                You can now register on our site and enjoy watching the events
                of movies and series, action, horror, cartoons, wars, practical
                fiction and everything new to us.
            </p>

            <LinkButton to="/tv">Watch Now</LinkButton>
        </div>,
        <div
            key="3"
            className={`${classes.slide} slide`}
            style={{ backgroundImage: `url(${SlideImage3})` }}
        >
            <h2 className={`${classes["slide-heading"]}`}>
                OUR SPECIAL{" "}
                <span className={`${classes["colored-word"]}`}>MOVIE</span>
            </h2>

            <p className={`${classes["slide-content"]}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                ipsum reprehenderit non architecto, dignissimos minima facilis
                voluptatem corporis maxime doloremque dolores, perspiciatis
                blanditiis? Ab recusandae harum id dolores omnis repellat?
            </p>

            <LinkButton to="/servies">Watch Now</LinkButton>
        </div>,
    ];

    return (
        <div>
            <Navbar transparent={true} fixed={true} />
            <div className="hero">
                <Slider slides={slides} classPar="hero" />
            </div>
            <MoviesSlider />
            <DownloadApp />
            <Footer />
        </div>
    );
};

export default Home;
