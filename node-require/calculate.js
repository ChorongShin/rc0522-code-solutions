const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = parseInt(process.argv[2], 10);
const num2 = parseInt(process.argv[4], 10);
const operation = process.argv[3];

let result;
if (operation === 'plus') {
  result = add(num1, num2);
} else if (operation === 'minus') {
  result = subtract(num1, num2);
} else if (operation === 'over') {
  result = divide(num1, num2);
} else if (operation === 'times') {
  result = multiply(num1, num2);
}

console.log('Result:', result);
