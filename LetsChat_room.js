//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCKNOmCMXX-PAVQ-QdLwZO6K4_qUAvNkd0",
    authDomain: "letschat-d2203.firebaseapp.com",
    databaseURL: "https://letschat-d2203-default-rtdb.firebaseio.com",
    projectId: "letschat-d2203",
    storageBucket: "letschat-d2203.appspot.com",
    messagingSenderId: "19587294804",
    appId: "1:19587294804:web:07e2a54ea560e237e8efc1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="LetsChat_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="LetsChat_page.html";
    
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "LetsChat.html";
}