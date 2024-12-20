import './App.css'
import { fetchStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { useState, useEffect } from 'react';
const App = () => {

  const [starships, setStarships] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const loadStarships = async () => {
      const data = await fetchStarships()
      setStarships(data)
    };
    loadStarships()
  }, [])

  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <StarshipSearch onSearch={(query) => setSearchQuery(query)} />
      <StarshipList starships={filteredStarships} />
    </div>
  );
}

export default App