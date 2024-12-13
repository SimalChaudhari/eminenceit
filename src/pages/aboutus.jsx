import { Avatar, Typography, Button, IconButton, CardBody, Card } from "@material-tailwind/react";
import {
    MapPinIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer, PageTitle } from "@/widgets/layout";
import { ourTeamData } from "@/data";
import { TeamCard } from "@/widgets/cards";
import { useState } from "react";
import Develop_graphic from '../assets/images/Develop_graphic.jpg';
import Eminence from '../assets/images/Eminence.jpg';
import AI_graphic from '../assets/images/AI_graphic.jpg';
import BackGround from "../assets/BackGround/Design_Template_BG.jpg";

export function AboutUs() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Determine offset based on screen width
            const offset = window.innerWidth >= 1024 ? 150 : 200; // 150px for large screens, 200px for small screens

            // Scroll to the section with the calculated offset
            window.scrollTo({
                top: section.offsetTop - offset,
                behavior: "smooth",
            });
        }
        setIsOpen(false); // Close dropdown after selection
    };




    return (
        <div className="overflow-x-hidden">
            <section className="relative block h-[50vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/About_grapgics.jpg')] bg-cover bg-center scale-x-105 scale-y-100" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />


                <div className="max-w-1/2 relative mx-auto h-full flex items-center" data-aos="fade-up">
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-4 py-2 border-[15px] border-dark-blue md:text-4xl text-2xl">


                            <h3
                                variant="h5"
                                className="font-bold text-white tracking-wide flex items-center gap-6 max-w-md font-Signika"
                            >
                                About Us
                            </h3>
                        </div>
                    </div>
                </div>
            </section>


            {/*
                <section className="container mx-auto my-5">
                    <div className="lg:w-[20%] w-[70%] px-4">
                        <button
                            className="bg-white text-black border-[1px] px-4 py-2 rounded shadow-md w-full text-left"
                            onClick={toggleDropdown}
                        >
                            Dropdown
                        </button>
                        {isOpen && (
                            <div className="my-2 bg-white rounded shadow-lg w-full">
                                <ul className="mb-10">
                                    <li
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleSelection("OurHistory")}
                                    >
                                        Our History
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleSelection("WhoWeAre")}
                                    >
                                        Who We Are
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleSelection("OurValues")}
                                    >
                                        Our Values
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
            */}


            <section className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${BackGround})` }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/10"></div>

                {/* Content */}
                <div className="relative z-10 container mx-auto py-20 px-5">

                    <div id="OurHistory" />
                    <section className="bg-light-gray py-10">
                        <div className="container mx-auto">
                            <div className="flex justify-center mb-6"
                                data-aos="fade-up"
                            >
                                <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-6 py-3 border-[10px] border-dark-blue shadow-lg">
                                    <h3 className="text-white md:text-4xl text-2xl font-bold font-Signika tracking-wide">
                                        Our History
                                    </h3>
                                </div>
                            </div>
                            <div className="bg-gradient-to-l from-dark-blue to-custome-blue text-white px-6 py-8 shadow-lg"
                                data-aos="fade-up"
                            >
                                <p className="text-white text-xl leading-relaxed font-Signika md:py-10">
                                    Eminence IT Services started in 2021 partnering with the best Accounting
                                    Software and Business Solutions. The journey started with 2 people team to a strong 15+
                                    enthusiastic and energetic team with rich knowledge on product and domain as we have tailor-made
                                    solutions to over 2500+ business houses of all sizes from SME to large-sized, private, and
                                    public sector organizations across the globe.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div id="WhoWeAre" />
                    <section className="bg-light-gray py-10">
                        <div className="container mx-auto">
                            <div className="flex justify-center mb-6"
                                data-aos="fade-up"
                            >
                                <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-6 py-3 border-[10px] border-dark-blue shadow-lg">
                                    <h3 className="text-white md:text-4xl text-2xl font-bold font-Signika tracking-wide">
                                        Who We Are
                                    </h3>
                                </div>
                            </div>
                            <div className="bg-gradient-to-l from-dark-blue to-custome-blue text-white px-6 py-8 shadow-lg"
                                data-aos="fade-up"
                            >
                                <p className="text-white text-xl leading-relaxed font-Signika md:py-10">

                                    At Eminence IT Services, we are a team of passionate and experienced developers, designers, and problem-solvers dedicated to building innovative solutions that drive growth and success for our clients.
                                    <br />
                                    <br />
                                    With 15+ years of experience in the industry, we have established ourselves as a trusted partner for businesses seeking to elevate their digital presence and improve their operations through technology

                                </p>
                            </div>
                        </div>
                    </section>


                    <div id="OurValues" />
                    <section className="bg-light-gray py-10">
                        <div className="container mx-auto">
                            {/* Title Section */}
                            <div className="flex justify-center mb-6" data-aos="fade-up">
                                <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-6 py-3 border-[10px] border-dark-blue shadow-lg">
                                    <h3 className="text-white md:text-4xl text-2xl font-bold font-Signika tracking-wide">
                                        Our Values
                                    </h3>
                                </div>
                            </div>
                            {/* Values Section */}
                            <div
                                className="bg-gradient-to-l from-dark-blue to-custome-blue px-6 py-14 shadow-lg"
                                data-aos="fade-up"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* Individual Value Cards */}
                                    <div className="bg-white text-custome-blue p-4 rounded-lg shadow-md">
                                        <h4 className="text-xl font-bold mb-3 border-b-2 pb-2">Collaboration</h4>
                                        <p className="text-sm">
                                            We believe in working closely with our clients to understand their
                                            goal, challenges, and their requirements.
                                        </p>
                                    </div>
                                    <div className="bg-white text-custome-blue p-4 rounded-lg shadow-md">
                                        <h4 className="text-xl font-bold mb-3 border-b-2 pb-2">Innovation</h4>
                                        <p className="text-sm">
                                            We stay up-to-date with the latest technologies and trends to
                                            ensure our solutions are always forward-thinking.
                                        </p>
                                    </div>
                                    <div className="bg-white text-custome-blue p-4 rounded-lg shadow-md">
                                        <h4 className="text-xl font-bold mb-3 border-b-2 pb-2">Quality</h4>
                                        <p className="text-sm">
                                            We take pride in delivering top-notch products that exceed our
                                            clients’ expectations.
                                        </p>
                                    </div>
                                    <div className="bg-white text-custome-blue p-4 rounded-lg shadow-md">
                                        <h4 className="text-xl font-bold mb-3 border-b-2 pb-2">Integrity</h4>
                                        <p className="text-sm">
                                            We operate with transparency and honesty, ensuring our clients’
                                            trust and providing the best possible service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>

            </section>



            <div className="bg-white">
                <Footer />
            </div>

        </div>
    );
}

export default AboutUs;
