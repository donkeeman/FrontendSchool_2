import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQ6LDLPO2ZS90bu-zFxvUncvABGH0ccoY",
    authDomain: "my-diary-5640d.firebaseapp.com",
    projectId: "my-diary-5640d",
    storageBucket: "my-diary-5640d.appspot.com",
    messagingSenderId: "730382969883",
    appId: "1:730382969883:web:e41960289af488c97c1cbe",
};

const app = initializeApp(firebaseConfig);
const appFireStore = getFirestore(app);
const appAuth = getAuth();

export { appFireStore, appAuth };
