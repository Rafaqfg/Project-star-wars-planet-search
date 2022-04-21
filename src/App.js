import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsProvider from './context/starWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <Header />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
