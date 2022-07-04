let userlink = document.getElementById('userlink');
let chatname ;

let coursecode = localStorage.getItem('course');



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
document.getElementById("message-formlc").addEventListener("submit", sendMessagelc);

// send message to db
function sendMessagelc() {


  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-inputlc");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("dispmessagelc")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref( coursecode +"/Lecturer/messages/" + chatname + "/" + timestamp).set({
    username,
    message,
  });
}

//tambah list of candidate
var firebaseReflc = firebase.database().ref(coursecode + "/CandidateMonitor/");

firebaseReflc.on("child_added", function (snapshot) {

  const messages1 = snapshot.key;


  if(messages1 != username){
  const para = document.createElement("option");

  //var node = document.createTextNode(messages1);
  
  para.innerHTML = messages1;
  para.value = messages1;
  para.setAttribute('id', messages1);
  //para.onclick = function(){tekan(messages1)}; //sini dah okay
  var element = document.getElementById("mns");
  element.appendChild(para);


  }







    



}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}



); 




//sat




//fetchchatwithLecturer
// reference the collection created earlier
const fetchChatlc = db.ref(coursecode + "/Lecturer/" + "123457" + "/" );

// check for new messages using the onChildAdded event listener
fetchChatlc.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page

  console.log("apaa ini ezrul uiii")
  
});





var firebaseReflc = firebase.database().ref(coursecode + "/Lecturer/messages/");

firebaseReflc.on("child_added", function (snapshot) {

  console.log("apokokokok")

  const messages1 = snapshot.key;

if(messages1 != username){

const para = document.createElement("a");
var br = document.createElement("br");
var br1 = document.createElement("br");
//var node = document.createTextNode(messages1);

para.innerHTML = messages1;
para.setAttribute('id', messages1);
para.onclick = function(){tekanlc(messages1)}; //sini dah okay
var element = document.getElementById("cl");
element.appendChild(para);
element.appendChild(br);
element.appendChild(br1);

console.log("the id is" + document.getElementById(messages1).innerHTML);
}









    



}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}



); 



function closeFormlc() {
  
  document.getElementById("myFormlc").style.display = "none";
}

function tekanlc(nama) {

  const fetchChat = db.ref(coursecode + "/Lecturer/messages/" + nama + "/" );

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("dispmessagelc").innerHTML += message;
});

  //console.log(nama + "huhuh ")
  document.getElementById("tutupchatlist").style.display = "none";
  document.getElementById("backchatlect").style.display = "inline";

  chatname = nama;

  console.log("chatname is " + chatname);
  
}

function openFormlc() {

  document.getElementById("myFormlc").style.display = "block";
  
}

function backMessagelc(){

  document.getElementById("dispmessagelc").innerHTML ="";

  document.getElementById("tutupchatlist").style.display = "inline";
  document.getElementById("backchatlect").style.display = "none";

}













