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
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto  px-4 text-center lg:w-8/12 mt-48">
                            <h1
                                variant="h1"
                                color="white"
                                className="mb-6 font-black lg:text-7xl md:text-6xl  text-5xl text-white "
                                data-aos="fade-down"
                            >
                                About Us
                            </h1>


                        </div>
                    </div>
                </div>
            </section>


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

            <div id="OurHistory" />
            <section className=" bg-white ">
                <div className=" mb-6  flex w-full px-4 min-w-0 flex-col break-words bg-white">
                    <div className="container mx-auto"
                        data-aos="fade-down"
                    >
                        <div className="lg:mt-20"
                            data-aos="fade-down"
                        >
                            <div className="mx-auto flex w-full justify-center px-0 lg:px-4 lg:mt-0">
                                <Card className="rounded-lg lg:flex lg:flex-row shadow-none">
                                    {/* Left side image */}
                                    <CardBody className="lg:w-1/2 lg:p-6 p-0 lg:mb-0 mb-7 lg:border-r-2">
                                        <img src={Eminence} alt="Eminence" className="w-full h-full object-cover" />
                                    </CardBody>

                                    {/* Right side text */}
                                    <CardBody className="lg:w-1/2 flex flex-col lg:p-6 p-0 ">
                                        <div className=" text-left mb-3" >
                                            <h2 className="text-dark-blue lg:text-5xl md:text-4xl  text-3xl text-left font-bold uppercase tracking-wide">
                                                Our History
                                            </h2>
                                        </div>
                                        <Typography className=" font-normal text-blue-gray-500 lg:text-xl">
                                            Eminence IT Services started in 2021 partnering with the best Accounting Software and Business Solutions. The journey started with 2 people team to a strong 15+ enthusiastic and energetic team with rich knowledge on product and domain as we have tailor-made solutions to over 2500+ business houses of all sizes from SME to large-sized, private, and public sector organizations across the globe.
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <div id="WhoWeAre" />
            <section className=" bg-white ">
                <div className=" mb-6  flex w-full px-4 min-w-0 flex-col break-words bg-white">
                    <div className="container mx-auto"
                        data-aos="fade-down"
                    >
                        <div className="lg:mt-20"
                            data-aos="fade-down"
                        >
                            <div className="mx-auto flex w-full justify-center px-0 lg:px-4 lg:mt-0">
                                <Card className="rounded-lg lg:flex lg:flex-row-reverse shadow-none">
                                    {/* Left side image */}
                                    <CardBody className="lg:w-1/2 lg:p-6 p-0 lg:mb-0 mb-7 lg:border-l-2 lg:mt-0 mt-5">
                                        <img src={Develop_graphic} alt="Develop_graphic" className="w-full h-full object-cover" />
                                    </CardBody>


                                    {/* Right side text */}
                                    <CardBody className="lg:w-1/2 flex flex-col lg:p-6 p-0 ">
                                        <div className=" text-left mb-3" >
                                            <h2 className="text-dark-blue lg:text-5xl md:text-4xl  text-3xl text-left font-bold uppercase tracking-wide">
                                                Who We Are
                                            </h2>
                                        </div>
                                        <Typography className=" font-normal text-blue-gray-500 lg:text-xl">
                                            At Eminence IT Services, we are a team of passionate and experienced developers, designers, and problem-solvers dedicated to building innovative solutions that drive growth and success for our clients.
                                            <br />
                                            <br />
                                            With 15+ years of experience in the industry, we have established ourselves as a trusted partner for businesses seeking to elevate their digital presence and improve their operations through technology
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <div id="OurValues" />
            <section className=" bg-white mb-36">
                <div className=" mb-6  flex w-full px-4 min-w-0 flex-col break-words bg-white">
                    <div className="container mx-auto"
                        data-aos="fade-down"
                    >
                        <div className="lg:mt-20"
                            data-aos="fade-down"
                        >
                            <div className="mx-auto flex w-full justify-center px-0 lg:px-4 lg:mt-0">
                                <Card className="rounded-lg lg:flex lg:flex-row shadow-none">

                                    {/* Left side image */}
                                    <CardBody className="lg:w-1/2 lg:p-6 p-0 lg:mb-0 mb-7 lg:border-r-2 lg:mt-0 mt-5">
                                        <img src={AI_graphic} alt="AI_graphic" className="w-full h-full object-cover" />
                                    </CardBody>


                                    {/* Right side text */}
                                    <CardBody className="lg:w-1/2 flex flex-col lg:p-6 p-0 ">
                                        <div className=" text-left mb-3" >
                                            <h2 className="text-dark-blue lg:text-5xl md:text-4xl  text-3xl text-left font-bold uppercase tracking-wide">
                                                Our Values
                                            </h2>
                                        </div>
                                        <Typography className=" font-normal text-blue-gray-500 lg:text-xl">
                                            Collaboration: We believe in working closely with our clients to understand their goal, challenges and their requirements.
                                            <br />
                                            <br />
                                            Innovation: We stay up-to-date with the latest technologies and trends to ensure our solutions are always forward-thinking.
                                            <br />
                                            <br />
                                            Quality: We take pride in delivering top-notch products that exceed our clients expectations.
                                            <br />
                                            <br />
                                            Integrity: We operate with transparency and honesty, ensuring our clients trust and providing the best possible service.
                                        </Typography>
                                    </CardBody>

                                </Card>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <div className="bg-white">
                <Footer />
            </div>

        </div>
    );
}

export default AboutUs;
