// declaring variables screen and btn
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

let history = document.getElementById('history');

// creating function to append data in history box
function calculation(v) {
    var para = document.createElement('p');
    var data = v + " = " + eval(v);
    para.innerText = data;
    history.insertAdjacentElement('afterbegin', para); // Insert new entry at the top without moving existing entries
    return eval(v);
}

document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Check if the key is a number or an operator
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        screen.value += key; // Append number or operator to the display
    }

    // Handle Enter key for evaluation
    if (key === 'Enter') {
        screen.value = calculation(screen.value);
    }

    // Handle Backspace key for removing last character
    if (key === 'Backspace') {
        backspc();
    }
});

// for getting value of button, we use for loop
for (let item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;
        screen.value += btntext;
    });
}

// creating functions to get desired results
function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function square() {
    screen.value = Math.pow(screen.value, 2);
}

function cube() {
    screen.value = Math.pow(screen.value, 3);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function cubert() {
    screen.value = Math.cbrt(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

// Code for factorial
function fact() {
    var f = 1;
    var num = screen.value;
    for (var i = 1; i <= num; i++) {
        f = f * i;
    }
    screen.value = f;
}

function clearHistory() {
    history.innerHTML = ''; // Clear the history display
}

// Call clearHistory to remove existing history entries
clearHistory();

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
