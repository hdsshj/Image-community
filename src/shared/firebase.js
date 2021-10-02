import firebase from 'firebase/app';
import  'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDdGDA_PVVxMj8yEiJDA_NIzNnzRmYSMv0",
  authDomain: "image-sns.firebaseapp.com",
  projectId: "image-sns",
  storageBucket: "image-sns.appspot.com",
  messagingSenderId: "731334868184",
  appId: "1:731334868184:web:428005fe4c985089fd6bad",
  measurementId: "G-PP27GQT7YL"
}

const apiKey = firebaseConfig.apiKey;
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth, apiKey };