import React from 'react';
import ReactDOM from 'react-dom/client';

function PokemonList(props) {
  const pokedex = props.pokedex;
  const listItems = pokedex.map(pokemon =>
    <li key={pokemon.number.toString()}>
      {pokemon.name}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<PokemonList pokedex={pokedex} />);
