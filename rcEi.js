let userlink = document.getElementById('userlink');
let chatname ;

const acceptC = document.getElementById('accept');

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
document.getElementById("message-formei").addEventListener("submit", sendMessageei);

// send message to db
function sendMessageei() {


  // get values to be submitted
  const timestamp = Date.now();

  //var timestamp = 1607110465663


  const messageInput = document.getElementById("message-inputei");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("dispmessageei")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref(coursecode + "/ExamInvigilator/messages/" + chatname + "/" + timestamp).set({
    username,
    message,
    timestamp,
  });
}

//display the system check of candidate status

const fetchvsc = db.ref("CandidateStatusSystemCheck/"+ coursecode +"/"  );



// check for new messages using the onChildAdded event listener
fetchvsc.on("child_added", function (snapshot) {

const namac = snapshot.val().Name;
var mnc = snapshot.val().Status;

console.log("llllll" + namac + "oooooooo" + mnc);




// append the message on the page
if(mnc == 1){
  document.getElementById("dispcsssc").innerHTML += namac + "<br>";
}
else if(mnc==0) {
document.getElementById("dispcsfsc").innerHTML += namac + "<br>";
}
else{
  document.getElementById("dispcsfsw").innerHTML += namac + "<br>";
}

});



// display the verification of candidate status


const fetchv = db.ref("CandidateStatusVerification/"+ coursecode +"/"  );

console.log("apaa citaa")

// check for new messages using the onChildAdded event listener
fetchv.on("child_added", function (snapshot) {

const namac = snapshot.val().Name;
var mnc = snapshot.val().Status;

console.log("nama ialah " + namac + "jasndjas" + mnc);




// append the message on the page
if(mnc == 1){
  document.getElementById("dispcss").innerHTML += namac + "<br>";
}
else{
document.getElementById("dispcsf").innerHTML += namac + "<br>";
}

});





//fetchchatwithLecturer
// reference the collection created earlier
const fetchChatei = db.ref(coursecode +"/ExamInvigilator/" + "123457" + "/" );

// check for new messages using the onChildAdded event listener
fetchChatei.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  
});

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

var firebaseRef = firebase.database().ref(coursecode + "/ExamInvigilator/messages/");

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
var element = document.getElementById("clei");
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




function closeFormei() {
  
  document.getElementById("myFormei").style.display = "none";
}

function tekan(nama) {

  const fetchChat = db.ref(coursecode + "/ExamInvigilator/messages/" + nama + "/" );

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  let timestamp = snapshot.val().timestamp;

  var date = new Date(timestamp);
  
  console.log("Date: "+date.getDate()+
            "/"+(date.getMonth()+1)+
            "/"+date.getFullYear()+
            " "+date.getHours()+
            ":"+date.getMinutes()+
            ":"+date.getSeconds());

  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("dispmessageei").innerHTML += message;
});

  //console.log(nama + "huhuh ")
  document.getElementById("tutupchatlist").style.display = "none";
  document.getElementById("backchatlect").style.display = "inline";

  chatname = nama;

  console.log("chatname is " + chatname);
  
}


function tekanv(){

}

function openFormei() {

  document.getElementById("myFormei").style.display = "block";
  
}

function backMessageei(){

  document.getElementById("dispmessageei").innerHTML ="";

  document.getElementById("tutupchatlist").style.display = "inline";
  document.getElementById("backchatlect").style.display = "none";

}












