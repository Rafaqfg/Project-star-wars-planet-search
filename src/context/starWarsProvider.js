import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './starWarsContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider({ children }) {
  const [data, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameFilter, setNameFilter] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [value, setValue] = useState(0);

  // componentDidMount
  useEffect(() => {
    setLoading(true);
    const getPlanets = async () => {
      const response = await fetch(URL);
      const { results } = await response.json();
      setPlanets(results);
      setLoading(false);
    };
    getPlanets();
  }, []);

  const contextValue = {
    data,
    loading,
    nameFilter,
    setNameFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    operator,
    setOperator,
    value,
    setValue,
  };

  return (
    <section>
      <StarWarsContext.Provider value={ contextValue }>
        {children}
      </StarWarsContext.Provider>
    </section>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
