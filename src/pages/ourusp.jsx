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
                                Why Us?
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
                                    Our Expertize
                                </h2>
                                <br />
                                {/*
                            <h2 className="text-white lg:text-3xl text-2xl text-center font-bold uppercase tracking-wide">
                                Microsoft Dynamics365
                            </h2>
                            */}
                            </div>
                        </div>


                        <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/BannerBg.jpg')]">
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="relative z-10 flex items-center justify-center h-full">

                                <h2 className="text-white lg:text-3xl text-2xl text-center font-bold uppercase tracking-wide">
                                    Microsoft Dynamics365
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
                        <hr className="lg:mb-20" />

                    </div>
                </div>
            </section>


            {/* Main Content */}
            <section className="relative bg-white pb-24 pt-14">
                <div className="container mx-auto px-4" data-aos="fade-down">
                    <div className="flex flex-wrap -mt-20 justify-between lg:gap-3 gap-10">
                        {/* Our Expertise Section */}
                        <div className="w-full lg:w-[49%]">
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
                        <div className="w-full lg:w-[49%]">
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

                    </div>
                    <hr className="lg:mt-20" />
                </div>
            </section>


            <section className="relative bg-white pb-24">
                <div className="container mx-auto px-4" data-aos="fade-down">
                    <Typography
                        className="font-bold text-blue-gray-900 mb-8 lg:text-3xl text-2xl text-left"
                    >
                        Achievements / Awards
                    </Typography>
                    {/* Achievements / Awards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://3ktechnologies.com/wp-content/uploads/2023/05/healthcare-h.jpg" // Replace with actual image
                                alt="15+ Years Expertise"
                                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-lg"></div>
                            <div className="absolute bottom-5 left-4 text-white">
                                <span className="font-bold lg:text-3xl md:text-2xl text-xl border-b-2">
                                    15+ Years Expertise
                                </span>
                                <p className="lg:text-xl md:text-lg text-sm mt-5">
                                    Over a decade of experience in the same domain, delivering excellence.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://3ktechnologies.com/wp-content/uploads/2023/05/finance-h.jpg" // Replace with actual image
                                alt="800+ Happy Clients"
                                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-lg"></div>
                            <div className="absolute bottom-5 left-4 text-white">
                                <span className="font-bold lg:text-3xl md:text-2xl text-xl border-b-2">
                                    800+ Happy Clients
                                </span>
                                <p className="lg:text-xl md:text-lg text-sm mt-5">
                                    Trusted by hundreds of satisfied clients worldwide.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://3ktechnologies.com/wp-content/uploads/2023/05/hightech-h.jpg" // Replace with actual image
                                alt="1000+ Projects"
                                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-lg"></div>
                            <div className="absolute bottom-5 left-4 text-white">
                                <span className="font-bold lg:text-3xl md:text-2xl text-xl border-b-2">
                                    1000+ Projects
                                </span>
                                <p className="lg:text-xl md:text-lg text-sm mt-5">
                                    Successfully completed over a thousand projects.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://3ktechnologies.com/wp-content/uploads/2023/05/publicsector-h.jpg" // Replace with actual image
                                alt="98% Retention Rate"
                                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-lg"></div>
                            <div className="absolute bottom-5 left-4 text-white">
                                <span className="font-bold lg:text-3xl md:text-2xl text-xl border-b-2">
                                    98% Retention Rate
                                </span>
                                <p className="lg:text-xl md:text-lg text-sm mt-5">
                                    Our dedication ensures a high retention rate for clients.
                                </p>
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
