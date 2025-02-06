import React, { useState } from 'react';
import HoldingDog from '../assets/images/hero-right1.jpg'
import HoldingPet from '../assets/images/hero-right2.jpg'
import AboutImage from '../assets/images/about-info-image.jpg'

const ImageCarousel = () => {
    // List of images in the carousel
    const images = [
        HoldingPet,
        HoldingDog,
        AboutImage
    ];

    // State to manage the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image (infinite loop)
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image (infinite loop)
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            {/* Previous Button */}
            <button className="carousel-button prev" onClick={prevImage}>
                &#10094;
            </button>

            {/* Image Display */}
            <div className="carousel-image">
                <img src={images[currentIndex]} alt={`Carousel Image ${currentIndex + 1}`} />
            </div>

            {/* Next Button */}
            <button className="carousel-button next" onClick={nextImage}>
                &#10095;
            </button>
        </div>
    );
};

export default ImageCarousel;
