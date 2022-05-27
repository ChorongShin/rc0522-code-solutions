var books = [
  {
    isbn: '978-0684801223',
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway'
  },
  {
    isbn: '978-0061122415',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    isbn: '978-0156027328',
    title: 'Life of Pi',
    author: 'Yann Martel'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var json = JSON.stringify(books);
console.log('json:', json);
console.log('typeof json:', typeof json);

var student = '{ "id": "3213523", "name": "Stella" }';
console.log('student:', student);
console.log('typeof student:', typeof student);

var obj = JSON.parse(student);
console.log('parse:', obj);
console.log('typeof parse:', typeof obj);
