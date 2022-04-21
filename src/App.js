import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsProvider from './context/starWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <Header />
        <Filters />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
