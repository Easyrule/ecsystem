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

var firebaseRef = firebase.database().ref("Project/developer");
firebaseRef.on('value', function (snapshot) {
  snapshot.forEach(function (element) {

    var elementData = element.val();
    if (document.querySelector('#ongoingproject') != null) {
      document.querySelector('#ongoingproject').innerHTML += `
      <div>
      ${element.key} : 
      ${element.val()}  
      </div>     
    `

    }
  });
})

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