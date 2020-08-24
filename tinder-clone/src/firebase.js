const firebaseConfig = {
    apiKey: "AIzaSyC_oxH6tC0d0myrAe9oXSazQ0meh2pmDZ0",
    authDomain: "tinder-clone-e2464.firebaseapp.com",
    databaseURL: "https://tinder-clone-e2464.firebaseio.com",
    projectId: "tinder-clone-e2464",
    storageBucket: "tinder-clone-e2464.appspot.com",
    messagingSenderId: "509465151888",
    appId: "1:509465151888:web:f67d62e02f91d28b970b15",
    measurementId: "G-1SPJXDD9E3"
  };
  const firebase = require('firebase');
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  export default database;