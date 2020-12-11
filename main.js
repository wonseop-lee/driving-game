var car = {
  direction: 'ArrowRight'
};

function updateDir(event) {
  car.direction = event.key;
}

document.addEventListener('keydown', updateDir);
