import { Typography, Card, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import OurExpertiseImage from '../assets/images/Eminence.jpg';
import Microsoft_D from '../assets/images/Microsoft_D.png';
import BackGround from "../assets/BackGround/Design_Template_BG.jpg";
import Our_Technical_Exposure_Graphic from '../assets/images/Our_Technical_Exposure_Graphic.png';
import ExpertizeBackPng from '../assets/images/Our_Expertize_background.jpg';
import ExpertizeBack from '../assets/Video/New_Our_Expertize_Video2.mp4';
import AchievementsAndAwardsComponent from "@/widgets/components/AchievementsAndAwardsComponent";


export function OurUSP() {
    return (
        <div className="overflow-x-hidden">
            <section className="relative block md:h-[50vh] h-[20vh]">
                <div className="relative w-full h-full overflow-hidden">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                    >
                        <source src="/video/Why_us.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-center z-10 ">
                        <div className="container mx-auto px-4 lg:px-0">
                            <h1 className="font-black text-5xl lg:text-7xl text-white font-Signika" data-aos="fade-up">
                                Why Eminence It?
                            </h1>
                        </div>
                    </div>
                </div>
            </section>


            <Card
                className="shadow-lg border shadow-gray-500/10 rounded-none relative"
                style={{
                    height: '400px',
                }}
            >
                {/* Video Background */}
                <video
                    src={ExpertizeBack}
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                {/*
                    <img src={ExpertizeBackPng} alt="ExpertizeBackPng" className="absolute top-0 left-0 w-full h-full object-cover top-0"/>
                */}


                {/* Overlay and Content */}
                <div className="absolute inset-0 bg-black bg-opacity-10">
                    <div
                        className="max-w-1/2 relative mx-auto h-full flex items-center"
                        data-aos="fade-up"
                    >
                        <div className="gap-4">
                            <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-4 py-2 border-[15px] border-dark-blue md:text-4xl text-2xl">
                                <h3
                                    variant="h5"
                                    className="font-bold text-white tracking-wide gap-6 max-w-md font-Signika"
                                >
                                    Our Expertize
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>



            <section
                className="bg-gray-100 md:pt-36 py-10 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${BackGround})`, // Replace with your background image
                }}
            >
                <div className="container mx-auto px-4 relative">
                    {/* Title */}
                    <div className="md:absolute  md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:mb-0 mb-8">
                        <div data-aos="fade-up"  className="inline-block bg-gradient-to-r from-dark-blue to-custome-blue px-4 py-2 border-[15px] border-dark-blue md:text-4xl text-2xl">
                            <h3
                                variant="h5"
                                className="font-bold text-white tracking-wide gap-6 max-w-md font-Signika"
                            >
                                Microsoft Dynamics
                            </h3>
                        </div>

                    </div>

                    {/* Content */}
                    <div className="flex flex-col lg:flex-row items-center lg:gap-10 md:p-20 p-10 rounded-lg shadow-lg"
                        style={{
                            background: "linear-gradient(to right, rgb(47 91 157 / 60%), rgb(45 94 112 / 39%))",
                        }}
                    >
                        {/* Left Side: Text */}
                        <div className="lg:w-1/2 mb-6 lg:mb-0">
                            <p className="text-custome-blue text-lg md:text-2xl leading-relaxed items-center" data-aos="fade-up">
                                “With Microsoft, empower your businesses to achieve more. Our Microsoft
                                solutions enable seamless collaboration, enhanced productivity, and
                                robust security. With Microsoft, get data-driven insights of your
                                business for faster and accurate decision-making.”
                            </p>
                        </div>

                        {/* Right Side: Image */}
                        <div className="lg:w-1/2">
                            <img
                                src={Microsoft_D}
                                alt="Microsoft Dynamics"
                                className="md:h-96 w-full object-cover shadow-md"
                                data-aos="fade-up"
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section
                className="bg-gray-100 py-10 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${BackGround})`, // Replace with your background image
                }}
            >
                <div className="container mx-auto px-4">

                    {/* Content */}
                    <hr className="md:mb-20 my-10" />
                    <div className=""
                        data-aos="fade-up"
                    >
                        <div className="mx-auto flex w-full justify-center px-0 lg:px-4 lg:mt-0">
                            <Card className="rounded-lg lg:flex lg:flex-row items-center shadow-none bg-transparent">
                                {/* Left side image */}
                                <CardBody className="lg:w-1/2 lg:p-6 p-0 lg:mb-0 mb-7 bg-transparent flex items-center justify-center ">
                                    <img src={Our_Technical_Exposure_Graphic} alt="Our_Technical_Exposure_Graphic" className="md:w-72 w-full object-cover" />
                                </CardBody>

                                {/* Right side text */}
                                <CardBody className="lg:w-1/2 flex flex-col md:p-6 p-0">
                                    <Typography data-aos="fade-up" className="text-custome-blue md:text-5xl text-3xl text-left font-bold tracking-wide mb-2 font-Signika">
                                        Our Technical Exposures
                                    </Typography>
                                    <Typography data-aos="fade-up" className="font-normal text-custome-blue md:text-2xl text-xl font-Signika md:mt-3">
                                        We, Eminence IT Services with a rich and diverse experience in developing customized Tally solutions and other business solution tools for all businesses across sectors.
                                        <br />
                                        <br />
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>


            <section className=" px-4">

            </section>


            <Card
                className="shadow-lg border shadow-gray-500/10 rounded-none"
                // data-aos="zoom-in"
                style={{
                    backgroundImage: `url(${OurExpertiseImage})`,  // Using imported image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    //   backgroundRepeat: 'no-repeat',
                    height: '400px',
                }}
            >
                {/* Left side title box with overlay */}
                <div className="flex items-center justify-start h-full bg-black bg-opacity-30">

                    <div className="text-left bg-gradient-to-r from-dark-blue to-custome-blue px-4 py-2 border-[15px] border-dark-blue md:text-4xl text-2xl"
                        data-aos="fade-up"
                    >

                        <Typography
                            variant="h2"
                            color="blue-gray"
                            className="mb-3 mt-2 font-bold text-white lg:text-4xl font-Signika"
                        >
                            Our Expertise
                        </Typography>
                    </div>
                </div>
            </Card>

            {/* Main Content */}
            <section className="relative bg-white pb-24 pt-14">
                <div className="container mx-auto px-4" data-aos="fade-up">
                    <div className="flex flex-wrap -mt-20 justify-between lg:gap-3 gap-10 font-Signika">

                        {/*
                        */}
                        <div className="w-full lg:w-[49%]">
                            <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col h-full border-[1px] hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,111,184,0.7)]">

                                <ul className="list-disc pl-5 space-y-2 text-dark-blue text-xl font-semibold opacity-80">
                                    <li data-aos="fade-up" >Tally Sales and Service </li>
                                    <li data-aos="fade-up" >Development of Customised Solutions.</li>
                                    <li data-aos="fade-up" >Partner for Microsoft</li>
                                    <li data-aos="fade-up" >Partner for Google</li>
                                    <li data-aos="fade-up" >Business Intelligence Tools</li>
                                    <li data-aos="fade-up" >Multiple ERP Software </li>
                                    <li data-aos="fade-up" >Advanced Payroll Software</li>
                                </ul>
                            </div>
                        </div>


                        <div className="w-full lg:w-[49%]">
                            <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col h-full border-[1px] hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,111,184,0.7)]">

                                <ul className="list-disc pl-5 space-y-2 text-dark-blue text-xl font-semibold opacity-80">
                                    <li data-aos="fade-up" >Application and Website Developments</li>
                                    <li data-aos="fade-up" >CRM</li>
                                    <li data-aos="fade-up" >Networking & Firewalls</li>
                                    <li data-aos="fade-up" >Cloud Computing</li>
                                    <li data-aos="fade-up" >Computers, Laptops and Multiple Utility Hardware</li>
                                    <li data-aos="fade-up" >Digital Signatures (Tokens)</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <hr className="lg:mt-20" />
                </div>
            </section>

            <section className="">
                <AchievementsAndAwardsComponent />
            </section>



            <div className="bg-white">
                <Footer />
            </div>

        </div>
    );
}

export default OurUSP;
