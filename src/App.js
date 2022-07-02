import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Headers from './components/ul/Headers';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ul/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const api = await axios(`https://rickandmortyapi.com/api/character?name=${query}`);

      console.log(api.data.results);

      setItems(api.data.results);
      setIsLoading(false);
    }

    fetchData();
  }, [query])

  return (
    <div className="container">
      <Headers />
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
