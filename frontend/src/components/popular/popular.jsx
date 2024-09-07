import React, { useEffect, useState } from "react";
import "./popular.css";

export default function Popular({ products }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = products?.length;
    useEffect(() => {
        const autoScroll = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(autoScroll);
    }, [totalSlides]);

    useEffect(() => {
        console.log("Current Slide:", currentSlide); // Debugging line
    }, [currentSlide]);


    const goToSlide = (index) => {
        console.log("Going to slide:", index); // Debugging log
        setCurrentSlide(index);
    };


    return (
        <div className="container">
            <div className="full-screen-carousel">
                {products?.map((product, index) => (
                    <div key={index} className={`carousel-slide ${index === currentSlide ? "active" : "inactive"}`} >
                        <img src={product.image} alt={product.name} className="carousel-image" />
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {products.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? "active-dot" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}