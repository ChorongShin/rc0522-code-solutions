/* exported setValue */

function setValue(object, key, value) {
  var property = object[key] = value;
  return property;
}
