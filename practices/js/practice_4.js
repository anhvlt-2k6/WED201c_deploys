const number_input = document.getElementById('number_input');
const result = document.getElementById('result');

const getResult = document.getElementById('getResult');

getResult.addEventListener("click", () => {
  var num = number_input.value.trim();
  if (Number.isInteger(Number(num))) {
    result.innerHTML = "This is an integer";
  } else {
    result.innerHTML = "This is not an integer";
  }
});