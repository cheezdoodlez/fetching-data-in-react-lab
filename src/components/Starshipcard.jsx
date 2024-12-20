import React from 'react';

function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      <p><strong>Class:</strong> {starship.starship_class}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Model:</strong> {starship.model}</p>
    </div>
  );
}

export default StarshipCard;
