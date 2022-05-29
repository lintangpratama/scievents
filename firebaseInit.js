import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/firestore";

firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp.firestore();