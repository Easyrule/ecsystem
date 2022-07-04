let userlink = document.getElementById('userlink');
let chatname ;

const acceptC = document.getElementById('accept');



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








// display the verification of candidate status
console.log("apaa citaa" + username);
document.getElementById("inc").innerHTML = username;
document.getElementById("cdc").innerHTML ="CPT111";

const fetchv = db.ref("ExamCoursePaperAnswer/CPT111/"+ "123457"  );

console.log("apaa citaa" + fetchv);

// check for new messages using the onChildAdded event listener
fetchv.on("child_added", function (snapshot) {

const namac = snapshot.val().examQuestionNumber;
const mnc = snapshot.val().examAnswer;


console.log("nama ialah " + namac + "jasndjas" + mnc);


// console.log("the user is " + userlink.innerText)

// append the message on the page

    document.getElementById("qustnum").innerHTML +=  namac + ":  "+ mnc + "<br>";


  


});
















