/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var lastName = person.lastName;
  var firstNameInitial = firstName[0];
  var lastNameInitial = lastName[0];
  return firstNameInitial + lastNameInitial;
}
