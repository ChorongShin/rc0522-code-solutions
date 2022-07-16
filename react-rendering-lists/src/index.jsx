import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

// Class Solution
// const element = (
//   <ul>
//     {
//       pokedex.map(pokemon => {
//         return <li key={pokemon.number}>{pokemon.name}</li>;
//       })
//     }
//   </ul>
// );

// OR

const pokeList = pokedex.map(pokemon => {
  return (
        <li key={pokemon.number}>{pokemon.name}</li>
  );
});

const element = (
  <ul>
    {pokeList}
  </ul>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);

// function PokemonList(props) {
//   const pokedex = props.pokedex;
//   const listItems = pokedex.map(pokemon =>
//     <li key={pokemon.number.toString()}>
//       {pokemon.name}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const container = document.querySelector('#root');
// const root = ReactDOM.createRoot(container);
// root.render(<PokemonList pokedex={pokedex} />);
