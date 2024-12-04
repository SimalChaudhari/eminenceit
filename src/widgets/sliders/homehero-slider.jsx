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
// Custom Dots Component
const CustomDots = ({ dots }) => {


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        position: "relative",
        top: "-50px",
        zIndex: 10,
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "10px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {dots.map((dot, index) => (
          <li
            key={index}
            style={{
              width: dot.props.className.includes("slick-active") ? "30px" : "12px",
              height: "12px",
              backgroundColor: dot.props.className.includes("slick-active") ? "white" : "transparent",
              border: "2px solid #fff",
              borderRadius: dot.props.className.includes("slick-active") ? "30px" : "50%",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={dot.props.onClick}
          />
        ))}
      </ul>
    </div>
  );
};






const HomeHeroSliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    // appendDots: CustomDots,
    appendDots: (dots) => <CustomDots dots={dots} />,
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
