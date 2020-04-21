import firebase from 'firebase'
import { initializeApp, database, auth } from 'firebase'
import store from './vuex/store'


const config = {
  apiKey: "AIzaSyAorHXEfWDfgLL8lYLlrfYGPuV20yTLcSo",
  authDomain: "online-store74.firebaseapp.com",
  databaseURL: "https://online-store74.firebaseio.com",
  projectId: "online-store74",
  storageBucket: "online-store74.appspot.com",
  messagingSenderId: "755237834048",
  appId: "1:755237834048:web:2eca219aa9de06bd77bea5"
};
// Initialize Firebase
initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});



export default {
  database: database(),
  auth: auth()
}


