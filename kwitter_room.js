
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCKNOmCMXX-PAVQ-QdLwZO6K4_qUAvNkd0",
      authDomain: "letschat-d2203.firebaseapp.com",
      projectId: "letschat-d2203",
      storageBucket: "letschat-d2203.appspot.com",
      messagingSenderId: "19587294804",
      appId: "1:19587294804:web:07e2a54ea560e237e8efc1"
    };
    // Initialize Firebase
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
