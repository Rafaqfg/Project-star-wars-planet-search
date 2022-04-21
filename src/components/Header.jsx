import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Header() {
  const { nameFilter, setNameFilter } = useContext(StarWarsContext);

  function filterPlanets({ target }) {
    setNameFilter(target.value);
  }

  return (
    <form>
      <label htmlFor="name-filter">
        Star Wars Project
        <input
          type="text"
          data-testid="name-filter"
          id="name-filter"
          value={ nameFilter }
          onChange={ (e) => filterPlanets(e) }
        />
      </label>
    </form>
  );
}

export default Header;
