import firebase from 'firebase'
import "firebase/firestore"
import 'firebase/firebase-auth'


const firebaseConfig = {
  apiKey: "AIzaSyBU6Yi8PTQbwDg94C5FbXEm5r4Q7OnBlp0",
  authDomain: "do-ecommerce.firebaseapp.com",
  projectId: "do-ecommerce",
  storageBucket: "do-ecommerce.appspot.com",
  messagingSenderId: "847981877235",
  appId: "1:847981877235:web:b23a32b7b0fa092c5ee486"
};


const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const google = new firebase.auth.GoogleAuthProvider()

export function getFirestore () {
    return firebase.firestore(app)
}

export {auth, google}
