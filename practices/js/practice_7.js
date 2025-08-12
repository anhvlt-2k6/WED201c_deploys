const regex_box = document.getElementById('regex_box');
const text_box = document.getElementById('text_box');
const result_box = document.getElementById('result_box');
const submit_button = document.getElementById('submit_button');

submit_button.addEventListener('click', handleRegex);

function handleRegex() {
  var result = text_box.value.trim().match(regex_box.value.trim());
  if (result != "" && result != null) {
    result_box.innerHTML = result;
  } else {
    result_box.innerHTML = "Invalid RegEx";
  }
}