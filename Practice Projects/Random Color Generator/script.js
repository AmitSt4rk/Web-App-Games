let background = document.querySelector('body');
let inputColor = document.querySelector('input');
let randomColorBtn = document.querySelector('.random');
let applyColorBtn = document.querySelector('.apply');
let currentColor = document.querySelector('.curr-color');

function randomNumber() {
    return Math.ceil(Math.random() * 255);
}
function generateRandomColor() {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

randomColorBtn.addEventListener("click", () => {
    background.style.backgroundColor = generateRandomColor();
    currentColor.innerText = `Current Color: ${generateRandomColor()}`;
});

applyColorBtn.addEventListener("click", () => {
    background.style.backgroundColor = inputColor.value;
    currentColor.innerText = `Current Color: ${inputColor.value}`;
    inputColor.value = "";
});