const imageUpload = document.getElementById('imageUpload')
pahit = document.getElementById('livepic')
user = document.getElementById('userlink')
var imgtag = document.getElementById("matricpic");
manis = document.getElementById('imgu')
tableBanner1 = document.getElementById('livepic')
matricpicture = document.getElementById('matricpicture')
statusVerification = document.getElementById('statusVerification')
inCan = document.getElementById('inCan')
statusAttempt =document.getElementById('statusAttempt')



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
          const app = firebase.initializeApp(firebaseConfig);
          console.log(firebase);

          const db = firebase.database();







          Promise.all([
            faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
          ]).then(start)

          
          const fetchstatus= db.ref("CandidateStatus/" );
          












// function takeASnap(){
// attempt--;

// //gambar table1

// console.log(attempt + "currently");

 
  

//   //const context = pahit.getContext('2d');
 
//     //  width = vid.videoWidth;
//      // height = vid.videoHeight;
//      // context.drawImage(vid, 0, 0);


     



//   var image = tableBanner1;
 


//   //container.append(image)

//   pahit.setAttribute('src', image.src);


 



//   //console.log(pahit.src)
//   Promise.all([
//     faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//     faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//     faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
//   ]).then(start)
 

  

 

// }
//function to upload matic card


function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  

  //New Code
  return new Blob([ab], {type: mimeString});


}


function uploadImage(gambarblob , verificationresult) {
  let namauser = document.getElementById('userlink')
                
  const usern = namauser.innerText;
  console.log("user name is " + usern)
  const ref = firebase.storage().ref('GambarCandidate').child(usern).child("currentpicture");
  console.log("this is spartaaa "+ ref)
  const file = gambarblob;
  const name = +new Date() + "-" + usern;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url + "hohohohhjghdgsgadaasasa");
      //document.getElementById("output").src = url;
      uploadrealtime(url ,usern , verificationresult);
      

    })
    .catch(console.error);
}

//upload link into realtime firebase
function uploadrealtime(urlimg ,urlname , verificationresult){
 

  //const urlimg = document.getElementById("output").src;
  console.log("here name "+ urlname + "here url "+ urlimg);
  firebase.database().ref('Candidate').child('GambarCandidate').child(urlname).child('currentpicture').set({       
      Name: urlname,
      Link: urlimg
  })

  alert("image being updated")

  uploadImagemc(urlname, verificationresult);

}


function uploadImagemc(usern, verificationresult) {

  
                
  const ref = firebase.storage().ref('GambarCandidate').child(usern).child('matricpicture');
  console.log("this is spartaaa "+ ref)
  const file = document.getElementById('imgu').files[0];
  console.log("dekat siniii ado " + file.name )
  const name = +new Date() + "-" + usern;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url + "sini gambar matric");
      uploadrealtimemc(usern, url , verificationresult);
      

    })
    .catch(console.error);
}


function uploadrealtimemc(nama,url , verificationresult){

  console.log("jemmm" + nama + "takkk jemm "+ url)     ; 
    firebase.database().ref('Candidate').child('GambarCandidate').child(nama).child('matricpicture').set({ 
      
        Name: nama,
        Link: url
    })

    alert("image matric being updated")

    if(verificationresult == 1){
      window.location='csystemcheck.html';
    }

}

function uploadResult(nama, verificationresult){

  console.log("jemmm" + nama + "takkk jemm "+ verificationresult)     ; 
    firebase.database().ref('CandidateStatusVerification').child('CPT111').child(nama).set({ 
      
        Name: nama,
        Status: verificationresult
    })

    alert("status being updated")


}



//cuba tambah image ke local storage
function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}




async function start() {
  const container = matricpicture
  container.style.position = 'relative'
  const labeledFaceDescriptors = await loadLabeledImages()
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.5)
  console.log("where r u " + faceMatcher)
  let image
  let canvas
  //imageUpload.addEventListener('change', async () => {
  

   console.log('poning')
    //image = await faceapi.bufferToImage(imageUpload.files[0])








    image = pahit

    console.log('apokono')



    

    //image = await faceapi.bufferToImage(a)

    
   container.append(pahit)
    

    canvas = faceapi.createCanvasFromMedia(image)
    container.append(canvas)
    const displaySize = { width: image.width, height: image.height }
    faceapi.matchDimensions(canvas, displaySize)
    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box
      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
      console.log(userlink.innerText)
      drawBox.draw(canvas)

     // let verificationresult = 1;
      if (result.label === userlink.innerText ){

     //   uploadResult(userlink.innerText , verificationresult);
     // check for new messages using the onChildAdded event listener
fetchstatus.on("child_added", function (snapshot) {
    const inC = snapshot.key;  
  const att = snapshot.val().status;
  console.log(inC + "hohohoh" + att);
});
     inCan.innerText= userlink.innerText;
     statusVerification.innerText="PASS";

       // check for new messages using the onChildAdded event listener
fetchstatus.on("child_added", function (snapshot) {
    const inC = snapshot.key; 
  const att = snapshot.val().status;
  if(inC === userlink.innerText){
    statusAttempt.innerText = att;
  }
  
});

         //uploadImage();
  //let cubaanjadiblob = dataURItoBlob(pahit.src);


 // console.log("apa jadii " + cubaanjadiblob);

  //uploadImage(cubaanjadiblob , verificationresult);

  

        
        


  
      }
      else{

         //uploadImage();
  //let cubaanjadiblob = dataURItoBlob(pahit.src);

  //console.log("apa jadii " + cubaanjadiblob);
  //verificationresult = 0;
  //uploadResult(userlink.innerText , verificationresult);
  //uploadImage(cubaanjadiblob , verificationresult);

  inCan.innerText= userlink.innerText;      
  statusVerification.innerText="FAIL";

  // check for new messages using the onChildAdded event listener
  fetchstatus.on("child_added", function (snapshot) {
    const inC = snapshot.key; 
  const att = snapshot.val().status;
  if(inC === userlink.innerText){
    statusAttempt.innerText = att;
  }
  
});

       
      }
      
    })

    
 // })
}






function loadLabeledImages() {


  const labels = [ userlink.innerText]

  


  return Promise.all(
    labels.map(async label => {
      const descriptions = []
      for (let i = 1; i <= 1; i++) {
        //let image1 = await faceapi.bufferToImage(manis.files[0])
        const img1 = imgtag;
        console.log("heheh" + img1.src)
        const detections = await faceapi.detectSingleFace(img1).withFaceLandmarks().withFaceDescriptor()
        descriptions.push(detections.descriptor)

      }

      return new faceapi.LabeledFaceDescriptors(label, descriptions)
    })
  )
}