import React from 'react';
import './App.css';
import NumberOfRandomJokeUniversal from './NumberOfRandomJokeUniversal'; 
import RandomJokeModule from './RandomJokeModule'

function App() {
  return (
    <div className="App">
      <RandomJokeModule />
      <NumberOfRandomJokeUniversal 
        doesHaveNumber
        doesHaveCategories
        doesHaveTitle="Get some more Chuck jokes... search or choose a category:" 
        doesHaveSearch />
    </div>
  );
}
export default App;
