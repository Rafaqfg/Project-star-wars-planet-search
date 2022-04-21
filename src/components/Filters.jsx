import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';
import Table from './Table';

function Filters() {
  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const operators = ['maior que', 'menor que', 'igual a'];

  const { filterByNumericValues, setFilterByNumericValues,
    column, setColumn, operator, setOperator,
    value, setValue, data } = useContext(StarWarsContext);

  const handleChange = ({ target }, callback) => {
    callback(target.value);
  };

  const concatenateFilters = () => {
    const addFilter = {
      column,
      operator,
      value,
    };
    const updateFilters = [...filterByNumericValues, addFilter];
    setFilterByNumericValues(updateFilters);
  };

  const applyingFilters = () => {
    let updateFilter = data;
    filterByNumericValues.forEach((filter) => {
      updateFilter = updateFilter.filter((element) => {
        if (filter.operator === 'maior que') {
          return Number(element[filter.column]) > Number(filter.value);
        }
        if (filter.operator === 'menor que') {
          return Number(element[filter.column]) < Number(filter.value);
        }
        if (filter.operator === 'igual a') {
          return Number(element[filter.column]) === Number(filter.value);
        }
        return updateFilter;
      });
    });
    return updateFilter;
  };

  const usedFilters = () => {
    let usedColumns = columns;
    filterByNumericValues.forEach((element) => {
      usedColumns = usedColumns.filter((usedColumn) => usedColumn !== element.column);
    });
    return usedColumns;
  };

  return (
    <div>
      <form>
        <label htmlFor="column-filter">
          Column
          <select
            data-testid="column-filter"
            value={ column }
            onChange={ (event) => handleChange(event, setColumn) }
          >
            {usedFilters()
              .map((columnMap) => <option key={ columnMap }>{ columnMap }</option>)}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Operator
          <select
            data-testid="comparison-filter"
            value={ operator }
            onChange={ (event) => handleChange(event, setOperator) }
          >
            {operators
              .map((operatorMap) => <option key={ operatorMap }>{ operatorMap }</option>)}
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            data-testid="value-filter"
            type="number"
            value={ value }
            onChange={ (event) => handleChange(event, setValue) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ concatenateFilters }
        >
          Filter
        </button>
      </form>
      <Table applyingFilters={ applyingFilters } />
    </div>
  );
}

export default Filters;
