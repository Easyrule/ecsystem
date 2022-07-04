let userlink = document.getElementById('userlink');

function getUsername() {
    let keepLoggedIn = localStorage.getItem("keepLoggedIn");

    if (keepLoggedIn == "yes") {
        currentUser = JSON.parse(localStorage.getItem('user'));
    }

    else {
        currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
}

window.onload = function () {
    getUsername();
    if (currentUser == null) {
        userlink.innerText = "";
    }

    else {
        userlink.innerText = currentUser.MatricNumber;
        userlink.href = "#";

    }
}






const submit = document.getElementById('nextp');
const ipid = document.getElementById('ipid');
let phonelink1 = document.getElementById("phonelink1");
let phonelink2 = document.getElementById("phonelink2");
let videophone = document.getElementById("phonecamera");

const frontipid = document.getElementById('frontipid');
let frontlink1 = document.getElementById("frontphonelink1");
let frontlink2 = document.getElementById("frontphonelink2");
let videfront = document.getElementById("frontcamera");
let statusinfo = document.getElementById("statusinfo");
const nextp = document.getElementById("nextp");

let coursecode = localStorage.getItem('course');

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
console.log("nama " + username + "sca");



const fetchvsca = db.ref("CandidateStatusSystemCheck/"+ coursecode +"/"  );

console.log("apaa citaa")

// check for new messages using the onChildAdded event listener
fetchvsca.on("child_changed", function (snapshot) {

const namac = snapshot.val().Name;
var mnc = snapshot.val().Status;

console.log("llllll" + namac + "oooooooo" + mnc);




// append the message on the page
if(namac === username && mnc == 1){
  alert("Your surrouding check is passed");
  statusinfo.innerHTML= "Exam invigilator have verified your surrounding view";
  nextp.disabled = false;
  nextp.hidden = false;



}
else if (namac === username && mnc == 0){
alert("nohhhh");
statusinfo.innerHTML= "Exam invigilator have rejected your surrounding view, please ensure that you provide clear view from front and back";
}

});


// send link to db
function flink(linkfrontcamera) {


  // create db collection and send in the data
  db.ref("coursecode/CandidateMonitor/" + username + "/" + "frontview").set({
    username,
    linkfrontcamera,
  });
  console.log(coursecode + "huhuhu")
}

// send link to db
function blink(linkbackcamera) {


    // create db collection and send in the data
    db.ref(coursecode + "/CandidateMonitor/" + username + "/" + "backview").set({
      username,
      linkbackcamera,
    });

    let Status =2;
    let Name = username;
      db.ref("CandidateStatusSystemCheck/"+ coursecode +"/" + Name + "/" ).set({
        Name,
        Status
      });
      alert("done");
  }

function nextpage(){


    window.location = "clockdownBrowser.html";
}

function search(){
    let linkip1 = phonelink1.value;
    let linkip2 = phonelink2.value;

    let linkipPhone = "http://10.213." + linkip1 + "." + linkip2 +":8080/video";

    console.log("apkah ini semua " + linkipPhone);
    blink(linkipPhone);

    videophone.src = linkipPhone;

    
    
}

function frontsearch(){
    let linkip1 = frontlink1.value;
    let linkip2 = frontlink2.value;

    let linkipPhone = "http://10.213." + linkip1 + "." + linkip2 +":8080/video";

    console.log("apkah ini semua " + linkipPhone);
    flink(linkipPhone);
    videfront.src = linkipPhone;
}


submit.addEventListener('click', nextpage);

ipid.addEventListener('click', search);

frontipid.addEventListener('click', frontsearch);

