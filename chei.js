let userlink = document.getElementById('userlink');
let userlink1 = document.getElementById('userlink1');
let chatname ;



function getUsername() {
  let keepLoggedIn = localStorage.getItem("keepLoggedIn");

  if (keepLoggedIn == "yes") {
      currentUser = JSON.parse(localStorage.getItem('user'));
  }

  else {
      currentUser = JSON.parse(sessionStorage.getItem('user'));
  }
}

function Signout() {
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('keepLoggedIn');
  window.location = "homeEmployee.html";
}




// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB9tp7nBfMxsqBqgyQsCXE8gDhx7BSAaIk",
  authDomain: "e-cs-8e95e.firebaseapp.com",
  databaseURL: "https://e-cs-8e95e-default-rtdb.firebaseio.com",
  projectId: "e-cs-8e95e",
  storageBucket: "e-cs-8e95e.appspot.com",
  messagingSenderId: "648134779146",
  appId: "1:648134779146:web:c48d9e26dfeaa1d04d9af3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();

// get user's data
getUsername();
const username = currentUser.MatricNumber;

// submit form
// listen for submit event on the form and call the postChat function
document.getElementById("message-form").addEventListener("submit", sendMessage);

// send message to db
function sendMessage() {


  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input1");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("dispmessage")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref("CPT111/ExamInvigilator/messages/" + "123457" + "/" + timestamp).set({
    username,
    message,
  });
}

function sendMessagelec() {
console.log("helloo")

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-inputlec");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("dispmessage")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref("CPT111/Lecturer/messages/" + "123457" + "/" + timestamp).set({
    username,
    message,
  });
}

// display the messages
// reference the collection created earlier




//fetchchatwithLecturer
// reference the collection created earlier
const fetchChatlec = db.ref("CPT111/Lecturer/messages/" + "123457" + "/" );

// check for new messages using the onChildAdded event listener
fetchChatlec.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  
});

var firebaseRef = firebase.database().ref("CPT111/Lecturer/messages/");

firebaseRef.on("child_added", function (snapshot) {

  const messages1 = snapshot.key;

if(messages1 != username){

const para = document.createElement("a");
var br = document.createElement("br");
var br1 = document.createElement("br");
//var node = document.createTextNode(messages1);

para.innerHTML = messages1;
para.setAttribute('id', messages1);
para.onclick = function(){tekan(messages1)}; //sini dah okay
var element = document.getElementById("cl");
element.appendChild(para);
element.appendChild(br);
element.appendChild(br1);

console.log("the id is" + document.getElementById(messages1).innerHTML);
}







  const myNodelist = document.getElementsByClassName("cuba123");
  for (let i = 0; i < myNodelist.length; i++) {
    console.log("appan")
    myNodelist[1].style.color = "red";
    myNodelist[0].style.color = "blue";
  }


    



}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}



); 


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function closeFormlec() {
  
  document.getElementById("myFormlec").style.display = "none";
}

function tekan(nama) {

  const fetchChat = db.ref("CPT111/Lecturer/messages/" + nama + "/" );

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("dispmessage").innerHTML += message;
});

  //console.log(nama + "huhuh ")
  document.getElementById("tutupchatlist").style.display = "none";
  document.getElementById("backchatlect").style.display = "inline";

  chatname = nama;

  console.log("chatname is " + chatname);
  
}

function openFormlec() {

  document.getElementById("myFormlec").style.display = "block";
  
}

function backMessagelec(){

  document.getElementById("dispmessage").innerHTML ="";

  document.getElementById("tutupchatlist").style.display = "inline";
  document.getElementById("backchatlect").style.display = "none";

}
















