import { useState } from "react";
import Star from "./Star";

function StarRating() {
  const [selectedStars, setSelectedStars] = useState(0);
  // '...Array(length)' creates an array with 'length' number of undefined elements.
  const createArray = length => [...Array(length)];

  const starMessages = {
    1: 'Bad',
    2: 'Okay',
    3: 'Good',
    4: 'Very Good',
    5: 'Excellent'
  };

  return (
    <>
      <div className="flex gap-5">
        {createArray(5).map((_, i) => (
          <Star key={i} selected={i < selectedStars} select={() => setSelectedStars(i + 1)}/>
        ))}
      </div>
      <div className="message-container">
        {selectedStars > 0 && <h2>{starMessages[selectedStars]}</h2>}
      </div>
      
    </>
  )
}

export default StarRating;