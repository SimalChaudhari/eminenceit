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
            <source src="/video/Video_home_page.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-2">
            <div className="container mx-auto px-10 lg:px-0">
              <div
                variant="h1"
                color="white"
                className="lg:mb-6 font-black text-2xl lg:text-7xl md:text-5xl text-white"
                data-aos="fade-down"
              >
                EMINENCE
              </div>
              <div
                variant="h1"
                color="white"
                className="lg:mb-6 font-black text-2xl lg:text-7xl md:text-5xl text-white"
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

      <section className="bg-gray-300">
        <div className="container mx-auto">
          <SliderComponent />
        </div>

      </section>
      <Card
        className="shadow-lg border shadow-gray-500/10 rounded-none"
        // data-aos="zoom-in"
        data-aos="fade-down"
        style={{
          backgroundImage: `url(${aboutBannerImage})`,  // Using imported image
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
          height: '400px',
        }}
      >
        {/* Left side title box with overlay */}
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
                {/* Left side image */}
                <CardBody className="lg:w-1/2 lg:p-6 p-0 lg:mb-0 mb-7 ">
                  <img src={Develop_graphic} alt="Develop_graphic" className="w-full h-full object-cover" />
                </CardBody>

                {/* Right side text */}
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


      <section className="bg-gray-300">

        <div className="container mx-auto">
          <hr className="my-20" />

          <PartnersSliderComponent />

          <hr className="mt-20" />

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
