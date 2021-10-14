import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDC7I4vGukI_JMkcch9Il0sapZ__-S9zDc",
  authDomain: "complaint-forum-adf2a.firebaseapp.com",
  projectId: "complaint-forum-adf2a",
  storageBucket: "complaint-forum-adf2a.appspot.com",
  messagingSenderId: "652480629674",
  appId: "1:652480629674:web:970eb0ab00b30f2f3f39d3"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

