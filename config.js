import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDO3tz5dlb5I9zhSkUDxsG_JeIcug1vJGA",
  authDomain: "e-rider-ef0ad.firebaseapp.com",
  projectId: "e-rider-ef0ad",
  storageBucket: "e-rider-ef0ad.appspot.com",
  messagingSenderId: "639839340919",
  appId: "1:639839340919:web:64037a9e453b2565c97972"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

