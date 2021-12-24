//import * as firebase from 'firebase';
//import firebase from 'firebase/app'
//import firebase from 'firebase/database'
import "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXBN6YkETssw-DeDjmHbwrWVbXtWN0L2M",
  authDomain: "school-attendance-81e85.firebaseapp.com",
  databaseURL: "https://school-attendance-81e85-default-rtdb.firebaseio.com",
  projectId: "school-attendance-81e85",
  storageBucket: "school-attendance-81e85.appspot.com",
  messagingSenderId: "754635222545",
  appId: "1:754635222545:web:b644f88f683325786fcbb0"
};
const Firebase = { // add this 
  database: () => { return firebase.database() } };
  export default Firebase;
//firebase.initializeApp(firebaseConfig);
//export default firebase.database()

  