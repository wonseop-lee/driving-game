var $img = document.querySelector('img');

var car = {
  direction: ''
};

function updateDir(event) {
  if (event.key === 'ArrowRight' ||
      event.key === 'ArrowDown' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowUp') {
    car.direction = event.key;
    $img.setAttribute('class', car.direction);
  }
}

document.addEventListener('keydown', updateDir);
