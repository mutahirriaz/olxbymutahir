import firebase from "firebase/app"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCFIpgq3sby7aJDPjTigw7SYsAVob4bi9w",
    authDomain: "olxclone2002.firebaseapp.com",
    databaseURL: "https://olxclone2002.firebaseio.com",
    projectId: "olxclone2002",
    storageBucket: "olxclone2002.appspot.com",
    messagingSenderId: "346012293580",
    appId: "1:346012293580:web:72fb4628e664f14d27a569",
    measurementId: "G-28M5PM8VQF"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}