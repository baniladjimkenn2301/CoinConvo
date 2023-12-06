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
  });

let popup= document.getElementById("popup");
let coinSelector = document.getElementById("coinselector");

function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup() {
  totalAmountRef.once('value').then(function(snapshot) {
      var currentAmount = snapshot.val();
      storedAmountRef.set(currentAmount); // Store the current amount
      totalAmountRef.set(0); // Reset total amount to 0
  });

  popup.classList.remove("open-popup");
  coinSelector.style.visibility = "visible"; // Make the coin selector visible
}

// Add the following code to update Firebase when a new bill is detected
var database = firebase.database();
var totalAmountRef = database.ref('totalAmount');

// Assuming you have a function to update the total amount on Firebase
function updateTotalAmountOnFirebase(newTotalAmount) {
  totalAmountRef.set(newTotalAmount);
}

