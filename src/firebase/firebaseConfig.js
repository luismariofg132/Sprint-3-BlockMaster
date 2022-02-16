import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCxPep44khxBYfeF_o6RPE4SlIt7_x2_5g",
    authDomain: "blockmaster-666e4.firebaseapp.com",
    projectId: "blockmaster-666e4",
    storageBucket: "blockmaster-666e4.appspot.com",
    messagingSenderId: "853895818008",
    appId: "1:853895818008:web:b5b5ccb0c052ceeb9c8c6d"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const db = getFirestore();

export {
    app,
    google,
    db
}


