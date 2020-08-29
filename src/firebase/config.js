import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD3i-AjGjoUScD2AQQcwYiXysYLvm2gV9U",
    authDomain: "gaurav-firegram.firebaseapp.com",
    databaseURL: "https://gaurav-firegram.firebaseio.com",
    projectId: "gaurav-firegram",
    storageBucket: "gaurav-firegram.appspot.com",
    messagingSenderId: "109592494768",
    appId: "1:109592494768:web:622b264a4b2cb7bfe0b175",
    measurementId: "G-3697BMSQE2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };