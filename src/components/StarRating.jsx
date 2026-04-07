import { useState } from "react";

const StarRating = ({ movieId }) => {
  const [rating, setRating] = useState(
    localStorage.getItem(movieId) || 0
  );

  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem(movieId, value);
  };

  return (
    <div className="flex mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRating(star)}
          className={`cursor-pointer text-2xl ${
            star <= rating ? "text-yellow-400" : "text-gray-500"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;