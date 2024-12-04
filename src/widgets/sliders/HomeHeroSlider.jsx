import PropTypes from "prop-types";
import { Card } from "@material-tailwind/react";

export function HomeHeroSlider({ title, image }) {
  return (
    <Card className=" h-full overflow-hidden shadow-none rounded-none">
      {/* Image Section */}
        <img
          src={image}
          alt={title} // Title displayed in the alt attribute
          className="object-cover rounded-none min-h-[400px]"
        />
    </Card>
  );
}

// Define PropTypes
HomeHeroSlider.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HomeHeroSlider;
