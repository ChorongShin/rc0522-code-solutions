const takeAChance = require('./take-a-chance');

const myPromise = takeAChance('Stella');

myPromise.then(resolve => {
  console.log(resolve);
}).catch(reject => {
  console.error(reject.message);
});
