import React from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { objectiveData } from "@/data";
import SliderComponent from "@/widgets/sliders/home-slider";
import PartnersSliderComponent from "@/widgets/sliders/partners-slider";
import ReviewsCarousel from "@/widgets/sliders/review-slider";
import aboutBannerImage from '../assets/images/about_banner.jpg';
import OurMissionImage from '../assets/images/OurMissionIMG.webp';
import Develop_graphic from '../assets/images/Develop_graphic.jpg';
import Logo from '../assets/Logo/LOGO_IT_SERVICES_TRANSPARENT.png';
import BackGround from "../assets/BackGround/Design_Template_BG.jpg";
import Blue_BackGround from "../assets/BackGround/TestimonialsBackground_BLUE_BG.jpg";

export function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-gray-300 relative">
        <div className="relative w-full h-screen overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/video/Blue_BG.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-2">
            <div className="container mx-auto px-10 lg:px-0">

              <img src={Logo} alt='Logo' />
              <div
                variant="h1"
                color="white"
                className="lg:mb-6 text-2xl lg:text-7xl md:text-5xl text-white font-semibold"
                data-aos="fade-down"
              >
                EMPOWERING THE TECHNOLOGY
              </div>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80 text-sm lg:text-4xl md:text-3xl lg:mt-10"
                data-aos="fade-down"
              >
                We are committed to deliver the best technological services that your business deserves for its growth.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/*
        <section className="bg-gray-300"
          style={{
            backgroundImage: `url(${BackGround})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto">
            <SliderComponent />
          </div>
  
        </section>
  
        <Card
          className="shadow-lg border shadow-gray-500/10 rounded-none"
          data-aos="fade-down"
          style={{
            backgroundImage: `url(${aboutBannerImage})`,
            height: '400px',
          }}
        >
          <div className="flex items-center justify-start h-full bg-black bg-opacity-30">
            <div className="text-left bg-white lg:w-[30%] h-44 flex justify-center items-center p-6">
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-3 mt-2 font-bold text-custome-blue lg:text-5xl"
              >
                Our Mission
              </Typography>
            </div>
          </div>
        </Card>

        <section className="bg-white px-4 pb-20 pt-4">
          <div className="container mx-auto">
  
            <div className="lg:mt-20"
              data-aos="fade-down"
            >
              <div className="mx-auto flex w-full justify-center px-0 lg:px-4 lg:mt-0">
                <Card className="rounded-lg lg:flex lg:flex-row shadow-none">
                  <CardBody className="lg:w-1/2 lg:p-6 p-0 lg:mb-0 mb-7 ">
                    <img src={Develop_graphic} alt="Develop_graphic" className="w-full h-full object-cover" />
                  </CardBody>
  
                  <CardBody className="lg:w-1/2 flex flex-col lg:p-6 p-0">
  
                    <Typography className="font-normal text-blue-gray-500 lg:text-lg">
                      Our mission is to empower businesses to reach their full potential by providing cutting-edge technological development solutions like technical support, IT Support, cyber security, cloud services, Microsoft dynamics, web development, that are tailored to their unique needs.
                      <br />
                      <br />
                      We strive to deliver high-quality products that are both functional and visually appealing, ensuring our clients stay ahead of the curve in an ever-evolving digital landscape.
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
  
            <hr className="mt-20" />
  
            <div className="mt-20 flex flex-wrap items-center">
              <div className="-mt-8 w-full px-4 md:w-1/2"
                data-aos="fade-up-right"
              >
                <Typography
                  variant="h2"
                  className="mb-3 font-bold text-dark-blue"
                  color="blue-gray"
                >
                  Our Objective
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500 lg:text-lg">
                  Eminence IT Services also offer our clients IT strategy, business process re engineering, IT staffing, independent verification and validation, and project management oversight. Our team has experts in the fields of market analysis, business analysis, product customization, software system integration, and delivery, who make sure that your business leverages technology to its full extent at every growth stage.
                  <br />
                  <br />
                  At Eminence IT Services, we go beyond helping businesses transform through technology. We help them in making a meaningful difference; to their customers, and to the communities they serve.
                </Typography>
  
              </div>
  
              <div className="mx-auto mt-5 flex w-full lg:justify-center lg:px-4 px-8 md:w-4/12 lg:mt-0"
                data-aos="fade-up-left"
              >
                <ul className="list-disc">
                  {objectiveData.map(({ title }) => (
                    <li key={title} className="my-3 text-blue-gray-500 lg:text-lg">
                      {title}
                    </li>
                  ))}
                </ul>
  
              </div>
            </div>
  
  
          </div>
        </section>
        */}



      <section
        className="relative bg-dark-blue py-12"
        style={{
          backgroundImage: `url(${Blue_BackGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          {/* Title Section */}
          <div className="mb-10 text-left">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-4 py-2 border-[15px] border-dark-blue md:text-5xl text-3xl">
                <h3
                  variant="h5"
                  className="font-bold uppercase text-white tracking-wide"
                >
                  Our Mission
                </h3>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex justify-end items-center">
            <div className="rounded-lg bg-gradient-to-b from-dark-blue to-blue-gray-900 p-8 text-white shadow-lg border-[15px] border-r-0 rounded-r-none border-dark-blue md:w-[70%]">
              <Typography className="md:text-2xl text-lg leading-relaxed">
                Our mission is to empower businesses to reach their full potential by
                providing cutting-edge technological development solutions like
                technical support, IT support, cyber security, cloud services,
                Microsoft Dynamics, web development, that are tailored to their unique
                needs.
              </Typography>
              <br />
              <Typography className="md:text-2xl text-lg leading-relaxed">
                We strive to deliver high-quality products that are both functional and
                visually appealing, ensuring our clients stay ahead of the curve in an
                ever-evolving digital landscape.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-dark-blue py-12 min-h-[50vh]"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></section>


      <section
        className="relative bg-dark-blue py-12"
        style={{
          backgroundImage: `url(${Blue_BackGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          {/* Title Section */}
          <div className="mb-10 text-left">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-4 py-2 border-[15px] border-dark-blue md:text-5xl text-3xl">
                <h3
                  variant="h5"
                  className="font-bold uppercase text-white tracking-wide"
                >
                  Our Objective
                </h3>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:flex justify-between gap-10 items-center">

            <div className="md:mt-0 mt-10 rounded-lg bg-gradient-to-b from-dark-blue to-blue-gray-900 p-8 text-white shadow-lg border-[15px] border-l-0 rounded-l-none border-dark-blue md:w-[70%]">
              <Typography className="md:text-2xl text-lg leading-relaxed">
                Eminence IT Services also offer our clients IT strategy, business process re engineering, IT staffing, independent verification and validation, and project management oversight. Our team has experts in the fields of market analysis, business analysis, product customization, software system integration, and delivery, who make sure that your business leverages technology to its full extent at every growth stage.
                <br />
                <br />
                At Eminence IT Services, we go beyond helping businesses transform through technology. We help them in making a meaningful difference; to their customers, and to the communities they serve.
              </Typography>
              <br />
              <Typography className="md:text-2xl text-lg leading-relaxed">
                We strive to deliver high-quality products that are both functional and
                visually appealing, ensuring our clients stay ahead of the curve in an
                ever-evolving digital landscape.
              </Typography>
            </div>

            <div className="md:mt-0 mt-10 rounded-lg bg-gradient-to-b from-dark-blue to-blue-gray-900 p-8 text-white shadow-lg border-[15px] border-r-0 rounded-r-none border-dark-blue md:w-[70%]">
              <ul className="list-disc">
                {objectiveData.map(({ title }) => (
                  <li key={title} className="my-3 text-white lg:text-2xl font-normal">
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-10">

        <div className="container mx-auto">
          {/*
          <hr className="my-20" />
          */}

          <PartnersSliderComponent />

          {/*
          <hr className="mt-20" />
          */}

        </div>
      </section>

      <section className="container mx-auto">
        <div className="my-20">
          <ReviewsCarousel />
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
