/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import classes from "./Slider.module.css";

const Slider = ({ slides, color, bgColor, activeColor, classPar }) => {
    const slidesAll = document.querySelectorAll(`.${classPar} .slide`);
    const [curSlide, setCurSlide] = useState(0);
    const maxSlide = slides.length;

    useEffect(() => {
        setCurSlide(0);
    }, [slides]);

    useEffect(() => {
        if (slidesAll[curSlide]) {
            slidesAll.forEach((slide) => (slide.style.display = "none"));
            slidesAll[curSlide].style.display = "flex";
        }
    }, [curSlide, slidesAll]);

    const clickDotsHandler = (event) => {
        if (event.target.nodeName === "BUTTON") {
            setCurSlide(event.target.dataset.dot);
            slidesAll[curSlide]?.classList.remove("to-right");
        }
    };

    const clickLeftBtnHandler = () => {
        slidesAll[curSlide]?.classList.add("to-right");

        if (curSlide == 0) {
            setCurSlide(maxSlide - 1);
        } else {
            setCurSlide((pre) => pre - 1);
        }
    };

    const clickRightBtnHandler = () => {
        slidesAll[curSlide]?.classList.remove("to-right");

        if (curSlide == maxSlide - 1) {
            setCurSlide(0);
        } else {
            setCurSlide((pre) => pre + 1);
        }
    };

    const dots = slides.map((_, i) => {
        return (
            <button
                key={i}
                className={`${classes.dot} ${
                    i == curSlide ? classes["active-dot"] : ""
                }`}
                data-dot={i}
            ></button>
        );
    });

    return (
        <div
            className={`${classes.slides}`}
            style={{
                "--bgColor": bgColor,
                "--color": color,
                "--activeColor": activeColor,
            }}
        >
            {slides.map((slide) => {
                return slide;
            })}

            <div className={`${classes.btns}`}>
                {maxSlide > 1 && (
                    <button
                        className={`${classes.slider__btn} ${classes["slider__btn--left"]}`}
                        onClick={clickLeftBtnHandler}
                    >
                        &lsaquo;
                    </button>
                )}
                <div className={`${classes.dots}`} onClick={clickDotsHandler}>
                    {dots}
                </div>
                {maxSlide > 1 && (
                    <button
                        className={`${classes.slider__btn} ${classes["slider__btn--right"]}`}
                        onClick={clickRightBtnHandler}
                    >
                        &rsaquo;
                    </button>
                )}
            </div>
        </div>
    );
};

export default Slider;
