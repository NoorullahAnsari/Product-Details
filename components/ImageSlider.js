import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  // Custom CSS styles for the images
  const imageStyles = {
    maxHeight: "100vh", // Set the maximum height for the images
    // Center the images horizontally
  };

  return (
    <div className=" flex items-center justify-center">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={3000}
        transitionTime={500}
      >
        <div>
          <img src={"/car1.avif"} alt="Car 1" style={imageStyles} />
        </div>
        <div>
          <img src={"/car2.avif"} alt="Car 2" style={imageStyles} />
        </div>
        <div>
          <img src={"/car3.avif"} alt="Car 3" style={imageStyles} />
        </div>
        <div>
          <img src={"/car4.avif"} alt="Car 3" style={imageStyles} />
        </div>
        <div>
          <img src={"/car5.avif"} alt="Car 3" style={imageStyles} />
        </div>
        <div>
          <img src={"/car5.jfif"} alt="Car 3" style={imageStyles} />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
