export default function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

// CommonJS way
// module.exports = toArray;
