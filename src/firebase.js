import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqpsZ9GzlmNaqsY7qdvhPlSipXaCIqn3I",
  authDomain: "instagram-clone-react-ddf7d.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-ddf7d-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-ddf7d",
  storageBucket: "instagram-clone-react-ddf7d.appspot.com",
  messagingSenderId: "415586211942",
  appId: "1:415586211942:web:e9dc62393e3577cae935a7",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
