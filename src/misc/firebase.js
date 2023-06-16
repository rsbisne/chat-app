import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
const config = {
  apiKey: 'AIzaSyClu6Rk3joCbu1cSA8eqLUTQmWvlBBZaYA',
  authDomain: 'chat-web-app-c4322.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-c4322-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-c4322',
  storageBucket: 'chat-web-app-c4322.appspot.com',
  messagingSenderId: '1065616309272',
  appId: '1:1065616309272:web:4e812da5d78cfbfb1e176d',
};
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
