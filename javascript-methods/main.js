var numberOne = 10;
var numberTwo = 30;
var numberThree = -1;

var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('maximumValue:', maximumValue);

var heroes = ['Black Widow', 'Scarlet Witch', 'Captain America', 'Black Panther'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel'
  },
  {
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Stella Shin';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
