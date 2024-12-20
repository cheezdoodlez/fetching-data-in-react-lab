const BASE_URL = 'https://swapi.dev/api/starships/';

export async function fetchStarships() {

      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data.results; 
    
  }
  