const $countdownDisplay = document.querySelector('.countdown-display');

setInterval(countDown, 1000);

var count = 4;
function countDown() {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}
