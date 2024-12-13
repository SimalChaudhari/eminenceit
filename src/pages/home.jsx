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
import Logo from '../assets/Logo/LOGO_IT_SERVICES_TRANSPARENT.png';
import BackGround from "../assets/BackGround/Design_Template_BG.jpg";
import Blue_BackGround from "../assets/BackGround/TestimonialsBackground_BLUE_BG.jpg";
import Arrow_Image_T from "../assets/images/Arrow_Image_T.png";
// import HeroBack from "../assets/Video/New_Motion_video_homepage.mp4";
import StrategiesComponent from "@/widgets/components/StrategiesComponent";
import ReviewsCarousel from "@/widgets/sliders/review-slider";

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
            <source src='/video/Blue_BG.MP4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-2">
            <div className="container mx-auto px-10 lg:px-0 items-center flex flex-col gap-4">

              <img src={Logo} alt='Logo' className="md:w-[60%]"
                data-aos="fade-up"
              />
              <div
                variant="h1"
                color="white"
                className="lg:mb-6 text-2xl lg:text-6xl md:text-5xl text-white font-semibold font-Signika"
                data-aos="fade-up"
              >
                EMPOWERING THE TECHNOLOGY
              </div>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80 text-sm lg:text-4xl md:text-3xl lg:mt-10 font-Signika"
                data-aos="fade-up"
              >
                We are committed to deliver the best technological services that your business deserves for its growth.
              </Typography>
            </div>
          </div>
        </div>
      </section>

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



      <section
        className="relative bg-dark-blue py-20"
        style={{
          backgroundImage: `url(${Blue_BackGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4"
          data-aos="fade-up"
        >
          {/* Title Section */}
          <div className="mb-10 text-left">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-4 py-2 border-[15px] border-dark-blue md:text-4xl text-2xl">


                <h3
                  variant="h5"
                  className="font-bold text-white tracking-wide flex items-center gap-6 max-w-md font-Bai"
                >
                  <img src={Arrow_Image_T} alt='Arrow_Image_T' className="w-[15%]" />
                  Our Mission
                </h3>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex justify-end items-center">
            <div className="rounded-lg bg-gradient-to-b from-dark-blue to-blue-gray-900 p-8 text-white shadow-lg border-[15px] border-dark-blue md:w-[70%]">
              <Typography className="md:text-xl text-lg leading-relaxed font-Signika">
                Our mission is to empower businesses to reach their full potential by
                providing cutting-edge technological development solutions like
                technical support, IT support, cyber security, cloud services,
                Microsoft Dynamics, web development, that are tailored to their unique
                needs.
              </Typography>
              <br />
              <Typography className="md:text-xl text-lg leading-relaxed">
                We strive to deliver high-quality products that are both functional and
                visually appealing, ensuring our clients stay ahead of the curve in an
                ever-evolving digital landscape.
              </Typography>
            </div>
          </div>
        </div>
      </section>


      <section className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${BackGround})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto py-20 px-5">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-dark-blue mb-10 font-Bai"
            data-aos="fade-up"
          >
            Our Pride & Strategies
          </h2>

          {/* Cards Section */}
          <StrategiesComponent />
        </div>
      </section>


      <section
        className="relative bg-dark-blue py-20"
        style={{
          backgroundImage: `url(${Blue_BackGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4"
          data-aos="fade-up"
        >
          {/* Title Section */}
          <div className="mb-10 text-left">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-4 py-2 border-[15px] border-dark-blue md:text-4xl text-2xl">
                <h5
                  variant="h5"
                  className="font-bold text-white tracking-wide flex items-center gap-6 max-w-lg font-Bai"
                >
                  <img src={Arrow_Image_T} alt='Arrow_Image_T' className="w-[15%]" />
                  Our Objective

                </h5>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:flex justify-between gap-10  font-Signika">

            <div className="md:mt-0 mt-10 rounded-lg bg-gradient-to-b from-dark-blue to-blue-gray-900 p-8 text-white shadow-lg border-[15px] border-dark-blue md:w-[70%]">
              <Typography className="md:text-xl text-lg leading-relaxed">

                At Eminence IT Services, we go beyond helping businesses transform through technology. We help them in making a meaningful difference; to their customers, and to the communities they serve.
                <br />
                <br />
                Expanding the customer base, increase revenue, and maintain a competitive edge in the market, encourage innovation, Invest in Research and Development, and stay up-to-date with Emerging Technologies. Thereafter, Contribute to the well-being of local communities, support, diversity and inclusion, and promote digital literacy.
              </Typography>
              <br />
            </div>

            <div className="md:mt-0 mt-10 rounded-lg bg-gradient-to-b from-dark-blue to-blue-gray-900 p-8 text-white shadow-lg border-[15px] border-dark-blue md:w-[70%]">
              <ul className="list-disc">
                {objectiveData.map(({ title }) => (
                  <li key={title} className="my-3 text-white md:text-xl font-normal">
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-10">

        <div className="px-4">
          {/*
          <hr className="my-20" />
          */}

          <PartnersSliderComponent />

          {/*
          <hr className="mt-20" />
          */}

        </div>
      </section>

      <section className="px-4">
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
