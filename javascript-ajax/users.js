var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var user = document.createElement('li');
    user.textContent = xhr.response[i].name;
    $userList.append(user);
  }
});
xhr.send();

// Instructor's code
// var $userList = document.querySelector('#user-list');

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.status);
//   console.log(xhr.response);
// var users = xhr.response;
//   for (var i = 0; i < users.length; i++) {
//     var user = users[i];
//     var $li = document.createElement('li');
//     $li.textcontent = user.name;
//     $userList.appendChild($li);
//   }
// });
// xhr.send();
