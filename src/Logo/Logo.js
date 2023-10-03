import React from "react";
import css from "./Logo.module.css";

const Logo = ({ img, title, Subtitle }) => {
  return (
    <div className={css.container}>
      <div className={css.c1}>
        <img src={img} alt="Logo" />
        <span>{title}</span>
      </div>
      <div className={css.c2}>
        <span>{Subtitle}</span>
      </div>
    </div>
  );
};

export default Logo;
