var $circle = document.querySelector('.circle');

$circle.addEventListener('click', function (event) {
  if (event.target.className === 'circle on') {
    document.body.className = 'background-off';
    event.target.className = 'circle off';
  } else if (event.target.className === 'circle off') {
    document.body.className = 'background-on';
    event.target.className = 'circle on';
  }
});
