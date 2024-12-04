import { Avatar, Typography, Button, IconButton } from "@material-tailwind/react";
import {
    MapPinIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer, PageTitle } from "@/widgets/layout";
import { ourTeamData } from "@/data";
import { TeamCard } from "@/widgets/cards";

export function OurServices() {
    return (
        <div className="overflow-x-hidden">
            <section className="relative block h-[50vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/KeyBrdBG.jpg')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto  px-4 text-center lg:w-8/12 mt-32">
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

            <section className="relative bg-white pt-16">
                <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
                    <div className="container mx-auto"
                        data-aos="fade-down"
                    >

                        <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/TeamBG.jpg')]">
                            {/* Overlay for better readability */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Content inside */}
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <h2 className="text-white lg:text-5xl md:text-4xl  text-3xl text-center font-bold uppercase tracking-wide">
                                    TALLY TRAINING :
                                </h2>
                            </div>
                        </div>

                        <div className=" py-10"
                            data-aos="fade-down"
                        >
                            <div className="flex w-full flex-col items-start">
                                <Typography className=" font-normal text-blue-gray-500 lg:text-xl">
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

                        <hr className="" />

                    </div>


                </div>
            </section>


            <section className="px-4 ">
                <div className="container mx-auto"
                    data-aos="fade-down"
                >
                    <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/WebDevBG.jpg')]">
                        {/* Overlay for better readability */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Content inside */}
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <h2 className="text-white lg:text-5xl md:text-4xl  text-3xl text-center font-bold uppercase tracking-wide">
                                Website Development :
                            </h2>
                        </div>
                    </div>


                    <div className=" py-10"
                        data-aos="fade-down"
                    >
                        <div className="flex w-full flex-col items-start">
                            <Typography className=" font-normal text-blue-gray-500 lg:text-xl">
                                "We design, build, and launch websites that drive results. Our expert team creates custom, mobile-friendly, and user-centric websites that capture your brand's essence and meet your business goals. From e-commerce solutions to responsive designs, we develop websites that are both visually stunning and functional, ensuring a seamless user experience that sets you apart from the competition."
                            </Typography>
                        </div>
                    </div>

                    <hr className="" />
                </div>
            </section>

            <section className="px-4 py-5">
                <div className="container mx-auto"
                    data-aos="fade-down"
                >

                    <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/WebDevAppBG.jpg')]">
                        {/* Overlay for better readability */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Content inside */}
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <h2 className="text-white lg:text-5xl md:text-4xl  text-3xl text-center font-bold uppercase tracking-wide">
                                Web App Development :
                            </h2>
                        </div>
                    </div>


                    <div className=" py-10"
                        data-aos="fade-down"
                    >
                        <div className="flex w-full flex-col items-start">
                            <Typography className=" font-normal text-blue-gray-500 lg:text-xl">
                                "We craft robust, scalable, and secure web applications that power your business. Our expert team builds custom solutions using cutting-edge technologies, integrating features like user authentication, data analytics, and third-party API connections. From concept to deployment, we ensure seamless performance, intuitive interfaces, and a reliable infrastructure that drives efficiency and growth."
                            </Typography>
                        </div>
                    </div>

                    <hr className="" />
                </div>
            </section>

            <section className="px-4 py-5">
                <div className="container mx-auto"
                    data-aos="fade-down"
                >
                    <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/HexBG.jpg')]">
                        {/* Overlay for better readability */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Content inside */}
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <h2 className="text-white lg:text-5xl md:text-4xl  text-3xl text-center font-bold uppercase tracking-wide">
                                Hybrid Mobile App Development :
                            </h2>
                        </div>
                    </div>


                    <div className=" py-10"
                        data-aos="fade-down"
                    >
                        <div className="flex w-full flex-col items-start">
                            <Typography className=" font-normal text-blue-gray-500 lg:text-xl">
                                "We build hybrid mobile apps that combine the best of both worlds: the reach of web apps and the power of native apps. Our expert team uses cutting-edge frame works like React Native and Ionic to create seamless, user-friendly experiences that run on both iOS and Android devices, ensuring a single codebase and cost-effective development."
                            </Typography>
                        </div>
                    </div>

                    <hr className="" />
                </div>
            </section>

            <section className="px-4 py-5">
                <div className="container mx-auto"
                    data-aos="fade-down"
                >
                    <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/HexBG2.jpg')]">
                        {/* Overlay for better readability */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Content inside */}
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <h2 className="text-white lg:text-5xl md:text-4xl  text-3xl text-center font-bold uppercase tracking-wide">
                                Native Mobile App Development :
                            </h2>
                        </div>
                    </div>


                    <div className=" py-10"
                        data-aos="fade-down"
                    >
                        <div className="flex w-full flex-col items-start">
                            <Typography className=" font-normal text-blue-gray-500 lg:text-xl">
                                "We craft native mobile apps that deliver unparalleled performance, security, and user experience for iOS and Android devices. Our skilled developers use platform-specific languages like Swift, Java, and Kotlin to build apps that leverage device hardware, ensuring a smooth, intuitive, and engaging experience that meets your business goals."
                            </Typography>
                        </div>
                    </div>

                    <hr className="" />
                </div>
            </section>

            <section className="px-4 pb-48 pt-5">
                <div className="container mx-auto"
                    data-aos="fade-down"
                >
                    <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/WebDevAppBG.jpg')]">
                        {/* Overlay for better readability */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Content inside */}
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <h2 className="text-white lg:text-5xl md:text-4xl  text-3xl text-center font-bold uppercase tracking-wide">
                                Tally Development (TDL) :
                            </h2>
                        </div>
                    </div>


                    <div className=" py-10"
                        data-aos="fade-down"
                    >
                        <div className="flex w-full flex-col items-start">
                            <Typography className=" font-normal text-blue-gray-500 lg:text-xl">
                                "Tally Development: We customize and extend Tally ERP solutions to meet your unique business needs. Our expert team develops tailored plugins, integrations, and modifications to enhance Tally's capabilities, streamline your operations, and drive growth."
                            </Typography>
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

export default OurServices;
