var form = document.querySelector('#contact-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  var messageData = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value
  };
  console.log('messageData:', messageData);

  form.reset();
});
