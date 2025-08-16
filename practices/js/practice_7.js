const regexBox = document.getElementById('input-regex');
const textBox = document.getElementById('input-text');

const submitButton = document.getElementById('submit-button');

const resultBox = document.getElementById('result-box');

submitButton.addEventListener('click', () => {
    const regexInput = RegExp(String(regexBox.value || '').trim());
    let text = (textBox.value || '').trim();

    if (!regexInput || !text) {
        resultBox.innerHTML = "Please input something in the Regex Box";
        return;
    }
    try {
        resultBox.innerHTML = regexInput.test(text);
    } catch (err) {
        resultBox.innerHTML = err;
    }
});