import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { useState } from "react";

export function OurServices() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Determine offset based on screen width
            const offset = window.innerWidth >= 1024 ? 200 : 350; // 150px for large screens, 200px for small screens

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
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/Services_graphic.jpg')] bg-cover bg-center scale-x-105 scale-y-100" />
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
                                Our Services
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
                                    onClick={() => handleSelection("TallyTraining")}
                                >
                                    Tally Training
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleSelection("WebsiteDevelopment")}
                                >
                                    Website Development
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleSelection("WebApppDevelopment")}
                                >
                                    Web Appp Development
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleSelection("HybridMobileAppDevelopment")}
                                >
                                    Hybrid Mobile App Development
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleSelection("NativeAppDevelopment")}
                                >
                                    Native Mobile App Development
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleSelection("TallyDevelopment(TDL)")}
                                >
                                    Tally Development (TDL)
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>


            <div id="TallyTraining" />
            <section className=" flex justify-center flex-col md:mb-60 mb-5">
                <div className="relative">
                    <img
                        src="/img/career_image.jpg"
                        alt="hst"
                        className="md:h-[500px] w-full md:object-cover"
                    />

                    <div className="container mx-auto text-left md:mt-2 px-4 py-2"
                        data-aos="fade-down"
                    >
                        <div className="flex">
                            <h2 className="md:text-5xl text-3xl font-bold uppercase md:mb-6 text-dark-blue">TALLY TRAINING</h2>
                            <h2 className="w-1/2 hidden md:block"></h2>
                        </div>
                    </div>
                    {/* Overlay */}
                    <div className="md:absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end">
                        <div className="container mx-auto md:flex  justify-center items-end md:mt-96">

                            <div className="w-[50%]"></div>
                            <div className="bg-[#1F1F1F] w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-down"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4">
                                    As your business grows, so does the amount of data you need to deal with. Growing organizations find streamlining processes and the information flowing through these processes very challenging. Often mismanagement costs dearly in terms of time and money. Eminence IT Services comes to your rescue in such a situation
                                    <br />
                                    <br />
                                    We study your business requirements deeply and implement highly customized technology solutions that give significant results while presenting a minimum change in the way things are done in your organization. As a part of the IT consulting engagement, we also provide you with a detailed analysis of your business, helping you make informed business decisions.
                                    <br />
                                    <br />
                                    Empowering innovation through code. We design, develop, and deliver cutting-edge technology solutions that drive business growth and success.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <div id="WebsiteDevelopment" />
            <section className=" flex justify-center flex-col  md:mb-60 mb-5">
                <hr className="md:my-20 mb-5" />
                <div className="relative">
                    <img
                        src="/img/Web_Development.webp"
                        alt="hst"
                        className="md:h-[500px] w-full "
                    />

                    {/* Overlay */}
                    <div className="md:absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end">
                        <div className="container mx-auto md:flex flex-row-reverse justify-center items-end md:mt-96">

                            <div className="container mx-auto text-left md:mt-12 px-4 py-2 md:w-[50%]"
                                data-aos="fade-down"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold uppercase md:mb-6 text-dark-blue">Website Development</h2>
                            </div>

                            <div className="bg-[#1F1F1F] w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-down"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4">
                                    "We design, build, and launch websites that drive results. Our expert team creates custom, mobile-friendly,
                                    and user-centric websites that capture your brand's essence and meet your business goals. From e-commerce solutions to responsive designs,
                                    we develop websites that are both visually stunning and functional, ensuring a seamless user experience that sets you apart from the competition."
                                </Typography>
                            </div>

                        </div>
                    </div>
                </div>

            </section>




            <div id="WebApppDevelopment" />
            <section className=" flex justify-center flex-col md:mb-60 mb-5">
                <hr className="md:my-20 mb-5" />
                <div className="relative">
                    <img
                        src="/img/Develop_graphic.jpg"
                        alt="hst"
                        className="md:h-[500px] w-full "
                    />

                    {/* Overlay */}
                    <div className="md:absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end">
                        <div className="container mx-auto md:flex flex-row justify-center items-end md:mt-96">

                            <div className="container mx-auto text-left md:mt-12 px-4 py-2 md:w-[50%]"
                                data-aos="fade-down"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold uppercase md:mb-6 text-dark-blue">Web App Development</h2>
                            </div>

                            <div className="bg-[#1F1F1F] w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-down"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4">
                                    "We craft robust, scalable, and secure web applications that power your business.
                                    Our expert team builds custom solutions using cutting-edge technologies,
                                    integrating features like user authentication, data analytics,
                                    and third-party API connections. From concept to deployment, we ensure seamless performance,
                                    intuitive interfaces, and a reliable infrastructure that drives efficiency and growth."
                                </Typography>
                            </div>

                        </div>
                    </div>
                </div>

            </section>




            <div id="HybridMobileAppDevelopment" />
            <section className=" flex justify-center flex-col md:mb-60 mb-5">
                <hr className="md:my-20 mb-5" />
                <div className="relative">
                    <img
                        src="/img/lap_graphic.jpg"
                        alt="hst"
                        className="md:h-[500px] w-full "
                    />

                    {/* Overlay */}
                    <div className="md:absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end">
                        <div className="container mx-auto md:flex flex-row-reverse justify-center items-end md:mt-96">

                            <div className="container mx-auto text-left md:mt-12 px-4 py-2 md:w-[50%]"
                                data-aos="fade-down"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold uppercase md:mb-6 text-dark-blue md:mt-40 md:pt-10">Hybrid Mobile App Development</h2>
                            </div>

                            <div className="bg-[#1F1F1F] w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-down"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4">
                                    "We build hybrid mobile apps that combine the best of both worlds:
                                    the reach of web apps and the power of native apps. Our expert team uses cutting-edge
                                    frame works like React Native and Ionic to create seamless, user-friendly experiences
                                    that run on both iOS and Android devices, ensuring a single codebase and cost-effective development."
                                </Typography>
                            </div>

                        </div>
                    </div>
                </div>

            </section>




            <div id="NativeAppDevelopment" />
            <section className=" flex justify-center flex-col md:mb-60 mb-5">
                <hr className="md:my-20 mb-5" />
                <div className="relative">
                    <img
                        src="/img/Mob_App.jpg"
                        alt="hst"
                        className="md:h-[500px] w-full "
                    />

                    {/* Overlay */}
                    <div className="md:absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end">
                        <div className="container mx-auto md:flex flex-row justify-center items-end md:mt-96">

                            <div className="container mx-auto text-left md:mt-12 px-4 py-2 md:w-[50%]"
                                data-aos="fade-down"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold uppercase md:mb-6 text-dark-blue md:mt-40 md:pt-10">Native Mobile App Development</h2>
                            </div>

                            <div className="bg-[#1F1F1F] w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-down"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4">
                                    "We craft native mobile apps that deliver unparalleled performance, security,
                                    and user experience for iOS and Android devices. Our skilled developers use platform-specific
                                    languages like Swift, Java, and Kotlin to build apps that leverage device hardware, ensuring a smooth,
                                    intuitive, and engaging experience that meets your business goals."
                                </Typography>
                            </div>

                        </div>
                    </div>
                </div>

            </section>




            <div id="TallyDevelopment(TDL)" />
            <section className=" flex justify-center flex-col md:mb-40 mb-5 md:pb-20">
                <hr className="md:my-20 mb-5" />
                <div className="relative">
                    <img
                        src="/img/WebDevAppBG.jpg"
                        alt="hst"
                        className="md:h-[500px] w-full md:object-cover"
                    />

                    {/* Overlay */}
                    <div className="md:absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end">
                        <div className="container mx-auto md:flex flex-row-reverse justify-center items-end md:mt-96">

                            <div className="container mx-auto text-left md:mt-12 px-4 py-2 md:w-[50%]"
                                data-aos="fade-down"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold uppercase md:mb-6 text-dark-blue md:mt-40 md:pt-10">Tally Development (TDL)</h2>
                            </div>

                            <div className="bg-[#1F1F1F] w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-down"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4">
                                    "Tally Development: We customize and extend Tally ERP solutions to meet your unique business needs.
                                    Our expert team develops tailored plugins, integrations, and modifications to enhance Tally's capabilities,
                                    streamline your operations, and drive growth."
                                </Typography>
                            </div>

                        </div>
                    </div>
                </div>

            </section>




            <div className="bg-white">
                <hr className="md:my-20 my-5" />
                <Footer />
            </div>

        </div>
    );
}

export default OurServices;
