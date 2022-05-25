var $characters = document.querySelectorAll('.type');
var $modal = document.querySelector('.modal');
var $yesButton = document.querySelector('.yes');
var $noButton = document.querySelector('.no');
var $overlay = document.querySelector('.overlay');

var index = 0;

document.addEventListener('keydown', function (event) {

  if (event.key === $characters[index].textContent) {
    $characters[index].className = 'type green';
    index++;
    $characters[index].className = 'type on';
  } else if (event.key !== $characters[index].textContent) {
    $characters[index].className = 'type red';

  } else if (event.key === 'Backspace') {
    index--;
  }

  if ($characters[index] === $characters[$characters.length - 1]) {
    $modal.className = 'show';
    $overlay.className = 'overlay on';

  }
});

function closeModal(overlay, modal) {
  overlay.className = 'overlay';
  modal.className = 'hide';
}

$yesButton.addEventListener('click', function (event) {
  event.target.className = 'yes';
  closeModal($overlay, $modal);
  location.reload();
});

$noButton.addEventListener('click', function (event) {
  event.target.className = 'no';
  closeModal($overlay, $modal);
});
