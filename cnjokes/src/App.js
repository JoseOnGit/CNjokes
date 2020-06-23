import React from 'react';
import './App.css';
import NumberOfRandomJokeClassUniversal from './NumberOfRandomJokeClassUniversal';
import NumberOfRandomJokeUniversal from './NumberOfRandomJokeUniversal';

function App() {
  return (
    <div className="App">
      <NumberOfRandomJokeUniversal doesHaveNumber="true" doesHaveCategories="true" />
    </div>
  );
}
export default App;
