import { Avatar, Typography, Button, IconButton } from "@material-tailwind/react";
import {
    MapPinIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer, PageTitle } from "@/widgets/layout";
import { ourTeamData } from "@/data";
import { TeamCard } from "@/widgets/cards";

export function AboutUs() {
    return (
        <div className="overflow-x-hidden">
            <section className="relative block h-[50vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto  px-4 text-center lg:w-8/12 mt-44">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 font-black lg:text-5xl text-3xl"
                            >
                                About Us
                            </Typography>


                        </div>
                    </div>
                </div>
            </section>
            <section className="relative bg-white pt-16">
                <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
                    <div className="container mx-auto">


                        <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/background-2.jpg')]">
                            {/* Overlay for better readability */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Content inside */}
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <h2 className="text-white lg:text-3xl text-2xl text-center font-bold uppercase tracking-wide">
                                    Our History
                                </h2>
                            </div>
                        </div>


                        <div className=" py-10">
                            <div className="flex w-full flex-col items-start">
                                <Typography className=" font-normal text-blue-gray-500">
                                    Eminence IT Services started in 2021 partnering with the best Accounting Software and Business Solutions. The journey started with 2 people team to a strong 15+ enthusiastic and energetic team with rich knowledge on product and domain as we have tailor-made solutions to over 2500+ business houses of all sizes from SME to large-sized, private, and public sector organizations across the globe.
                                </Typography>
                            </div>
                        </div>


                        <hr className="lg:my-10" />

                        <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/background-2.jpg')]">
                            {/* Overlay for better readability */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Content inside */}
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <h2 className="text-white lg:text-3xl text-2xl text-center font-bold uppercase tracking-wide">
                                    Who We Are
                                </h2>
                            </div>
                        </div>


                        <div className=" py-10">
                            <div className="flex w-full flex-col items-start">
                                <Typography className=" font-normal text-blue-gray-500">
                                    At Eminence IT Services, we are a team of passionate and experienced developers, designers, and problem-solvers dedicated to building innovative solutions that drive growth and success for our clients.
                                    <br />
                                    <br />
                                    With 15+ years of experience in the industry, we have established ourselves as a trusted partner for businesses seeking to elevate their digital presence and improve their operations through technology
                                </Typography>
                            </div>
                        </div>



                        <hr className="lg:my-10" />

                        <div className="relative bg-cover bg-center h-52 lg:mt-20 mt-10 rounded-lg overflow-hidden shadow-lg bg-[url('/img/background-2.jpg')]">
                            {/* Overlay for better readability */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Content inside */}
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <h2 className="text-white lg:text-3xl text-2xl text-center font-bold uppercase tracking-wide">
                                    Our Values
                                </h2>
                            </div>
                        </div>


                        <div className=" py-10">
                            <div className="flex w-full flex-col items-start">
                                <Typography className=" font-normal text-blue-gray-500">
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
                            </div>
                        </div>

                        <hr className="lg:my-10" />
                    </div>


                </div>
            </section>


            <section className="px-4 pb-48">
                <div className="container mx-auto">
                    <PageTitle section="Our Team" heading="Here are our heroes">
                        According to the National Oceanic and Atmospheric Administration,
                        Ted, Scambos, NSIDClead scentist, puts the potentially record
                        maximum.
                    </PageTitle>
                    <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                        {ourTeamData.map(({ img, name, position, socials }) => (
                            <TeamCard
                                key={name}
                                img={img}
                                name={name}
                                position={position}
                                socials={
                                    <div className="flex items-center gap-2">
                                        {socials.map(({ color, name }) => (
                                            <IconButton key={name} color={color} variant="text">
                                                <i className={`fa-brands text-xl fa-${name}`} />
                                            </IconButton>
                                        ))}
                                    </div>
                                }
                            />
                        ))}
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
