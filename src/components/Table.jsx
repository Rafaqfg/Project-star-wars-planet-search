import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/starWarsContext';

function Table(props) {
  const columns = ['Name', 'Rotation Period',
    'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

  const { data, loading, nameFilter } = useContext(StarWarsContext);
  const { applyingFilters } = props;
  return (
    <div>
      { loading ? (
        <h2>Loading...</h2>
      ) : (
        <table>
          <thead>
            <tr>
              {columns.map((column) => <th key={ column }>{column}</th>)}
            </tr>
          </thead>
          <tbody>
            { data
            && applyingFilters()
              .filter((item) => item.name.toLowerCase().includes(nameFilter))
              .map((planet) => (
                <tr key={ planet.name } id={ planet.name }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.residents }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

Table.propTypes = {
  applyingFilters: PropTypes.func.isRequired,
};

export default Table;
