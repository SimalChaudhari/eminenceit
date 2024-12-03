import PropTypes from "prop-types";
import { Card } from "@material-tailwind/react";

export function PartnerSlider({ title, image }) {
  return (
    <Card className=" h-full mb-10  overflow-hidden shadow-none">
      {/* Image Section */}
        <img
          src={image}
          alt={title} // Title displayed in the alt attribute
          className="h-28 max-w-[80%] object-contain"
        />
    </Card>
  );
}

// Define PropTypes
PartnerSlider.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PartnerSlider;
