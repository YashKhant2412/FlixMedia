import axios from "axios";

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjMwOWE0NDljNjU2YzdmYWM4NjBlNjkzMTkyMTI5OSIsInN1YiI6IjY1MTcxM2IzOTNiZDY5MDBhY2M2NjJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8k29zHAOleCB-ZlB_eHjvyPf_2DEMm7lVfx3x84iXAk' \
//      --header 'accept: application/json'

const fetchPopulars = async () => {
  const URL =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjMwOWE0NDljNjU2YzdmYWM4NjBlNjkzMTkyMTI5OSIsInN1YiI6IjY1MTcxM2IzOTNiZDY5MDBhY2M2NjJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8k29zHAOleCB-ZlB_eHjvyPf_2DEMm7lVfx3x84iXAk",
    accept: "applocation/json",
  };

  const res = await axios.get(URL, { headers });
  console.log(res, "Res");

  const data = res.data.results;

  return data;
};

const fetchRecommandation = async (id) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjMwOWE0NDljNjU2YzdmYWM4NjBlNjkzMTkyMTI5OSIsInN1YiI6IjY1MTcxM2IzOTNiZDY5MDBhY2M2NjJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8k29zHAOleCB-ZlB_eHjvyPf_2DEMm7lVfx3x84iXAk",
    accept: "applocation/json",
  };

  const res = await axios.get(URL, { headers });
  console.log(res, "Res");

  const data = res.data.results;

  return data;
};

const fetchByTitle = async (title) => {
  const URL = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjMwOWE0NDljNjU2YzdmYWM4NjBlNjkzMTkyMTI5OSIsInN1YiI6IjY1MTcxM2IzOTNiZDY5MDBhY2M2NjJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8k29zHAOleCB-ZlB_eHjvyPf_2DEMm7lVfx3x84iXAk",
    accept: "applocation/json",
  };

  const res = await axios.get(URL, { headers });
  console.log(res, "Res");

  const data = res.data.results;

  return data;
};

export { fetchPopulars, fetchRecommandation, fetchByTitle };
