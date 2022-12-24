import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD6tAQx6m3G6JS6qeyiB1qaz3DCDCtjw_4",
  authDomain: "video-teams.firebaseapp.com",
  projectId: "video-teams",
  storageBucket: "video-teams.appspot.com",
  messagingSenderId: "140819107734",
  appId: "1:140819107734:web:0bc9ecebb5ffbbf57ad7b7"
};

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore();
const auth = app.auth();
const githubProvider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, githubProvider, googleProvider };