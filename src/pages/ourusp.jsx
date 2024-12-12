import { Typography, Card, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import aboutBannerImage from '../assets/images/about_banner.jpg';
import OurExpertiseImage from '../assets/images/Eminence.jpg';
import OurMissionImage from '../assets/images/Develop_graphic.jpg';
import MSImage from '../assets/images/AI_graphic.jpg';
import PortfolioImage from '../assets/images/portfolio.webp';
import { FaRegClock } from 'react-icons/fa';
import { AiOutlineSmile } from 'react-icons/ai';
import { GiTrophyCup } from 'react-icons/gi';
import { IoMdThumbsUp } from 'react-icons/io';
import AchievementsAndAwardsComponent from "@/widgets/components/AchievementsAndAwardsComponent";


export function OurUSP() {
    const filePath = "/File/Available_TCP_and_Modules_for_Tally_(without_Price).pdf"; // Set the correct file path here

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = filePath.split('/').pop(); // Automatically use the file name from the path
        link.click();
    };

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
                className="shadow-lg border shadow-gray-500/10 rounded-none"
                // data-aos="zoom-in"
                style={{
                    backgroundImage: `url(${aboutBannerImage})`,  // Using imported image
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center',
                    //   backgroundRepeat: 'no-repeat',
                    height: '400px',
                }}
            >
                {/* Left side title box with overlay */}
                <div className=" h-full bg-black bg-opacity-30">
                    <div className="max-w-1/2 relative mx-auto h-full flex items-center"
                        data-aos="fade-up"
                    >
                        <div className=" gap-4">
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


            <section className="bg-white px-4">
                <div className="container mx-auto">
                    <div className="lg:mt-20"
                        data-aos="fade-up"
                    >
                        <div className="mx-auto flex w-full justify-center px-0 lg:px-4 lg:mt-0">
                            <Card className="rounded-lg lg:flex lg:flex-row shadow-none">
                                {/* Left side image */}
                                <CardBody className="lg:w-1/2 lg:p-6 p-0 lg:mb-0 mb-7 ">
                                    <img src={OurMissionImage} alt="OurMissionImage" className="w-full h-full object-cover" />
                                </CardBody>

                                {/* Right side text */}
                                <CardBody className="lg:w-1/2 flex flex-col lg:p-6 p-0">
                                    <Typography className="text-dark-blue lg:text-3xl text-2xl text-left font-bold uppercase tracking-wide mb-2 font-Bai">
                                        Microsoft Dynamics365
                                    </Typography>
                                    <Typography className="font-normal text-blue-gray-500 lg:text-lg font-Signika">
                                        “With Microsoft, empower your businesses to achieve more.
                                        Our Microsoft solutions enable seamless collaboration, enhanced productivity,
                                        and robust security.
                                        With Microsoft get data-driven insights of your business for faster and accurate decision makings.”
                                        {/*
                                            <br />
                                            At Eminence IT Services, we go beyond helping businesses transform through technology.
                                            We help them in making a meaningful difference; to their customers,
                                            and to the communities they serve. Better Cybersecurity
                                            <br />
                                            Measures Cut Down On Operational Costs Tap Into Specialized Expertise 24/7 Support from a Dedicated Team Scale At Your Own Pace
                                            <br />
                                            Foster Creativity and Innovation Ensure Regulatory Compliance Stay Ahead of the Curve Bounce Back Faster Focus on What Your Business Does Best
                                            <br />
                                            */}
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-white px-4 pb-20">
                <div className="container mx-auto">
                    <hr className="md:my-20 my-10" />
                    <div className=""
                        data-aos="fade-up"
                    >
                        <div className="mx-auto flex w-full justify-center px-0 lg:px-4 lg:mt-0">
                            <Card className="rounded-lg lg:flex lg:flex-row-reverse shadow-none">
                                {/* Left side image */}
                                <CardBody className="lg:w-1/2 lg:p-6 p-0 lg:mb-0 mb-7 ">
                                    <img src={MSImage} alt="MSImage" className="w-full h-full object-cover" />
                                </CardBody>

                                {/* Right side text */}
                                <CardBody className="lg:w-1/2 flex flex-col lg:p-6 p-0">
                                    <Typography className="text-dark-blue lg:text-3xl text-2xl text-left font-bold uppercase tracking-wide mb-2 font-Bai">
                                        OUR TECHNICAL EXPOSURES
                                    </Typography>
                                    <Typography className="font-normal text-blue-gray-500 lg:text-lg font-Signika">
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
                    <div className="text-left bg-white lg:w-[30%] h-44 flex justify-center items-center p-6"
                        data-aos="fade-up"
                    >
                        <Typography
                            variant="h2"
                            color="blue-gray"
                            className="mb-3 mt-2 font-bold text-custome-blue lg:text-5xl font-Signika"
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
                                    <li>Tally Sales and Service </li>
                                    <li>Development of Customised Solutions.</li>
                                    <li>Partner for Microsoft</li>
                                    <li>Partner for Google</li>
                                    <li>Business Intelligence Tools</li>
                                    <li>Multiple ERP Software </li>
                                    <li>Advanced Payroll Software</li>
                                </ul>
                            </div>
                        </div>


                        <div className="w-full lg:w-[49%]">
                            <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col h-full border-[1px] hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,111,184,0.7)]">

                                <ul className="list-disc pl-5 space-y-2 text-dark-blue text-xl font-semibold opacity-80">
                                    <li>Application and Website Developments</li>
                                    <li>CRM</li>
                                    <li>Networking & Firewalls</li>
                                    <li>Cloud Computing</li>
                                    <li>Computers, Laptops and Multiple Utility Hardware</li>
                                    <li>Digital Signatures (Tokens)</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <hr className="lg:mt-20" />
                </div>
            </section>

            <section className="bg-yellow-600">
                <AchievementsAndAwardsComponent />
            </section>


            <section className="relative bg-white pb-24 mt-14">
                <div className="container mx-auto px-4" data-aos="fade-up">

                    {/* Download Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleDownload}
                            className="px-8 py-3 bg-dark-blue text-white font-semibold text-lg rounded-lg hover:bg-sky-blue transition duration-300"
                        >
                            Download File
                        </button>
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
