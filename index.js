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
    })
    .catch((error) => {
      console.log(error);
    });
};