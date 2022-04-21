import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import StarWarsContext from '../context/starWarsContext';

function FiltersList() {
  const { filterByNumericValues } = useContext(StarWarsContext);
  return (
    <ul>
      {
        filterByNumericValues.map((filter, index) => (
          <li
            key={ [index] }
            data-testid="filter"
          >
            <spam>{`${filter.column} `}</spam>
            <spam>{`${filter.operator} `}</spam>
            <spam>{`${filter.value} `}</spam>
            <button
              type="button"
            >
              x
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default FiltersList;
