const API_KEY = "27f9e4dcda871b0777f6ba7b462be5ea";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_networks=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_networks=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
