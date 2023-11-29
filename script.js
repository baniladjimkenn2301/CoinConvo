let currentNumber = 0;

function updateNumberLabel() {
    document.getElementById('numberLabel').innerText = currentNumber;
}


function increment() {
    currentNumber++;
    updateNumberLabel();
    // You can add code here to send the updated value to your embedded system or Firebase.
}

function decrement() {
    currentNumber--;
    updateNumberLabel();
    // You can add code here to send the updated value to your embedded system or Firebase.
}

function moveLeft() {
    // Add logic for left arrow action if needed.
}

function moveRight() {
    // Add logic for right arrow action if needed.
}
