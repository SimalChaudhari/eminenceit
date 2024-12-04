import PropTypes from "prop-types";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function ReviewSlider({ image, name, review }) {
  return (
    <Card className="rounded-lg shadow-lg h-full mb-10 border-[1px]">
      <CardBody className="lg:p-6 p-4 text-center flex flex-col min-h-[300px]">
        <div className="mb-4">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
          />
          <Typography variant="h5" className="mb-2 text-dark-blue" color="blue-gray">
            {name}
          </Typography>
        </div>
          <Typography className="font-normal text-blue-gray-600 cursor-pointer">
            {review}
          </Typography>
      </CardBody>
    </Card>
  );
}

ReviewSlider.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default ReviewSlider;
