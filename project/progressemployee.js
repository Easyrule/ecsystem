var firebaseConfig = {
  apiKey: "AIzaSyB4hN8Ymb96TdyBvqIsIZXNIqArfakXZLY",
  authDomain: "easyjob-a98f3.firebaseapp.com",
  databaseURL: "https://easyjob-a98f3-default-rtdb.firebaseio.com",
  projectId: "easyjob-a98f3",
  storageBucket: "easyjob-a98f3.appspot.com",
  messagingSenderId: "21673523971",
  appId: "1:21673523971:web:9702e1ac4907c305f70736"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firebaseRef = firebase.database().ref("RequestedJobs/se001/senthue");
firebaseRef.on('value', function (snapshot) {
  snapshot.forEach(function (element) {
    var elementKey = element.key;
    var elementData = element.val();
    if (document.querySelector('#jobstatus') != null) {
      document.querySelector('#jobstatus').innerHTML += `
      <div>
      ${element.key} : 
      ${element.val()}  
      </div>     
    `

    }
  });
})

const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const progressSubmit = document.getElementById("progress-submit");
const steps = document.querySelectorAll(".step");
let active = 1;

progressNext.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
});

progressPrev.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});



const updateProgress = () => {
  // toggle active class on list items
  steps.forEach((step, i) => {
    if (i < active) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  // set progress bar width  
  progressBar.style.width =
    ((active - 1) / (steps.length - 1)) * 100 + "%";
  // enable disable prev and next buttons
  if (active === 1) {
    progressPrev.disabled = true;

  } else if (active === steps.length) {
    progressNext.disabled = true;
    progressSubmit.disabled = false;
  } else {
    progressPrev.disabled = false;
    progressNext.disabled = false;
    progressSubmit.disabled = false;

  }
};



function submit() {

  var messagesRef = firebase.database().ref('Project').child('developer');

  if (document.getElementById('s0').checked == true) {



    // var registrationref = firebase.au

    let x = { Assigned_to: "senthue", Due_Date: "28/3/2022", Payment: "M1200", Title: "Interface For Mobile Application", Progress: "0%" };
    //var newMessageRef = messagesRef.push();
    messagesRef.set(x);



  }
  else if (document.getElementById('s1').checked == true) {

    let x = { Assigned_to: "senthue", Due_Date: "28/3/2022", Payment: "RM1200", Title: "Interface For Mobile Application", Progress: "25%" };
    //var newMessageRef = messagesRef.push();
    messagesRef.set(x);

  }

  else if (document.getElementById('s2').checked == true) {

    let x = { Assigned_to: "senthue", Due_Date: "28/3/2022", Payment: "M1200", Title: "Interface For Mobile Application", Progress: "50%" };
    //var newMessageRef = messagesRef.push();
    messagesRef.set(x);

  }

  else if (document.getElementById('s3').checked == true) {

    let x = { Assigned_to: "senthue", Due_Date: "28/3/2022", Payment: "M1200", Title: "Interface For Mobile Application", Progress: "75%" };
    //var newMessageRef = messagesRef.push();
    messagesRef.set(x);

  }

  else if (document.getElementById('s4').checked == true) {

    let x = { Assigned_to: "senthue", Due_Date: "28/3/2022", Payment: "M1200", Title: "Interface For Mobile Application", Progress: "100%" };
    //var newMessageRef = messagesRef.push();
    messagesRef.set(x);

  }
  alert("Succefully Updated Progress");


}

let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
var currentUser = null;

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
  window.location = "homeEmployer.html";
}

window.onload = function () {
  getUsername();
  if (currentUser == null) {
    userlink.innerText = "Create New Account";
    userlink.href = "register.html";
    signoutlink.innerText = "Login";
    signoutlink.href = "login.html";
  }

  else {
    userlink.innerText = currentUser.username;
    userlink.href = "#";
    signoutlink.innerText = "Sign Out";
    signoutlink.href = "javascript:Signout()";


  }
}