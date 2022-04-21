import React from 'react';
import './App.css';
import StarWarsProvider from './context/starWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <h1>hi</h1>
      </StarWarsProvider>
    </main>
  );
}

export default App;
