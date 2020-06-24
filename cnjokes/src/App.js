import React from 'react';
import './App.css';
import NumberOfRandomJokeClassUniversal from './NumberOfRandomJokeClassUniversal';
import NumberOfRandomJokeUniversal from './NumberOfRandomJokeUniversal';

function App() {
  return (
    <div className="App">
      <NumberOfRandomJokeClassUniversal doesHaveNumber="true" doesHaveCategories="true" />
      <NumberOfRandomJokeUniversal doesHaveNumber="true" doesHaveCategories="true" />
    </div>
  );
}
export default App;
