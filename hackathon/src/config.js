import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB3dvQwPHwJKlVSeMo4Qd0e8qnetgVHBe8",
    authDomain: "hackathon-here-f1d23.firebaseapp.com",
    databaseURL: "https://hackathon-here-f1d23.firebaseio.com",
    projectId: "hackathon-here-f1d23",
    storageBucket: "hackathon-here-f1d23.appspot.com",
    messagingSenderId: "674002456068"
  };
  const firebaseAuth = firebase.initializeApp(config);

  export default firebaseAuth;
