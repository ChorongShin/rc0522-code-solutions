let count = 3;
let intervalID = null;

function countDown() {

  if (count > 0) {
    console.log(count);
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
  count--;
}

intervalID = setInterval(countDown, 1000);
