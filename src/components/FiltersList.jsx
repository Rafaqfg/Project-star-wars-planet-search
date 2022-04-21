import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function FiltersList() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);

  const deleteFilter = ({ target }) => {
    const updateList = filterByNumericValues.filter((item) => target.id !== item.column);
    setFilterByNumericValues(updateList);
  };

  return (
    <ul>
      {
        filterByNumericValues.map((filter) => (
          <li
            key={ [filter.column] }
            data-testid="filter"
          >
            <spam>{`${filter.column} `}</spam>
            <spam>{`${filter.operator} `}</spam>
            <spam>{`${filter.value} `}</spam>
            <button
              id={ filter.column }
              type="button"
              onClick={ deleteFilter }
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
