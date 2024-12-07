import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
    IconButton,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HomeSlider({ color, icon, title, description, isEven }) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const navigate = useNavigate(); // For redirection

    const handleReadMore = () => {
        setShowFullDescription(!showFullDescription);
    };

    const handleEnquireNow = () => {
        navigate("/contact-us"); // Redirect to contact-us route
    };

    return (
        <Card
            className={`rounded-lg shadow-lg shadow-gray-500/10 h-full hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,111,184,0.4)] transition-all duration-300 ${isEven ? "bg-dark-blue" : "bg-custome-blue"
                }`}
        >
            <CardBody className="flex flex-col items-center justify-between text-center lg:p-8 p-6 min-h-[300px]">
                <div>
                    {/*
                    <IconButton
                        variant="gradient"
                        size="lg"
                        color={color}
                        className="pointer-events-none mb-6 rounded-full"
                    >
                        {icon}
                    </IconButton>
                    */}
                    <Typography variant="h3" className="mb-4 text-white" color="blue-gray">
                        {title}
                    </Typography>
                </div>

                <Typography className="font-normal text-white">
                    {showFullDescription
                        ? description
                        : description.length > 120
                            ? description.substring(0, 120) + "..."
                            : description}
                </Typography>

                <div className="mt-4 flex md:gap-20 gap-10">
                    <div>
                        {description.length > 120 ? (
                            <div
                                variant="outlined"
                                size="sm"
                                color="white"
                                onClick={handleReadMore}
                                className="text-white cursor-pointer"
                            >
                                {showFullDescription ? "Read Less" : "Read More"}
                            </div>
                        ) : (
                            <div className="h-8"></div> // Placeholder for consistent alignment
                        )}
                    </div>
                    {/* Enquire Now Button */}
                    <div>
                        <div
                            variant="filled"
                            size="sm"
                            // color="blue"
                            className="text-white cursor-pointer"
                            onClick={handleEnquireNow}
                        >
                            Enquire Now
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

HomeSlider.defaultProps = {
    color: "blue",
};

HomeSlider.propTypes = {
    color: PropTypes.oneOf([
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
    ]),
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

HomeSlider.displayName = "/src/widgets/layout/home-slider.jsx";

export default HomeSlider;
