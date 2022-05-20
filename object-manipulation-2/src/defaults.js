/* exported defaults */
function defaults(target, source) {
  var attributes = Object.keys(source);
  for (var i = 0; i < attributes.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(target, attributes[i])) {
      target[attributes[i]] = source[attributes[i]];
    }
  }

}
