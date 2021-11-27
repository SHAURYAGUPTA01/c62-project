//import * as firebase from 'firebase';
import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: 'AIzaSyAC-gPpmhWIyf7nQ8aqr0UrbZjE_fV4sAU',
  authDomain: 'schhol-attendence-app-81d06.firebaseapp.com',
  databaseURL:
    'https://schhol-attendence-app-81d06-default-rtdb.firebaseio.com',
  projectId: 'schhol-attendence-app-81d06',
  storageBucket: 'schhol-attendence-app-81d06.appspot.com',
  messagingSenderId: '566775747329',
  appId: '1:566775747329:web:0308e5f803146ce7818100',
};
if (!firebase.apps.length) {
  let app = firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
