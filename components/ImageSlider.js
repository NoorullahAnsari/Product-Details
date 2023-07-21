import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = () => {
  const CustomArrowPrev = ({ onClick }) => (
    <button className="carouselArrow carouselArrowPrev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "24px" }} />
    </button>
  );

  const CustomArrowNext = ({ onClick }) => (
    <button className="carouselArrow carouselArrowNext" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "24px" }} />
    </button>
  );
  return (
    <div className="sliderContainer ">
      <Carousel
        showArrows={true}
        showThumbs={false}
        dynamicHeight={true}
        autoPlay={true}
        interval={3000}
        transitionMode="fade"
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <CustomArrowPrev onClick={onClickHandler} />
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <CustomArrowNext onClick={onClickHandler} />
        }
      >
        <div key="slide1" className="slideItem">
          <img src="/car1.avif" className="slideImage" />
        </div>
        <div key="slide2" className="slideItem">
          <img src="/car2.avif" className="slideImage" />
        </div>
        <div key="slide3" className="slideItem">
          <img src="/car3.avif" className="slideImage" />
        </div>
        <div key="slide4" className="slideItem">
          <img src="/car4.avif" className="slideImage" />
        </div>
        <div key="slide5" className="slideItem">
          <img src="/car5.avif" className="slideImage" />
        </div>
        <div key="slide6" className="slideItem">
          <img src="/car6.jfif" className="slideImage" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
