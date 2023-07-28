//* Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
//* https://firebase.google.com/docs/web/setup#available-libraries

//* Your web app's Firebase configuration
// todo: change values for env vars!!!
const firebaseConfig = {
  apiKey: 'AIzaSyC8dUn4ikz0QzRSWit0pJX2BWpX4S_sPU0',
  authDomain: 'travelchat-auth.firebaseapp.com',
  projectId: 'travelchat-auth',
  storageBucket: 'travelchat-auth.appspot.com',
  messagingSenderId: '240440636502',
  appId: '1:240440636502:web:ca7bfa10f175caa32937f7',
}

//* Initialize Firebase
export const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
}
