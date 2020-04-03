import Vue from 'vue'
import store from './vuex/store'
import App from './App.vue'


import firebase from 'firebase/app'
import 'firebase/database'



Vue.config.productionTip = false



  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAorHXEfWDfgLL8lYLlrfYGPuV20yTLcSo",
    authDomain: "online-store74.firebaseapp.com",
    databaseURL: "https://online-store74.firebaseio.com",
    projectId: "online-store74",
    storageBucket: "online-store74.appspot.com",
    messagingSenderId: "755237834048",
    appId: "1:755237834048:web:2eca219aa9de06bd77bea5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


new Vue({
  render: h => h(App),
  store,

}).$mount('#app')


