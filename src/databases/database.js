// Initialize Firebase
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCE5RT7njGQ89pY90H8j-CwNdmmLUNRyRY",
  authDomain: "telos-b504f.firebaseapp.com",
  databaseURL: "https://telos-b504f.firebaseio.com",
  projectId: "telos-b504f",
  storageBucket: "telos-b504f.appspot.com",
  messagingSenderId: "644035836825"
};
firebase.initializeApp(config);
export const DB = firebase.database()