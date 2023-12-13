var firebaseConfig = {
  apiKey: "AIzaSyA42CXT-fDFcC5HDPPh46shNHhMx8c2e0s",
  authDomain: "coinconvo-5cf2c.firebaseapp.com",
  databaseURL: "https://coinconvo-5cf2c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "coinconvo-5cf2c",
  storageBucket: "coinconvo-5cf2c.appspot.com",
  messagingSenderId: "507424099482",
  appId: "1:507424099482:web:6f69f7c9c26a7c56f2e323",
  measurementId: "G-2T07ZJNHMN"
  };
  
  //Initialize Database
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var totalAmountRef = database.ref('totalAmount');
  var storedAmountRef = database.ref('storedAmount');

  // Firebase references for maximum values
  var maxCoin1phpRef = database.ref('maxCoin1php');
  var maxCoin5phpRef = database.ref('maxCoin5php');
  var maxCoin10phpRef = database.ref('maxCoin10php');
  var maxCoin20phpRef = database.ref('maxCoin20php');
  

$(document).ready(function () {
  // Check if the 'totalAmount' node exists, if not, initialize it with a default value
  totalAmountRef.once('value', function (snapshot) {
    if (!snapshot.exists()) {
      // 'totalAmount' doesn't exist, initialize it with a default value (e.g., 0)
      totalAmountRef.set(0);
    }
  });

  totalAmountRef.on('value', function (snapshot) {
    var totalAmount = snapshot.val();
    updateTotalAmountInHTML(totalAmount);
  });

  function updateTotalAmountInHTML(amount) {
    // Update the HTML with the new total amount
    $('.total-amount').text(amount + " PHP");
  }
  initializeMaxCoinValues();
});

// Function to initialize maximum coin values in the database
function initializeMaxCoinValues() {
  maxCoin1phpRef.once('value', function(snapshot) {
      if (!snapshot.exists()) {
          maxCoin1phpRef.set(0); // Set default maximum value
      }
  });
  maxCoin5phpRef.once('value', function(snapshot) {
    if (!snapshot.exists()) {
        maxCoin5phpRef.set(0); // Set default maximum value
    }
  });
  maxCoin10phpRef.once('value', function(snapshot) {
    if (!snapshot.exists()) {
        maxCoin10phpRef.set(0); // Set default maximum value
    }
  });
  maxCoin20phpRef.once('value', function(snapshot) {
    if (!snapshot.exists()) {
        maxCoin20phpRef.set(0); // Set default maximum value
    }
  });

  // Repeat the above for maxCoin5phpRef, maxCoin10phpRef, and maxCoin20phpRef
}

// Update HTML with maximum values
function updateMaxCoinsInHTML(max1php, max5php, max10php, max20php) {
  $('#coin1php').val(max1php);
  $('#coin5php').val(max5php);
  $('#coin10php').val(max10php);
  $('#coin20php').val(max20php);
}

// Function to update all max coin values
function updateAllMaxCoins() {
  maxCoin1phpRef.once('value', function(snapshot1) {
    var max1php = snapshot1.val();
    maxCoin5phpRef.once('value', function(snapshot2) {
      var max5php = snapshot2.val();
      maxCoin10phpRef.once('value', function(snapshot3) {
        var max10php = snapshot3.val();
        maxCoin20phpRef.once('value', function(snapshot4) {
          var max20php = snapshot4.val();
          updateMaxCoinsInHTML(max1php, max5php, max10php, max20php);
        });
      });
    });
  });
}

// Call updateAllMaxCoins within each listener
maxCoin1phpRef.on('value', function(snapshot) {
  updateAllMaxCoins();
});
maxCoin5phpRef.on('value', function(snapshot) {
  updateAllMaxCoins();
});
maxCoin10phpRef.on('value', function(snapshot) {
  updateAllMaxCoins();
});
maxCoin20phpRef.on('value', function(snapshot) {
  updateAllMaxCoins();
});

let popup= document.getElementById("popup");
let coinSelector = document.getElementById("coinselector");

function openPopup(){
  popup.classList.add("open-popup");
}

// Add a new Firebase reference for the reset signal
var resetSignalRef = database.ref('resetSignal');

function closePopup() {
  totalAmountRef.once('value').then(function(snapshot) {
      var currentAmount = snapshot.val();
      storedAmountRef.set(currentAmount); // Store the current amount

      // Update the CREDITS section in HTML with the stored amount
      updateCreditsInHTML(currentAmount);

      totalAmountRef.set(0); // Reset total amount to 0

      resetSignalRef.set(true); // Set the reset signal to true
  });

  popup.classList.remove("open-popup");
  coinSelector.style.visibility = "visible"; // Make the coin selector visible
}

// Add this function to update the CREDITS section in HTML
function updateCreditsInHTML(amount) {
  $('.credit .php-value').text(amount + " PHP"); // Update the CREDITS section
}

// Add the following code to update Firebase when a new bill is detected
var database = firebase.database();
var totalAmountRef = database.ref('totalAmount');

// Assuming you have a function to update the total amount on Firebase
function updateTotalAmountOnFirebase(newTotalAmount) {
  totalAmountRef.set(newTotalAmount);
}

