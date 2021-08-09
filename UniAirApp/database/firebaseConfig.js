import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCie7Li0em7aaLn6hGurstdghe95TBl4Ws",
  authDomain: "uniairserver.firebaseapp.com",
  projectId: "uniairserver",
  storageBucket: "uniairserver.appspot.com",
  messagingSenderId: "302102177397",
  appId: "1:302102177397:web:0c6eb5e8752f0f01bb7a3c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;