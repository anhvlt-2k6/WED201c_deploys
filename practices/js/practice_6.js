const year = document.getElementById('year');
const month = document.getElementById('month');

const submit_button = document.getElementById('submit_button');

const result = document.getElementById('result');

submit_button.addEventListener('click', () => {
  var year_value = parseInt(year.value.trim());
  var month_value = parseInt(month.value.trim());

  if ((year_value % 4 == 0 || year_value % 100 == 0) && year_value % 400 != 0) {
    if (month_value == 2) {
      result.innerHTML = "29";
    } else if (month_value == 1 || month_value == 3 || month_value == 5 || month_value == 7 || month_value == 8 || month_value == 10 || month_value == 12) {
      result.innerHTML = "31";
    } else {
      result.innerHTML = "30";
    }
  } else {
    if (month_value == 2) {
      result.innerHTML = "28";
    } else if (month_value == 1 || month_value == 3 || month_value == 5 || month_value == 7 || month_value == 8 || month_value == 10 || month_value == 12) {
      result.innerHTML = "31";
    } else {
      result.innerHTML = "30";
    }
  }
});