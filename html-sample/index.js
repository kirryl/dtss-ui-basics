const inputForm = document.getElementById("input-form");
const inputBox = document.getElementById("input-field");

let outputBox = document.getElementById("output-field");

inputForm.addEventListener('submit', event => {
    event.preventDefault();
    let name = inputBox.value;
    outputBox.innerHTML = "Hello, " + name + "!";
});