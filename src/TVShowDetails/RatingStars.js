import React from "react";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";
const RatingStars = ({ rating }) => {
  const starList = [];

  for (let i = 0; i < parseInt(rating); i++) {
    starList.push(<StarFill />);
  }

  if (rating - parseInt(rating) >= 0.5) {
    starList.push(<StarHalf />);
  }

  const emptyStarCount =
    5 - parseInt(rating) - (rating - parseInt(rating) >= 0.5 ? 1 : 0);

  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(<Star />);
  }

  return <div>{starList}</div>;
};

export default RatingStars;
