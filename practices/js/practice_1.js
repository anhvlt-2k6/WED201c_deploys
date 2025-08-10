const clickMe_button = document.getElementById("clickMe");
const Hw_p = document.getElementById("show_helloworld");
const changeHW_button = document.getElementById("changeHwColor");

clickMe_button.addEventListener("click", () => {
  Hw_p.textContent = "Hello World!";
});

changeHW_button.addEventListener("click", () => {
  const getColor = document.getElementById("getcolor").value.trim();
  
  if (getColor) {
    Hw_p.style.color = getColor;
  }
});
