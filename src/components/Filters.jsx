import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Filters() {
  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const operators = ['maior que', 'menor que', 'igual a'];

  return (
    <form>
      <label htmlFor="column-filter">
        Column
        <select
          data-testid="column-filter"
        >
          {columns.map((column) => <option key={ column }>{ column }</option>)}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operator
        <select
          data-testid="comparison-filter"
        >
          {operators.map((operator) => <option key={ operator }>{ operator }</option>)}
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          type="number"
        />
      </label>
    </form>
  );
}

export default Filters;
