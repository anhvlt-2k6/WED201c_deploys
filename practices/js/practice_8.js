const emailBox = document.getElementById('email-input');

const submitButton = document.getElementById('submit-button');

const emailResult = document.getElementById('email-result-box');

submitButton.addEventListener('click', () => {
    var regexEmail = /([A-Za-z0-9._-]{1,})@(([A-Za-z0-9]{2,}).[A-Za-z0-9]{2,})/;
    var email = emailBox.value.trim();
    
    if (regexEmail.test(email)) {
        emailResult.innerHTML = "Email is passed";
    } else {
        emailResult.innerHTML = "Email is not passed";
    }
});