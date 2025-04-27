import React from 'react';
import './TourCard.css'; // Optional: Add styles for the card

function TourCard({ tour, onRemove }) {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h3>{name}</h3>
        <p>{info}</p>
        <p className="tour-price">Price: ${price}</p>
        <button className="not-interested-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;