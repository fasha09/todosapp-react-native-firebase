import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDGUvjA9_E2T2efQFBtvjFactlyZxe0ffg",
  authDomain: "todoapp-5380a.firebaseapp.com",
  projectId: "todoapp-5380a",
  storageBucket: "todoapp-5380a.firebasestorage.app",
  messagingSenderId: "1008228081136",
  appId: "1:1008228081136:web:73dbd9ce81459b67fc9135",
  measurementId: "G-K6JJT8SQQ6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };