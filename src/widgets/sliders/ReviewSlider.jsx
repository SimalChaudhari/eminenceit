import PropTypes from "prop-types";
import { Card, CardBody, Tooltip, Typography } from "@material-tailwind/react";
import ReactStars from "react-stars";

export function ReviewSlider({ image, name, review, rating }) {
  return (
    <Card className="rounded-lg shadow-lg h-full mb-10 border-[1px]">
      <CardBody className="lg:p-6 p-4 flex flex-col min-h-[300px] items-left text-left justify-between">
        <div className="mb-4">
          {/*  
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
          />
        */}
          <ReactStars
            count={5}
            value={rating}
            size={24}
            color2={'#ffd700'}
            edit={false}
          />
        </div>
        <Tooltip content={review} placement="bottom" className="w-72 bg-gray-700">
          <Typography className="font-normal text-blue-gray-600 cursor-pointer">
            {review.length > 260 ? review.substring(0, 260) + '...' : review}
          </Typography>
        </Tooltip>
        <Typography variant="h5" className="mb-2 text-dark-blue" color="blue-gray">
          {name}
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
