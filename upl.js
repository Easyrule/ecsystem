  // var loadFile = function(event) {
  //   var output = document.getElementById('output');
  //   output.src = URL.createObjectURL(event.target.files[0]);
  //   output.onload = function() {
  //     URL.revokeObjectURL(output.src) // free memory
  //     console.log(output.src)
  //   }
  // };

  function loadFile(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
  
    var imgtag = document.getElementById("output");
    imgtag.title = selectedFile.name;
  
    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };
  
    reader.readAsDataURL(selectedFile);
  }




  

  


// import { getStorage, ref, uploadBytes } from "firebase/storage";

// const storage = getStorage();
// const storageRef = ref(storage, 'some-child');



// const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
// uploadBytes(storageRef, bytes).then((snapshot) => {
//   console.log('Uploaded an array!');
// });




    // // Import the functions you need from the SDKs you need
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    // // TODO: Add SDKs for Firebase products that you want to use
    // // https://firebase.google.com/docs/web/setup#available-libraries
  
    // // Your web app's Firebase configuration
    // const firebaseConfig = {
    //   apiKey: "AIzaSyB9tp7nBfMxsqBqgyQsCXE8gDhx7BSAaIk",
    //   authDomain: "e-cs-8e95e.firebaseapp.com",
    //   databaseURL: "https://e-cs-8e95e-default-rtdb.firebaseio.com",
    //   projectId: "e-cs-8e95e",
    //   storageBucket: "e-cs-8e95e.appspot.com",
    //   messagingSenderId: "648134779146",
    //   appId: "1:648134779146:web:c48d9e26dfeaa1d04d9af3"
    // };
  
  
    //   // Initialize Firebase
  
    //   const app = initializeApp(firebaseConfig);
  
    //   import { getDatabase, ref, set, child, get }
    //     from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
  
    //   const db = getDatabase();
  
    //   const name = document.getElementById('Fullname');
    //   const email = document.getElementById('email');
      
   
  

  
  
    //   function RegisterUser() {
        
    //     const dbRef = ref(db);
  
    //     if (pass.value == pass2.value) {
  
          
          
  
    //         get(child(dbRef, "Candidate/" + matric.value)).then((snapshot) => {
    //           if (snapshot.exists()) {
    //             alert("Account already exist!");
    //           }
    //           else {
    //             set(ref(db, "Candidate/" + matric.value),
    //               {
                    
    //                 email: email.value,
    //                 MatricNumber: matric.value,
    //                 fullname: name.value,
    //                 password: encPass(),
    //                 mobile:'012456789',
    //                 emergencycontactnumber:'012456789',
    //                 indexnumber:'77777'
    //               })
    //               .then(() => {
    //                 alert("user added successfully");
    //               })
    //               .catch((error) => {
    //                 alert("error" + error);
    //               })
    //           }
    //         });
          
  
          
  
    //     }else{
    //       alert("Password does not match!");
  
    //     }
  
    //   }
  
  
    //   function encPass() {
    //     var pass12 = CryptoJS.AES.encrypt(pass.value, pass.value);
    //     return pass12.toString();
    //   }
  
  
    //   function isEmptyOrSpaces(str) {
    //     return str == null || str.match(/^ *$/) !== null;
    //   }
  
    //   submit.addEventListener('click', RegisterUser);

