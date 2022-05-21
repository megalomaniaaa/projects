//YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS HERE


var firebaseConfig = {
      apiKey: "AIzaSyA9mKMlyJNdHSJDaU024f9kHdF2RnqbK6c",
      authDomain: "kwitter-f382a.firebaseapp.com",
      databaseURL: "https://kwitter-f382a-default-rtdb.firebaseio.com",
      projectId: "kwitter-f382a",
      storageBucket: "kwitter-f382a.appspot.com",
      messagingSenderId: "748790233325",
      appId: "1:748790233325:web:b02317a70c91d13d17f4e4"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

room_name=localStorage.getItem("room_name");            
//im tired
//im going to feel happy
//FEEL MEEE
//if you see this
//your cool
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() 
{
msg=document.getElementById("msg").value                               
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
//i want 9999 likes on this comment =)
like:0

});
document.getElementById("msg").value=""
}