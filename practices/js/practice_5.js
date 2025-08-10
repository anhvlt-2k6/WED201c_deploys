const width = document.getElementById('width');
const height = document.getElementById('height');
const color = document.getElementById('color');

const confirmButton = document.getElementById('confirmButton');

const thatbox = document.getElementById('thatbox');

confirmButton.addEventListener('click', () => {
  var width_value = width.value.trim();
  var height_value = height.value.trim();
  var color_value = color.value.trim();

  thatbox.style.width = width_value + 'px';
  thatbox.style.height = height_value + 'px';
  thatbox.style.backgroundColor = color_value;
});