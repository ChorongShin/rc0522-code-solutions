var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  // console.log(event.target.matches('.tab'));
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      // console.log($tabs[i]);
      if ($tabs[i] === event.target) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    var dataView = event.target.getAttribute('data-view');
    // console.log(dataView);
    for (var j = 0; j < $views.length; j++) {
      // console.log($views[j].getAttribute('data-view'));
      if ($views[j].getAttribute('data-view') === dataView) {
        $views[j].className = 'view';
      } else {
        $views[j].className = 'hidden';
      }
    }
  }
});

// Alternative solution
// function handleEvent(event) {
//   if (event.target.matches('.tab')) {
//     for (var i = 0; i < $tabs.length; i++) {
//       if ($tabs[i] === event.target) {
//         $tabs[i].className = 'tab active';
//         $views[i].className = 'view';
//       } else {
//         $tabs[i].className = 'tab';
//         $views[i].className = 'hidden';
//       }
//     }
//   }
// }

// $tabContainer.addEventListener('click', handleEvent);
