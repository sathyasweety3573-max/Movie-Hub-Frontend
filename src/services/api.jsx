export const searchMovies = async (query, year) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=fcc11d8e&s=${query || "tamil"}&y=${year || ""}`
  );
  return await res.json();
};