import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { AiOutlineSmile } from 'react-icons/ai';
import { GiTrophyCup } from 'react-icons/gi';
import { IoMdThumbsUp } from 'react-icons/io';
import PortfolioImage from '../../assets/images/Our_Achievements_and_Awards_Background.jpg'; // Make sure to import the background image
import { Card, Typography } from '@material-tailwind/react';

const cards = [
    {
        icon: <FaRegClock className="text-white font-body lg:text-7xl text-5xl hover:scale-110 transition-transform duration-300 mb-4" />,
        title: "15+ Years Expertise",
        description: "Over a decade of experience in the same domain, delivering excellence.",
    },
    {
        icon: <AiOutlineSmile className="text-white font-body lg:text-7xl text-5xl hover:scale-110 transition-transform duration-300 mb-4" />,
        title: "800+ Happy Clients",
        description: "Trusted by hundreds of satisfied clients worldwide.",
    },
    {
        icon: <GiTrophyCup className="text-white font-body lg:text-7xl text-5xl hover:scale-110 transition-transform duration-300 mb-4" />,
        title: "1000+ Projects",
        description: "Successfully completed over a thousand projects.",
    },
    {
        icon: <IoMdThumbsUp className="text-white font-body lg:text-7xl text-5xl hover:scale-110 transition-transform duration-300 mb-4" />,
        title: "98% Retention Rate",
        description: "Our dedication ensures a high retention rate for clients.",
    }
];

function AchievementsAndAwardsComponent() {
    return (
        <section className="bg-white md:pb-24 pb-[40rem]">
            <div className="md:h-[520px] h-screen relative">
                <Card
                    className="shadow-lg border  rounded-none"
                    style={{
                        backgroundImage: `url(${PortfolioImage})`,  // Using imported image
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '400px',
                    }}
                >
                    {/* Container for the content */}
                    <div className="container mx-auto">
                        {/* Flex container to center the title */}
                        <div className="flex items-center justify-start h-full">
                            <div className="text-left flex justify-center items-center p-6">
                                <Typography
                                    variant="h2"
                                    color="blue-gray"
                                    className="mb-3 mt-2 font-bold text-white lg:text-5xl font-Signika"
                                    data-aos="fade-up"
                                >
                                    Achievements / Awards
                                </Typography>
                            </div>
                        </div>

                        {/* Cards displaying achievements */}
                        <div className="bg-light-red-600 absolute mt-32 mb-52 px-4" data-aos="fade-up">
                            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {cards.map((card, index) => (
                                    <div key={index} className="shadow-lg border shadow-gray-500/10 rounded-none bg-custome-blue">
                                        <div className="flex items-center justify-center h-full">
                                            <div className="text-center p-6 flex flex-col items-center justify-center">
                                                {/* Render the icon */}
                                                <div className="mb-4 font-Signika">{card.icon}</div>
                                                {/* Render the title */}
                                                <h2 className="mb-3 mt-2 font-bold text-white lg:text-3xl text-2xl font-Signika">{card.title}</h2>
                                                {/* Render the description */}
                                                <p className="text-white font-Signika">{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

export default AchievementsAndAwardsComponent;
