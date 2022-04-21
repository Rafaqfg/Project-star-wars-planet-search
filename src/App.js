import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/starWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
