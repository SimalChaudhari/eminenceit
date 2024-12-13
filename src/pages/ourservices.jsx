import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import BackGround from "../assets/BackGround/Design_Template_BG.jpg";
import BlueBackGround from "../assets/BackGround/TestimonialsBackground_BLUE_BG.jpg";
import { FaTruck, FaChartLine, FaUsers, FaUserShield, FaBoxes, FaIndustry, FaUserTie } from "react-icons/fa";

export function OurServices() {

    const filePath = "/File/Available_TCP_and_Modules_for_Tally_(without_Price).pdf"; // Set the correct file path here

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = filePath.split('/').pop(); // Automatically use the file name from the path
        link.click();
    };

    return (
        <div className="overflow-x-hidden">
            <section className="relative block h-[50vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/Services_graphic.jpg')] bg-cover bg-center scale-x-105 scale-y-100" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
                <div className="max-w-1/2 relative mx-auto h-full flex items-center" data-aos="fade-up">
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-dark-blue to-custome-blue px-4 py-2 border-[15px] border-dark-blue md:text-4xl text-2xl">


                            <h3
                                variant="h5"
                                className="font-bold text-white tracking-wide flex items-center gap-6 max-w-md font-Signika"
                            >
                                Our Services
                            </h3>
                        </div>
                    </div>
                </div>
            </section>



            <div id="ERPImplementation" />
            <section className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${BackGround})` }}>

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/10"></div>

                {/* Content */}
                <div className="relative z-10 container mx-auto py-20">
                    <section>
                        <div className="container mx-auto px-4">
                            <div className="text-custome-blue font-Signika">
                                <h3 className="font-semibold md:text-5xl text-3xl md:text-center mb-2" data-aos="fade-up">ERP Implementation</h3>
                                <p className="text-lg" data-aos="fade-up">Enterprise Resource Planning (ERP) implementation is a complex process  that requires careful planning, execution, and monitoring.</p>
                                <p className="text-lg" data-aos="fade-up">A successful ERP implementation can bring numerous benefits, including improved efficiency, reduced costs, and enhanced decision-making.</p>
                            </div>

                            <div className="md:flex gap-5">
                                <div className="md:w-[49%] px-4 py-5 md:mt-0 mt-5">
                                    <ul className="text-custome-blue font-Signika list-disc space-y-4">
                                        <li data-aos="fade-up"> <b className="text-xl">Planning Phase</b><br />
                                            Define project scope, objectives, and timeline
                                            Identify business requirements and process gaps
                                            Select ERP software and implementation partner
                                        </li>
                                        <li data-aos="fade-up">
                                            <b className="text-xl">Design Phase</b><br />
                                            Configure ERP system to meet business requirements
                                            Design workflows, reports, and dashboards
                                            Develop data migration plan

                                        </li>
                                        <li data-aos="fade-up">
                                            <b className="text-xl">Implementation Phase</b><br />
                                            Install and configure ERP software
                                            Migrate data from legacy systems
                                            Conduct unit testing and integration testing

                                        </li>
                                        <li data-aos="fade-up">
                                            <b className="text-xl">Testing Phase</b><br />
                                            Conduct user acceptance testing (UAT)
                                            Identify and fix defects
                                            Develop training plan for end-users
                                        </li>
                                        <li data-aos="fade-up">
                                            <b className="text-xl">Go-Live Phase</b><br />
                                            Deploy ERP system to production environment
                                            Provide post-implementation support
                                            Monitor system performance and user adoption

                                        </li>
                                        <li data-aos="fade-up">
                                            <b className="text-xl">Post-Implementation Phase</b><br />
                                            Evaluate system performance and user adoption
                                            Identify areas for improvement
                                            Develop plan for ongoing maintenance and support
                                            An ERP software solution may consist of different business modules, including
                                        </li>
                                    </ul>
                                </div>
                                <div className="md:w-[49%]  py-5 md:mt-0 mt-5">

                                    <p className="text-custome-blue font-Signika pb-5"> By following best practices, addressing common challenges, and engaging                   stakeholders, organizations can ensure a successful ERP implementation that delivers business benefits and improves system adoption. </p>
                                    <ul className="text-custome-blue font-Signika list-disc space-y-4 text-xl">
                                        {/* Supply Chain Management */}
                                        <li className="flex items-center gap-4" data-aos="fade-up">
                                            <FaTruck className="text-dark-blue text-3xl" />
                                            <span>Supply Chain Management</span>
                                        </li>

                                        {/* Finance and Accounting */}
                                        <li className="flex items-center gap-4" data-aos="fade-up">
                                            <FaChartLine className="text-green-500 text-3xl" />
                                            <span>Finance and Accounting</span>
                                        </li>

                                        {/* CRM */}
                                        <li className="flex items-center gap-4" data-aos="fade-up">
                                            <FaUsers className="text-sky-blue text-3xl" />
                                            <span>Customer Relationship Management (CRM)</span>
                                        </li>

                                        {/* Identity & Access Management */}
                                        <li className="flex items-center gap-4" data-aos="fade-up">
                                            <FaUserShield className="text-red-500 text-3xl" />
                                            <span>Identity & Access Management</span>
                                        </li>

                                        {/* Inventory */}
                                        <li className="flex items-center gap-4" data-aos="fade-up">
                                            <FaBoxes className="text-custome-blue text-3xl" />
                                            <span>Inventory</span>
                                        </li>

                                        {/* Manufacturing */}
                                        <li className="flex items-center gap-4" data-aos="fade-up">
                                            <FaIndustry className="text-gray-500 text-3xl" />
                                            <span>Manufacturing</span>
                                        </li>

                                        {/* Human Resources/Payroll */}
                                        <li className="flex items-center gap-4" data-aos="fade-up">
                                            <FaUserTie className="text-indigo-500 text-3xl" />
                                            <span>Human Resources/Payroll</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>


            <div id="CustomApplicationDevelopment" />
            <section className="relative bg-fixed bg-cover bg-center md:h-screen md:flex md:items-center" style={{ backgroundImage: `url(${BlueBackGround})` }}>

                {/* Overlay */}
                <div className="absolute inset-0 "></div>

                {/* Content */}
                <div className="relative z-10 container mx-auto py-20">
                    <section>
                        <div className="container mx-auto px-4">
                            <div className="text-white font-Signika">
                                <h3 className="font-semibold md:text-5xl text-3xl md:text-center mb-2 pb-5" data-aos="fade-up">Custom Application Development</h3>
                                <p className="text-lg" data-aos="fade-up">We develop Custom applications that involves designing, building, and
                                    deploying software applications tailored to meet specific business needs. These applications
                                    can be web-based, mobile, or desktop applications, and are typically developed to address unique
                                    business challenges or opportunities.
                                </p>
                            </div>

                            <div className=" px-4 py-5 md:mt-0 mt-5">
                                <h4 className="text-white text-3xl font-Signika my-5" data-aos="fade-up">Custom Application Development Process</h4>
                                <ul className="text-white font-Signika list-disc space-y-4">

                                    <li data-aos="fade-up">
                                        <div className="md:flex items-center gap-10 space-y-1">
                                            <b className="text-xl">Requirements Gathering :  </b>
                                            <p>Identifing business needs and requirements.</p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up">
                                        <div className="md:flex items-center gap-10 space-y-1">
                                            <b className="text-xl">Design :  </b>
                                            <p>Create wireframes, prototypes, and visual designs.</p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up">
                                        <div className="md:flex items-center gap-10 space-y-1">
                                            <b className="text-xl">Development :  </b>
                                            <p>Build the application using programming languages and frameworks.</p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up">
                                        <div className="md:flex items-center gap-10 space-y-1">
                                            <b className="text-xl">Testing :  </b>
                                            <p>Conduct unit testing, integration testing, and user acceptance testing.</p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up">
                                        <div className="md:flex items-center gap-10 space-y-1">
                                            <b className="text-xl">Deployment :  </b>
                                            <p>Deploy the application to production environment.</p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up">
                                        <div className="md:flex items-center gap-10 space-y-1">
                                            <b className="text-xl">Maintenance :  </b>
                                            <p>Provide ongoing maintenance and support.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>


            </section>

            <section className=" flex justify-center flex-col  md:mb-60 mb-5">
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
                                data-aos="fade-up"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold  md:mb-6 text-dark-blue font-Bai">Website Development</h2>
                            </div>

                            <div className="bg-custome-blue w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-up"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4 font-Signika">
                                    "We design, build, and launch websites that drive results. Our expert team creates custom, mobile-friendly,
                                    and user-centric websites that capture your brand's essence and meet your business goals. From e-commerce solutions to responsive designs,
                                    we develop websites that are both visually stunning and functional, ensuring a seamless user experience that sets you apart from the competition."
                                </Typography>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

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
                                data-aos="fade-up"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold  md:mb-6 text-dark-blue font-Bai">Web App Development</h2>
                            </div>

                            <div className="bg-custome-blue w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-up"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4 font-Signika">
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
                                data-aos="fade-up"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold  md:mb-6 text-dark-blue md:mt-40 md:pt-10 font-Bai">Hybrid Mobile App Development</h2>
                            </div>

                            <div className="bg-custome-blue w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-up"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4 font-Signika">
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
                                data-aos="fade-up"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold  md:mb-6 text-dark-blue md:mt-40 md:pt-10 font-Bai">Native Mobile App Development</h2>
                            </div>

                            <div className="bg-custome-blue w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-up"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4 font-Signika">
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



            <div id="TallyCustomizationsAndTrainings" />
            <section className="relative bg-fixed bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: `url(${BackGround})` }}>

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/10"></div>

                {/* Content */}
                <div className="relative z-10 container mx-auto py-20">
                    <section>
                        <div className="container mx-auto px-4">
                            <div className="text-custome-blue font-Signika">
                                <h3 className="font-semibold md:text-5xl text-3xl md:text-center mb-2 pb-5" data-aos="fade-up">Tally Customizations & Trainings </h3>
                            </div>

                            <div className=" px-4 py-5 md:mt-0 mt-5">
                                <h4 data-aos="fade-up" className="text-custome-blue text-3xl font-Signika my-5 border-custome-blue border-b-[1px] pb-2" >Tally Customization/Development</h4>

                                <div data-aos="fade-up" className="flex flex-wrap text-custome-blue bg-transparent font-Signika gap-6 p-6 shadow-md rounded-lg mt-10 border-[1px] border-gray-500">
                                    {/* Tally Customization */}
                                    <CardBody className="flex-1 min-w-[300px]">
                                        <h5 className="font-bold text-xl text-custome-blue mb-4" data-aos="fade-up">
                                            Tally Customization:
                                        </h5>
                                        <p className="text-lg leading-relaxed text-custome-blue" data-aos="fade-up">
                                            Tally Customization is a powerful way to extend the functionality of
                                            Tally and meet specific business needs. By leveraging Tally
                                            customization tools and services, businesses can improve efficiency,
                                            enhance decision-making, and gain a competitive advantage.
                                        </p>
                                    </CardBody>

                                    {/* Tally Development */}
                                    <CardBody className="flex-1 min-w-[300px] md:border-l-2 md:border-l-gray-400">
                                        <h5 className="font-bold text-xl text-custome-blue mb-4" data-aos="fade-up">
                                            Tally Development:
                                        </h5>
                                        <p className="text-lg leading-relaxed text-custome-blue" data-aos="fade-up">
                                            We customize and extend Tally ERP solutions to meet your unique
                                            business needs. Our expert team develops tailored plugins, integrations,
                                            and modifications to enhance Tally's capabilities, streamline your
                                            operations, and drive growth.
                                        </p>
                                    </CardBody>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>
            </section>

            <section className=" flex justify-center flex-col md:mb-60 mb-5">
                <div className="relative">
                    <img
                        src="/img/career_image.jpg"
                        alt="hst"
                        className="md:h-[500px] w-full md:object-cover"
                    />

                    <div className="container mx-auto text-left md:mt-2 px-4 py-2"
                        data-aos="fade-up"
                    >
                        <div className="flex">
                            <h2 className="md:text-5xl text-3xl font-bold  md:mb-6 text-dark-blue font-Bai">Tally Training</h2>
                            <h2 className="w-1/2 hidden md:block"></h2>
                        </div>
                    </div>
                    {/* Overlay */}
                    <div className="md:absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end">
                        <div className="container mx-auto md:flex  justify-center items-end md:mt-96">

                            <div className="w-[50%]"></div>
                            <div className="bg-custome-blue w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-up"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4 font-Signika">
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
                                data-aos="fade-up"
                            >
                                <h2 className="md:text-5xl text-3xl font-bold  md:mb-6 text-dark-blue md:mt-40 md:pt-10 font-Bai">Tally Development (TDL)</h2>
                            </div>

                            <div className="bg-custome-blue w-full md:w-[50%] md:p-8 text-center px-4"
                                data-aos="fade-up"
                            >
                                <Typography className=" font-normal text-white lg:text-xl text-left md:py-10 py-4 font-Signika">
                                    "Tally Development: We customize and extend Tally ERP solutions to meet your unique business needs.
                                    Our expert team develops tailored plugins, integrations, and modifications to enhance Tally's capabilities,
                                    streamline your operations, and drive growth."
                                </Typography>
                            </div>

                        </div>
                    </div>
                </div>

            </section>




            <section className="relative bg-white py-10">
                <div className="container mx-auto px-4" data-aos="fade-up">

                    {/* Download Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleDownload}
                            className="px-8 py-3 bg-dark-blue text-white font-semibold text-lg rounded-lg hover:bg-sky-blue transition duration-300"
                        >
                            Customized Ready Programs of Tally
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

export default OurServices;
