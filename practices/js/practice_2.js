const number_one = document.getElementById('number_one');
const number_two = document.getElementById('number_two');
const sign_box = document.getElementById('sign_box');
const result_box = document.getElementById('result_box');

const clickMe = document.getElementById('clickMe');

clickMe.addEventListener("click", calculateFunc);

function calculateFunc() {
  var one = parseInt(number_one.value.trim());
  var two = parseInt(number_two.value.trim());
  var sign = sign_box.value.trim();

  if (sign == '+') {
    result_box.innerHTML = `${one + two}`;
  } else if (sign == '-') {
    result_box.innerHTML = `${one - two}`;
  } else if (sign == '*') {
    result_box.innerHTML = `${one * two}`;
  } else if (sign == '/') {
    result_box.innerHTML = `${one / two}`;
  } else {
    result_box.innerHTML = "Unable to calculate";
  }
}
