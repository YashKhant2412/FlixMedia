import React, { useEffect } from "react";
import css from "./TVShowDetails.module.css";
import RatingStars from "./RatingStars";

const TVShowDetails = ({ tvShow }) => {
  const rating = tvShow.vote_average / 2;

  return (
    <div>
      <div className={css.title}>{tvShow.title}</div>
      <div className={css.rating}>
        <RatingStars rating={rating} />
        <span>{rating}/5</span>
      </div>
      <div className={css.overview}>{tvShow.overview}</div>
    </div>
  );
};

export default TVShowDetails;
