import React, { useState } from 'react';

function StarshipSearch({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search starships..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default StarshipSearch;
