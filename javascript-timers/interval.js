var $countdownDisplay = document.querySelector('.countdown-display');

var intervalID = null;
var count = 4;

function countDown() {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}

intervalID = setInterval(countDown, 1000);
