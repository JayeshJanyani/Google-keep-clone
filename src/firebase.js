import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyABIVFns89vrpdvL_YwH5nYOW490t7fOOw",
    authDomain: "keep-clone-1b99f.firebaseapp.com",
    databaseURL: "https://keep-clone-1b99f.firebaseio.com",
    projectId: "keep-clone-1b99f",
    storageBucket: "keep-clone-1b99f.appspot.com",
    messagingSenderId: "573986317469",
    appId: "1:573986317469:web:352d4da25cfbe7eab5a074",
    measurementId: "G-GFST1MFQGQ"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase