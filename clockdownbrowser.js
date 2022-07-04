 

var i =10000;
    
document.addEventListener('visibilitychange', function(){
    if (document.visibilityState === "hidden"){
      i--;
       window.alert("your exam will be terminate if you leave this browser " + i + "  more time");
      updatestatusdb(i);
             
    }

    if(i<1){

    alert('sorry');
    location.href = 'homepage.html';
                
    }
    
})

function updatestatusdb(att){

var statusc = att;
getUsername();
userlink.innerText = currentUser.MatricNumber;
console.log("moeh" + userlink.innerText)

firebase.database().ref('CandidateStatus').child(userlink.innerText).update({       
status: "Total of attempt left :"+ statusc,

})

}

function submite(){
  alert("Exam being submitted")
  location.href = 'homepage.html';
}

submitbtn.addEventListener('click', submite);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyB9tp7nBfMxsqBqgyQsCXE8gDhx7BSAaIk",
authDomain: "e-cs-8e95e.firebaseapp.com",
databaseURL: "https://e-cs-8e95e-default-rtdb.firebaseio.com",
projectId: "e-cs-8e95e",
storageBucket: "e-cs-8e95e.appspot.com",
messagingSenderId: "648134779146",
appId: "1:648134779146:web:c48d9e26dfeaa1d04d9af3"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get }
from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const db = getDatabase();

const dbRef = ref(db);

let questnum = 1;
let numq = 1;






      let userlink = document.getElementById('userlink');
      let userlink1 = document.getElementById('userlink1');
      let signoutlink = document.getElementById('signoutlink');
      var currentUser = null;
      var updBtn = document.getElementById("upd");


      let coursecode = localStorage.getItem('course');

console.log(coursecode + "banana" );

get(child(dbRef, "ExamCourse/" + coursecode)).then((snapshot) => {
        
        if (snapshot.exists()) {
          questnum = snapshot.val().examQuestionNumber;
          const examduration = parseInt(snapshot.val().examDuration);
          masaexam(examduration);


             console.log(questnum + " hello " + examduration);
            }
            
          
        });



//soalan exam dekat sini
get(child(dbRef, "ExamCoursePaper/" + coursecode + "/" + numq)).then((snapshot) => {


        
        if (snapshot.exists()) {
          console.log("apaaa")
        let  examQuestionNumber = snapshot.val().examQuestionNumber;

        let examQuestion = snapshot.val().examQuestion;

         let AnswerA = snapshot.val().examAnswerA;
         let AnswerB = snapshot.val().examAnswerB;
         let AnswerC = snapshot.val().examAnswerC;
         let AnswerD = snapshot.val().examAnswerD;

             console.log(questnum + " hello ");
             document.getElementById("qn").innerHTML = "Question Number :"+ examQuestionNumber;
             document.getElementById("eq").innerHTML = "Exam Question :"+ examQuestion;

             document.getElementById("ansA").innerHTML = "A :"+ AnswerA;
             document.getElementById("ansB").innerHTML = "B :"+ AnswerB;
             document.getElementById("ansC").innerHTML = "C :"+ AnswerC;
             document.getElementById("ansD").innerHTML = "D :"+ AnswerD;


             document.getElementById("answA").value = AnswerA;
             document.getElementById("answB").value = AnswerB;
             document.getElementById("answC").value = AnswerC;
             document.getElementById("answD").value = AnswerD;

             
             


            }

            
            
          
        });




function masaexam(m){
// Set the date we're counting down to
console.log("sdabyhsabd" + m)
var countDownDate1 = new Date().toLocaleTimeString() ;
var countDownDate = new Date().getTime() + m;
console.log(m + "apa ini");

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
//  console.log("here is "+ now)

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("masa").innerHTML = hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
clearInterval(x);
document.getElementById("masa").innerHTML = "EXPIRED";
}
}, 1000);
}









function getUsername() {
let keepLoggedIn = localStorage.getItem("keepLoggedIn");

if (keepLoggedIn == "yes") {
  currentUser = JSON.parse(localStorage.getItem('user'));
}

else {
  currentUser = JSON.parse(sessionStorage.getItem('user'));
}
}

      getUsername();
      userlink.innerText = currentUser.MatricNumber;
  
     

  
      function Signout() {
          sessionStorage.removeItem('user');
          localStorage.removeItem('user');
          localStorage.removeItem('keepLoggedIn');
          window.location = "register.html";
      }
  
     


      const vid = document.querySelector('video');

// navigator.mediaDevices.getUserMedia({video: true}) // request cam
// .then(stream => {
//   vid.srcObject = stream; // don't use createObjectURL(MediaStream)
//   return vid.play(); // returns a Promise
// })
// .then(()=>{ // enable the button
//   const btn = document.getElementById('apo');
//   btn.disabled = false;
//   btn.onclick = e => {
//     takeASnap();

//   };


// });






function nextq() {
console.log("numq " + numq + "questnum " + questnum);
tambahjawapan(numq);

if(numq<questnum){
numq++;






const dbRef = ref(db);

let coursecode = localStorage.getItem('course');

console.log(coursecode +"sini" );




get(child(dbRef, "ExamCoursePaper/" + coursecode + "/" + numq)).then((snapshot) => {
        
        if (snapshot.exists()) {
        let  examQuestionNumber = snapshot.val().examQuestionNumber;

        let examQuestion = snapshot.val().examQuestion;

         let AnswerA = snapshot.val().examAnswerA;
         let AnswerB = snapshot.val().examAnswerB;
         let AnswerC = snapshot.val().examAnswerC;
         let AnswerD = snapshot.val().examAnswerD;

             console.log(questnum + " hello ");
             document.getElementById("qn").innerHTML = "Question Number :"+ examQuestionNumber;
             document.getElementById("eq").innerHTML = "Exam Question :"+ examQuestion;

             document.getElementById("ansA").innerHTML = "A :"+ AnswerA;
             document.getElementById("ansB").innerHTML = "B :"+ AnswerB;
             document.getElementById("ansC").innerHTML = "C :"+ AnswerC;
             document.getElementById("ansD").innerHTML = "D :"+ AnswerD;


             document.getElementById("answA").value = AnswerA;
             document.getElementById("answB").value = AnswerB;
             document.getElementById("answC").value = AnswerC;
             document.getElementById("answD").value = AnswerD;
             
;

            }
            
          
        });



// show selected on page load



//tambah jawapan dalam database











// if(numq<questnum){
//   numq++;
//   document.getElementById("qn").innerHTML = "Question Number :"+ numq;
// }else{

// alert("complete added questions")
// window.location = "homepagep.html";

// }
  
    
  







}

function tambahjawapan(y){


const form = document.forms.jawapan;
const radios = Array.from(form.elements.flexRadioDefault);
// show latest value when radio checked changes
radios.forEach(radio => {
radio.addEventListener('change', () => {


console.log(x + "pekak waknat" + userlink.innerText)

});
});

set(ref(db, "ExamCoursePaperAnswer/" + coursecode + "/" + userlink.innerText + "/" + y),
            {
              
              examQuestionNumber: y,
              examAnswer: form.querySelector('input[name=flexRadioDefault]:checked').value
            })
            .then(() => {
              alert("successfully added exam answer for " )

              

              


            })
            .catch((error) => {
              alert("error" + error);
            })




}
}



function backq(){
if(numq>1){
numq--;






const dbRef = ref(db);

let coursecode = localStorage.getItem('course');

console.log(coursecode +"sini" );




get(child(dbRef, "ExamCoursePaper/" + coursecode + "/" + numq)).then((snapshot) => {
        
        if (snapshot.exists()) {
          let  examQuestionNumber = snapshot.val().examQuestionNumber;

let examQuestion = snapshot.val().examQuestion;

let AnswerA = snapshot.val().examAnswerA;
let AnswerB = snapshot.val().examAnswerB;
let AnswerC = snapshot.val().examAnswerC;
let AnswerD = snapshot.val().examAnswerD;

 console.log(questnum + " hello ");
 document.getElementById("qn").innerHTML = "Question Number :"+ examQuestionNumber;
 document.getElementById("eq").innerHTML = "Exam Question :"+ examQuestion;

 document.getElementById("ansA").innerHTML = "A :"+ AnswerA;
 document.getElementById("ansB").innerHTML = "B :"+ AnswerB;
 document.getElementById("ansC").innerHTML = "C :"+ AnswerC;
 document.getElementById("ansD").innerHTML = "D :"+ AnswerD;


 document.getElementById("ansA").value = AnswerA;
 document.getElementById("ansB").value = AnswerB;
 document.getElementById("ansC").value = AnswerC;
 document.getElementById("ansD").value = AnswerD;
             
;

            }
            
          
        });



}


}


addexam.addEventListener('click', nextq);
minexam.addEventListener('click', backq)
