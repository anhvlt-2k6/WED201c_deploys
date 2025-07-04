function onClick() {
    var fullname = prompt("Please enter your name: ");

    if (fullname == null || fullname == "") {
        alert("Please enter your name.");
        return;
    }

    document.getElementById("getName").innerHTML = fullname;
}

function checkAnswer(answer) {
    if (answer == 6) {
        document.getElementById("getAnswer").innerHTML = "True";
    } else {
        document.getElementById("getAnswer").innerHTML = "False";
    }

}

function sumTwoNumber(event) {
    event.preventDefault();

    const x = Number(document.getElementById("fnum").value);
    const y = Number(document.getElementById("snum").value);
    const resultEl = document.getElementById("sumresult");

    if (isNaN(x) || isNaN(y)) {
        resultEl.innerHTML = "Cannot proceed the sum: please enter both numbers.";
    } else {
        resultEl.innerHTML = `Sum: ${x + y}`;
    }
}
