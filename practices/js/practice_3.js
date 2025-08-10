const askName = document.getElementById('askName');
const yourName = document.getElementById('yourName');

askName.addEventListener("click", funcEnterYourName);

function funcEnterYourName() {
  var fullName = prompt("Please enter your name");
  if (fullName == "" || fullName == null) {
    yourName.innerHTML = "Please enter your name";
  } else {
    yourName.innerHTML = fullName;
  }
}