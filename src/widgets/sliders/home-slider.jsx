import React from "react";
import Slider from "react-slick";
import HomeSlider from "./HomeSlider.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    color: "blue",
    icon: <i className="fas fa-cogs"></i>, // Replace with your desired icon
    title: "Microsoft Dynamics",
    description:
      "Designed to help businesses in improvising its operations efficiently and having controls over the costs.",
  },
  {
    color: "green",
    icon: <i className="fas fa-tools"></i>, // Replace with your desired icon
    title: "Tally Customisation",
    description:
      "We study your business requirements deeply and implement highly customized technology solutions that give significant results while presenting a minimum change in the way things are done in your organization. As a part of the IT consulting engagement, we also provide you with the detailed analysis of your business, helping you make informed business decisions.",
  },
  {
    color: "orange",
    icon: <i className="fas fa-globe"></i>, // Replace with your desired icon
    title: "Website / Web App Development",
    description:
      "We believe in accomplishment of your business dreams. We are excited about taking your business from offline to online with the robust technology which suits your business personality.",
  },
  {
    color: "teal",
    icon: <i className="fas fa-user-cog"></i>, // Replace with your desired icon
    title: "CRM Development",
    description:
      "We study your way of administration, your business nature, your mission and visions and best technological survey. We analyze and build solutions that meet your business administrative expectations.",
  },
  {
    color: "red",
    icon: <i className="fas fa-mobile-alt"></i>, // Replace with your desired icon
    title: "Mobile App (Hybrid & Native) Development",
    description:
      "We have accomplished 50+ Mobile App projects and 5+ E-Commerce projects. Now it's your turn to get your project developed from us.",
  },
];

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For devices with max-width of 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // For devices with max-width of 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="py-8"
      data-aos="fade-up"
    >
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index} className="px-4 py-10">
            <HomeSlider
              color={item.color}
              icon={item.icon}
              title={item.title}
              description={item.description}
              isEven={index % 2 === 0} // Pass whether the slide is even or odd
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
