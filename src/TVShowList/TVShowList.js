import React from "react";
import css from "./TVShowList.module.css";

const TVShowList = ({ tvShow, onClick }) => {
  const SMALLIMG_BASE_URL = "https://image.tmdb.org/t/p/w300";

  return (
    <div
      className={css.container}
      onClick={() => {
        onClick(tvShow);
      }}
    >
      <img
        src={SMALLIMG_BASE_URL + tvShow.backdrop_path}
        alt="img"
        className={css.img}
      />
      <div className={css.name}>
        {tvShow.title.slice(0, 37)}
        {tvShow.title.length > 37 ? "..." : ""}
      </div>
    </div>
  );
};

export default TVShowList;
