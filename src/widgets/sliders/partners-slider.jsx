import React from "react";
import Slider from "react-slick";
import PartnerSlider from "./PartnerSlider.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MicrosoftDynamics from "../../assets/partners_logo/Microsoft Dynamics logo.jpg";
import GooglePartner from "../../assets/partners_logo/google partner.png";
import Campus365 from "../../assets/partners_logo/campus 365 logo.png";
import Roombr from "../../assets/partners_logo/Roombr logo.jpg";
import Credflow from "../../assets/partners_logo/Credflow logo.jpg";
import Pagarbook from "../../assets/partners_logo/Pagar Book logo.jpg";
import BizAnalyst from "../../assets/partners_logo/Biz Analyst logo.png";
import NetProtector from "../../assets/partners_logo/Net protector logo.png";
import TSPlus from "../../assets/partners_logo/TS Plus logo.png";
import GetEPay from "../../assets/partners_logo/Get epay logo.png";
import { Typography } from "@material-tailwind/react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

// Slider data
const partnersSliderData = [
  { title: "Microsoft Dynamics", image: MicrosoftDynamics },
  { title: "Google Partner", image: GooglePartner },
  { title: "Campus 365", image: Campus365 },
  { title: "Roombr", image: Roombr },
  { title: "Credflow", image: Credflow },
  { title: "Pagarbook", image: Pagarbook },
  { title: "Biz Analyst", image: BizAnalyst },
  { title: "Net Protector", image: NetProtector },
  { title: "TS Plus", image: TSPlus },
  { title: "Get ePay", image: GetEPay },
];


// Custom Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-prev"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "40%",
      left: "20px",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
    }}
  >
    <MdOutlineArrowBackIosNew className="text-3xl text-black font-extrabold" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-next"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "40%",
      right: "20px",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
    }}
  >
  <MdOutlineArrowForwardIos className="text-3xl text-black font-extrabold" />
  </div>
);

const PartnersSliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="my-8 overflow-hidden" 
    data-aos="fade-down"
    >
      <Typography
        variant="h4"
        className="font-bold text-dark-blue mb-6 text-left px-4 md:text-4xl text-2xl"
      >
      OUR PARTNERS
      </Typography>
      <Slider {...settings}>
        {partnersSliderData.map((item, index) => (
          <div key={index} className="lg:px-4 px-2 lg:py-4 py-2">
            <PartnerSlider title={item.title} image={item.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSliderComponent;
