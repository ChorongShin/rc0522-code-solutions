fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      return;
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error('Fetch failed!', err));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Fetch failed!', err));
