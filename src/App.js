import React, { useState, useEffect } from 'react'
import './App.css';
import ListingCharacters from './components/ListingCharacters';

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((promisse) => promisse.json())
    .then((response) => setData(response))
  }, [])

  const renderTotalChracter = () => {
    if(data) {
      return <span>{data.info.count}</span>
    }
  }

  return (
    <div className="App">

      <h1>Rick and Morty Personagens</h1>

      <h3>Número total de Personagens: {renderTotalChracter()}</h3>

      <ListingCharacters chracters={data?.results}/>
    
    </div>
  );
}

export default App;
