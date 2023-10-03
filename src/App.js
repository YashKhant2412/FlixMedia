import React, { useEffect, useState } from "react";

import css from "./App.module.css";
import { fetchPopulars, fetchRecommandation, fetchByTitle } from "./api/tvShow";
import TVShowDetails from "./TVShowDetails/TVShowDetail";
import Logo from "./Logo/Logo";
import logoImg from "./icons/logo.png";
import TVShowList from "./TVShowList/TVShowList";
import Searchbar from "./Searchbar/Searchbar";

const App = () => {
  const [currentShow, setCurrentShow] = useState();
  const [tvShowList, setTvShowList] = useState();
  const [recommandationList, setRecommandationList] = useState([]);

  const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

  const fetchShows = async () => {
    const tvtemp = await fetchPopulars();
    if (tvtemp.length > 0) {
      setTvShowList(tvtemp);
      setCurrentShow(tvtemp[1]);
    }

    console.log(tvtemp, "app");
  };

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchReco = async (id) => {
    const tvtemp = await fetchRecommandation(id);
    if (tvtemp.length > 0) {
      setRecommandationList(tvtemp.slice(0, 20));
    }

    console.log(tvtemp, "reco");
  };

  const fetchTitle = async (title) => {
    const tvtemp = await fetchByTitle(title);
    if (tvtemp.length > 0) {
      setCurrentShow(tvtemp[0]);
    }

    console.log(tvtemp, "reco");
  };

  useEffect(() => {
    if (currentShow != null) {
      fetchReco(currentShow.id);
    }
  }, [currentShow]);

  console.log(currentShow, "currentshow");

  return (
    <>
      <div
        className={css.main_container}
        style={{
          background: currentShow
            ? `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.65)),
               url("${BACKDROP_BASE_URL}${currentShow.backdrop_path}") no-repeat center / cover`
            : "black",
        }}
      >
        <div className={css.header}>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <Logo
                img={logoImg}
                title="NetFlix"
                Subtitle="Find Your Entertainment"
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <Searchbar
                fetchTitle={(title) => {
                  fetchTitle(title);
                }}
              />
            </div>
          </div>
        </div>
        <div className={css.show_detail}>
          {currentShow && <TVShowDetails tvShow={currentShow} />}
        </div>
        <div className={css.reco_Container}>
          <div className={css.reco_title}>You May Like...</div>
          <div className={css.recommended_shows}>
            {recommandationList.length > 0 &&
              recommandationList.map((shows) => (
                <TVShowList
                  tvShow={shows}
                  onClick={(show) => {
                    setCurrentShow(show);
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
