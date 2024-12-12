import React from 'react';

import {
    // FaRegFileAlt,
    FaUsers,
    FaLightbulb,
    FaUserFriends,
    FaSmile,
} from "react-icons/fa";

const cards = [
    // {
    //     icon: <FaRegFileAlt className="text-custome-blue text-6xl mb-4" />,
    //     title: "Our Policy",
    //     description: "Offering Quality IT Services At Affordable Cost By Delivering 'On Time'",
    // },
    {
        icon: <FaUsers className="text-custome-blue text-6xl mb-4" />,
        title: "What We Do",
        description: "Executing the projects smoothly and Enhancing Recognition in the Digital World.",
    },
    {
        icon: <FaLightbulb className="text-custome-blue text-6xl mb-4" />,
        title: "Our Policy ",
        description: "Offering standard quality IT Services and Solutions at a reasonable cost.",
    },
    {
        icon: <FaUserFriends className="text-custome-blue text-6xl mb-4" />,
        title: "What We Provide ",
        description: "Tailor made solutions with strong technical support.",
    },
    {
        icon: <FaSmile className="text-custome-blue text-6xl mb-4" />,
        title: "Our Happiness ",
        description: "Focus on delivering exceptional customer experiences, including responsive support and tailored solutions.",
    },
];

function StrategiesComponent() {
    return (
        <div className="strategies-container"
            data-aos="fade-up"
        >
            {/* Image or Strategy header */}

            {/* Cards section */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 font-Signika">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center relative overflow-hidden"
                    >
                        <div className="mb-4">{card.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-700">{card.title}</h3>
                        {/* Hover Content */}
                        <div className="absolute inset-0 bg-custome-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-center text-sm px-4">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StrategiesComponent;
