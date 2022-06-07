function ExampleConstructor() {}

console.log('value of prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

var anExample = new ExampleConstructor();
console.log('anExample:', anExample);

var isAnExample = anExample instanceof ExampleConstructor;
console.log('isAnExample:', isAnExample);
