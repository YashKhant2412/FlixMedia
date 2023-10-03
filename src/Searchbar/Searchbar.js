import React, { useState } from "react";
import css from "./Searchbar.module.css";
import { Search } from "react-bootstrap-icons";

const Searchbar = ({ fetchTitle }) => {
  const [searchText, setsearchText] = useState("");
  const fetchTitleMovie = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      fetchTitle(e.target.value);
      setsearchText("");
    }
  };
  return (
    <div>
      <Search size={25} className={css.icon} />
      <input
        type="text"
        className={css.input}
        value={searchText}
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
        placeholder="Search..."
        onKeyUp={fetchTitleMovie}
      />
    </div>
  );
};

export default Searchbar;
