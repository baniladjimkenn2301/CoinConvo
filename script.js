let currentNumber = 0;

function updateNumberLabel() {
    document.getElementById('numberLabel').innerText = currentNumber;
}

function simulateAsyncOperation(callback) {
    // Simulate an asynchronous operation with a delay
    setTimeout(callback, 1000); // 1000 milliseconds (1 second) for simulation
}

function increment() {
    simulateAsyncOperation(function() {
        currentNumber++;
        updateNumberLabel();
        // You can add code here to send the updated value to your embedded system or Firebase.
    });
}

function decrement() {
    simulateAsyncOperation(function() {
        currentNumber--;
        updateNumberLabel();
        // You can add code here to send the updated value to your embedded system or Firebase.
    });
}

function moveLeft() {
    simulateAsyncOperation(function() {
        // Add logic for left arrow action if needed.
    });
}

function moveRight() {
    simulateAsyncOperation(function() {
        // Add logic for right arrow action if needed.
    });
}

// Continue with your existing JavaScript code...
