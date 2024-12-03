import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

export function HomeSlider({ color, icon, title, description }) {
    return (
        <Card className="rounded-lg shadow-lg shadow-gray-500/10 h-full lg:mb-10 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,111,184,0.4)] transition-all duration-300">
            <CardBody className="lg:p-6 p-0 py-6 lg:px-8 px-4 text-center flex flex-col min-h-[300px]">
                <div>
                    <IconButton
                        variant="gradient"
                        size="lg"
                        color={color}
                        className="pointer-events-none mb-6 rounded-full"
                    >
                        {icon}
                    </IconButton>
                    <Typography variant="h5" className="mb-4" color="blue-gray">
                        {title}
                    </Typography>
                </div>

                <Tooltip content={description} placement="bottom" className="w-72 bg-gray-700">
                    <Typography className="font-normal text-blue-gray-600 cursor-pointer">
                        {description.length > 120 ? description.substring(0, 120) + '...' : description}
                    </Typography>
                </Tooltip>
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
    description: PropTypes.node.isRequired,
};

HomeSlider.displayName = "/src/widgets/layout/home-slider.jsx";

export default HomeSlider;
