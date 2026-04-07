import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";
import StarRating from "../components/StarRating";

const Home = () => {
  // ✅ STATE (VERY IMPORTANT — your error fixed here)
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");

  // ✅ SEARCH FUNCTION
  const handleSearch = async () => {
    const data = await searchMovies(query, year);
    setMovies(data.Search || []);
  };

  // ✅ LOAD DEFAULT TAMIL MOVIES
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white p-6">
      
      {/* 🔍 SEARCH BAR */}
      <div className="flex flex-wrap gap-3 mb-8">
        <input
          type="text"
          placeholder="Search Tamil movies..."
          className="p-2 rounded bg-gray-800 border border-gray-700 w-64"
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          type="text"
          placeholder="Year"
          className="p-2 rounded bg-gray-800 border border-gray-700 w-32"
          onChange={(e) => setYear(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Search
        </button>
      </div>

      {/* 🎬 MOVIE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {/* 🎬 POSTER */}
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
              alt={movie.Title}
              className="w-full h-72 object-cover"
            />

            {/* 📄 DETAILS */}
            <div className="p-3">
              <h2 className="font-bold text-lg">{movie.Title}</h2>
              <p className="text-sm text-gray-400">{movie.Year}</p>

              {/* ⭐ STAR RATING */}
              <StarRating movieId={movie.imdbID} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;