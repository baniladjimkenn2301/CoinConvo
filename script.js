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

  $(document).ready(function () {
    var database = firebase.database();
    var totalAmountRef = database.ref('totalAmount');
  
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
function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
}

// Add the following code to update Firebase when a new bill is detected
var database = firebase.database();
var totalAmountRef = database.ref('totalAmount');

// Assuming you have a function to update the total amount on Firebase
function updateTotalAmountOnFirebase(newTotalAmount) {
  totalAmountRef.set(newTotalAmount);
}