var $message = document.querySelector('.message');

setTimeout(function () {
  $message.textContent = 'Hello There';
}, 2000);

// Other solutions

// var timeoutId;

// function setMessage(outputContent) {
//   $message.textContent = outputContent;
// }

// function delayedMessage() {
//   setMessage('...');
//   timeoutId = setTimeout(setMessage, 2 * 1000, 'Hello There');
// }

// delayedMessage();

// const delayedMessage = message => {
//   setTimeout(() => {
//     $message.textContent = message;
//   }, 2000);
// };

// delayedMessage('Hello There');
