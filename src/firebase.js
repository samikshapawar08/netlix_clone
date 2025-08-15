// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc,collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHJxK86z2vzkdmmTW6EZfg4uGkBd72GKE",
  authDomain: "netflix-clone-f7272.firebaseapp.com",
  projectId: "netflix-clone-f7272",
  storageBucket: "netflix-clone-f7272.firebasestorage.app",
  messagingSenderId: "187266017538",
  appId: "1:187266017538:web:3b398a9cd7b3f208117a1b",
  measurementId: "G-1EQVY8Y45S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name , email , password)=>{
    try{
        const res =await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));

    }
}

const login = async()=>{
    try{
        await signInWithEmailAndPassword(auth, emai, password);
    }catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const logout =()=>{
    signOut(auth);
}

export {auth, db, signUp, login, logout};