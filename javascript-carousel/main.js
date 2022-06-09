var pokemon = document.querySelector('.pokemon');
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
var intervalId = null;

function dotsCount() {
  for (var i = 0; i < $dots.length; i++) {
    $dots[i].className = 'dot';
  }
  $dots[count].className = 'dot on';
}

function pokemons() {
  if (count < data.images.length - 1) {
    count++;
    setImg();
    dotsCount();
  } else if (count === 4) {
    count = -1;
    count++;
    setImg();
    dotsCount();
  }
}

intervalId = setInterval(pokemons, 3000);

function previous() {
  if (count <= 0) {
    count = data.images.length;
    $dots[count].className = 'dot';
  }
  count--;
  dotsCount();

  return setImg();
}

function next() {
  if (count >= data.images.length - 1) {
    count--;
    $dots[count].className = 'dot';

  }
  count++;
  dotsCount();
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
  clearInterval(intervalId);
  intervalId = setInterval(pokemons, 3000);
});
