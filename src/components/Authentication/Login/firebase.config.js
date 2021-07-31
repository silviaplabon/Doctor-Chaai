import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAJy6FULAzhqL9MaD9QDdXnts2bWMBgZo0",
    authDomain: "doctorschaai-3fa7f.firebaseapp.com",
    projectId: "doctorschaai-3fa7f",
    storageBucket: "doctorschaai-3fa7f.appspot.com",
    messagingSenderId: "778413109071",
    appId: "1:778413109071:web:e34e55a2fbbe19d6a29f3a"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const auth = firebase.auth()


export { googleProvider, facebookProvider, auth }

