import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Table() {
  const columns = ['Name', 'Rotation Period',
    'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

  const { data, loading } = useContext(StarWarsContext);

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
            {
              data.map((planet) => (
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
              ))
            }
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
