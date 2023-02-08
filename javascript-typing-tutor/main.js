const $characters = document.querySelectorAll('.type');
const $modal = document.querySelector('.modal');
const $yesButton = document.querySelector('.yes');
const $noButton = document.querySelector('.no');
const $overlay = document.querySelector('.overlay');
const $accuracy = document.querySelector('.accuracy');
const $errors = document.querySelector('.errors');

let index = 0;
let errors = 0;
let deleteT = 0;

document.addEventListener('keydown', function (event) {

  if (event.key === $characters[index].textContent) {
    $characters[index].className = 'type green';
    index++;
    $characters[index].className = 'type on';
  } else if (event.key !== $characters[index].textContent) {
    $characters[index].className = 'type red';
    errors++;

  }
  if (event.key === 'Backspace') {
    deleteT++;
    $characters[index].className = 'type on';
  }

  const totalErrors = errors - deleteT;
  const totalWords = $characters.length - 1;
  const correctedKeys = totalWords - totalErrors;
  const accuracy = (correctedKeys / totalWords) * 100;

  if ($characters[index] === $characters[$characters.length - 1]) {
    $modal.className = 'show';
    $overlay.className = 'overlay on';
    $accuracy.textContent = `${accuracy}%`;
    $errors.textContent = `${totalErrors}`;
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
