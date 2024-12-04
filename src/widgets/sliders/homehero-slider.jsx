import React from "react";
import Slider from "react-slick";
import HomeHeroSlider from "./HomeHeroSlider.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/images/Heroslider1.webp";
import Banner2 from "../../assets/images/Heroslider2.webp";
import Banner3 from "../../assets/images/Heroslider3.webp";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const sliderData = [
  { title: "Banner1", image: Banner1 },
  { title: "Banner2", image: Banner2 },
  { title: "Banner3", image: Banner3 },
];

// Custom Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-prev"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
    }}
  >
    <MdOutlineArrowBackIosNew className="text-3xl text-white font-extrabold" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-next"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
    }}
  >
  <MdOutlineArrowForwardIos className="text-3xl text-white font-extrabold" />
  </div>
);

// Custom Dots Component
const CustomDots = (dots) => (
  <ul
    style={{
      display: "flex",
      justifyContent: "center",
      listStyle: "none",
      padding: "10px",
    }}
  >
    {dots.map((dot, index) => (
      <li
        key={index}
        style={{
          width: "12px",
          height: "12px",
          margin: "0 5px",
          backgroundColor: dot.props.className.includes("slick-active")
            ? "black"
            : "gray",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={dot.props.onClick}
      />
    ))}
  </ul>
);

const HomeHeroSliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    // appendDots: CustomDots,
  };

  return (
    <div className=" relative">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index} className="">
            <HomeHeroSlider title={item.title} image={item.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeHeroSliderComponent;
