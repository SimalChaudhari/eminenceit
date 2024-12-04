import { Avatar, Typography, Button, IconButton } from "@material-tailwind/react";
import {
    MapPinIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer, PageTitle } from "@/widgets/layout";
import { ourTeamData } from "@/data";
import { TeamCard } from "@/widgets/cards";

export function OurUSP() {
    return (
        <div className="overflow-x-hidden">
            <section className="relative block h-[50vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/BulbBG.jpg')] bg-cover bg-center scale-105" />
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
                                Why Choose Us?
                            </h1>


                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative bg-white pt-16">
                <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
                    <div className="container mx-auto"
                        data-aos="fade-down"
                    >
                        {/* Tally Training Section */}
                        <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/BannerBg.jpg')]">
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <h2 className="text-white lg:text-3xl text-2xl text-center font-bold uppercase tracking-wide">
                                    Microsoft Dynamics365:
                                </h2>
                            </div>
                        </div>

                        <div className="py-10"
                            data-aos="fade-down"
                        >
                            <div className="flex w-full flex-col items-start">
                                <Typography className="font-normal text-blue-gray-500">
                                    “With Microsoft, empower your businesses to achieve more.
                                    Our Microsoft solutions enable seamless collaboration, enhanced productivity,
                                    and robust security.
                                    With Microsoft get data-driven insights of your business for faster and accurate decision makings.”
                                    <br />
                                    <br />
                                    At Eminence IT Services, we go beyond helping businesses transform through technology.
                                    We help them in making a meaningful difference; to their customers,
                                    and to the communities they serve. Better Cybersecurity
                                    <br />
                                    <br />
                                    Measures Cut Down On Operational Costs Tap Into Specialized Expertise 24/7 Support from a Dedicated Team Scale At Your Own Pace
                                    <br />
                                    <br />
                                    Foster Creativity and Innovation Ensure Regulatory Compliance Stay Ahead of the Curve Bounce Back Faster Focus on What Your Business Does Best
                                    <br />
                                    <br />
                                </Typography>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Main Content */}
            <section className="relative bg-white pt-16">
                <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
                    <div className="container mx-auto"
                        data-aos="fade-down"
                    >
                        {/* Tally Training Section */}
                        <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/BuldingBG.jpg')]">
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <h2 className="text-white lg:text-3xl text-2xl text-center font-bold uppercase tracking-wide">
                                    OUR TECHNICAL EXPOSURES
                                </h2>
                            </div>
                        </div>

                        <div className="py-10"
                            data-aos="fade-down"
                        >
                            <div className="flex w-full flex-col items-start">
                                <Typography className="font-normal text-blue-gray-500">
                                    We, Eminence IT Services with a rich and diverse experience in developing customized Tally solutions and other business solution tools for all businesses across sectors.
                                    <br />
                                    <br />

                                </Typography>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Main Content */}
            <section className="relative bg-white py-24">
                <div className="container mx-auto" data-aos="fade-down">
                    <div className="flex flex-wrap -mt-20 justify-between gap-1">
                        {/* Our Expertise Section */}
                        <div className="w-full lg:w-[30%]">
                            <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col h-full hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,111,184,0.4)]">
                                <Typography
                                    className="font-bold text-blue-gray-900 mb-4 lg:text-3xl text-2xl"
                                >
                                    Our Expertise
                                </Typography>
                                <hr className="lg:mb-5" />
                                <ul className="list-disc pl-5 space-y-2 text-blue-gray-600">
                                    <li>Microsoft Dynamics 365</li>
                                    <li>Tally Customization</li>
                                    <li>Web and Mobile App Development</li>
                                    <li>CRM Development</li>
                                    <li>Advanced Payroll Software</li>
                                </ul>
                            </div>
                        </div>

                        {/* Technical Exposures Section */}
                        <div className="w-full lg:w-[30%]">
                            <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col h-full hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,111,184,0.4)]">
                                <Typography
                                    className="font-bold text-blue-gray-900 mb-4 lg:text-3xl text-2xl"
                                >
                                    Our Technical Exposures
                                </Typography>
                                <hr className="lg:mb-5" />
                                <ul className="list-decimal pl-5 space-y-2 text-blue-gray-600">
                                    <li>Tally Sales and Service</li>
                                    <li>Development of Customized Solutions</li>
                                    <li>Partner for Microsoft and Google</li>
                                    <li>Business Intelligence Tools</li>
                                    <li>Multiple ERP Software</li>
                                    <li>Networking & Firewalls</li>
                                    <li>Cloud Computing</li>
                                    <li>Digital Signatures</li>
                                </ul>
                            </div>
                        </div>

                        {/* Achievements / Awards Section */}
                        <div className="w-full lg:w-[30%]">
                            <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col h-full hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,111,184,0.4)]">
                                <Typography
                                    className="font-bold text-blue-gray-900 mb-4 lg:text-3xl text-2xl"
                                >
                                    Achievements / Awards
                                </Typography>
                                <hr className="lg:mb-5" />
                                <ul className="list-disc pl-5 space-y-2 text-blue-gray-600">
                                    <li>15+ Years Expertise in the Same Domain</li>
                                    <li>800+ Happy Clients</li>
                                    <li>1000+ Projects Successfully Completed</li>
                                    <li>98% Customer Retention</li>
                                </ul>
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

export default OurUSP;
