let screen = document.querySelector('.display');
let btnContainer = document.querySelector('.key-container');

let value = "";

btnContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'BUTTON') {
        let btn = event.target.getAttribute("id");
        if (btn === 'clear-btn') {
            screen.innerText = "";
        }

        if (btn === 'plus-btn') {
            value = '+';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'minus-btn') {
            value = '-';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'multiply-btn') {
            value = '*';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'divide-btn') {
            value = '/';
            screen.innerText = `${screen.innerText}${value}`;
        }

        if (btn === 'one-btn') {
            value = '1';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'two-btn') {
            value = '2';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'three-btn') {
            value = '3';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'four-btn') {
            value = '4';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'five-btn') {
            value = '5';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'six-btn') {
            value = '6';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'seven-btn') {
            value = '7';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'eight-btn') {
            value = '8';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'nine-btn') {
            value = '9';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'zero-btn') {
            value = '0';
            screen.innerText = `${screen.innerText}${value}`;
        }
        if (btn === 'point-btn') {
            value = '.';
            screen.innerText = `${screen.innerText}${value}`;
        }

        if (btn === 'equal-btn') {
            let evalution = eval(screen.innerText);
            screen.innerText = evalution.toFixed(2);
        }
    }
});