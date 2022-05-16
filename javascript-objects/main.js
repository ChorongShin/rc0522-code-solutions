var student = {
  firstName: 'Stella',
  lastName: 'Shin',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Public Relations Practitioner';

console.log('value of student.livesInIrvie:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Hyundai',
  model: 'Santa Fe',
  year: 2021
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Tommy',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
