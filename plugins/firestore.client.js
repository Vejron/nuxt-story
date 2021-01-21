import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCEz-Mm1mIsf70StQ-VS5RhR786x2-KA3I",
  authDomain: "prices-energy.firebaseapp.com",
  projectId: "prices-energy",
  storageBucket: "prices-energy.appspot.com",
  messagingSenderId: "450416497943",
  appId: "1:450416497943:web:364bdbb891a8d968a05352",
  measurementId: "G-QQF6SECP5L"
};
// Initialize Firebase just once :)
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const store = firebase.firestore();
export default firebase;