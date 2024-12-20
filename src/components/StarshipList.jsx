import React from 'react';
import StarshipCard from './StarshipCard';

function StarshipList({ starships }) {
  if (starships.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <p>Displaying {starships.length} starships</p>
      <div className="starship-list">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default StarshipList;
