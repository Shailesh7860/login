  var firebaseConfig = {
    apiKey: "AIzaSyBnn1RGN5uJNngeCFl5ogSti7ExR1a_Tn0",
    authDomain: "websiteform-78a0c.firebaseapp.com",
    projectId: "websiteform-78a0c",
    storageBucket: "websiteform-78a0c.appspot.com",
    messagingSenderId: "220259667614",
    appId: "1:220259667614:web:f6f87770b06aab5caf358f",
    measurementId: "G-ZZLWE2PXVJ"};

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

const SignIn = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      console.log(credential);
      var token = credential.accessToken;
      var user = result.user;
      console.log(user);
      window.location.assign('aboutme.html');
      //window.location.href = "/aboutme.html";
    })
    .catch((error) => {
      console.log(error);
    });
};

function login(event){
  event.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
    var email = document.getElementsById('email')
    var email = document.getElementsById('password')
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('Error Signin,', error.message)
  }).then(funtion(user){
    if(user) {
    window.location.assign('aboutme.html')
    }
  })
}