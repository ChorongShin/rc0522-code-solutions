var pokemon = document.querySelector('.pokemon');
// var images = ['001.png', '004.png', '007.png', '025.png', '039.png'];
var $dotsDiv = document.querySelector('.dots-div');
var $dots = document.querySelectorAll('.dot');
var $previousIcon = document.querySelector('.fa-angle-left');
var $nextIcon = document.querySelector('.fa-angle-right');
var data =
{
  views: ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'jigglypuff'],
  images: ['001.png', '004.png', '007.png', '025.png', '039.png']
};

var count = 0;

setInterval(function () {
  if (count === 0) {

    setImg();
    count++;
  } else if (count < 6 && count >= 1) {
    setImg();
    $dots[count - 1].className = 'dot';
    $dots[count].className = 'dot on';
    count++;
  }

  if (count === data.images.length) {
    $dots[count - 1].className = 'dot';
    setImg();
    count = 0;
    $dots[0].className = 'dot on';
    setImg();
    count = 0;
  }

}, 1000);

function previous() {
  if (count <= 0) {
    count = data.images.length;
    $dots[count].className = 'dot';
  }
  count--;
  $dots[count].className = 'dot on';
  $dots[count + 1].className = 'dot';

  return setImg();
}

function next() {
  if (count >= data.images.length - 1) {
    count = -1;
    $dots[count].className = 'dot';

  }
  count++;
  $dots[count].className = 'dot on';
  $dots[count - 1].className = 'dot';
  return setImg();
}

function setImg() {
  pokemon.setAttribute('src', 'images/' + data.images[count]);
  pokemon.setAttribute('alt', data.views[count]);
}

$previousIcon.addEventListener('click', previous);
$nextIcon.addEventListener('click', next);
$dotsDiv.addEventListener('click', function (event) {
  for (var i = 0; i < $dots.length; i++) {
    if (event.target.id === data.views[i]) {
      $dots[i].className = 'dot on';
      pokemon.setAttribute('src', 'images/' + data.images[i]);
    } else {
      $dots[i].className = 'dot';
    }
  }

});
