import React from 'react';
import './Ratings.css';
import { FaStar } from 'react-icons/fa';

function Ratings() {
  return (
    <div className="ratings-container">
      <div className="ratings-header">
        <img src="src/Assets/images/ceo.jpg" alt="User" />
        <div className="user-info">
          <h3>Batosh</h3>
          <span>CEO</span>
        </div>
      </div>
      <div className="ratings-stars">
        {[...Array(5)].map(( index) => (
          <FaStar key={index} color="#FFD700" />
        ))}
      </div>
      <p className="ratings-description">
        Lorem ipsum dolor sit amet consectetur. Fringilla nunc etiam ornare massa.
      </p>
    </div>
  );
}

export default Ratings;
