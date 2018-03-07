import firebase from "firebase";

const apiKey = process.env.VUE_APP_FIREBASE_KEY;
const authDomain = `${process.env.VUE_APP_FIREBASE_PROJECTID}.firebaseapp.com`;
const databaseURL = `https://${
  process.env.VUE_APP_FIREBASE_PROJECTID
}.firebaseio.com`;
const projectId = process.env.VUE_APP_FIREBASE_PROJECTID;
const storageBucket = `${process.env.VUE_APP_FIREBASE_PROJECTID}.appspot.com`;
const messagingSenderId = process.env.VUE_APP_FIREBASE_MESSAGESENDERID;

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
};
firebase.initializeApp(config);

export default firebase;

export function onAuthenticationChanged() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(
      user => {
        resolve(user);
        return;
      },
      error => {
        reject();
        console.log(error.message);
      }
    );
  });
}
export function createUser({ email, password }) {
  return new Promise((resolve, reject) => {
    const createdUser = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    createdUser.then(
      user => {
        // Redirect to login
        resolve(user);
        return;
      },
      error => {
        reject(error.message);
      }
    );
  });
  // const createdUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
  // return createdUser;
}

export function login({ email, password }) {
  return new Promise((resolve, reject) => {
    const authenticatedUser = firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    authenticatedUser.then(
      user => {
        resolve(user);
        return;
      },
      error => {
        reject(error.message);
      }
    );
  });
}

export function getUser() {
  return firebase.auth().currentUser;
}

export function signOut() {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          resolve(true);
          return;
        },
        error => {
          console.log(error.message);
          reject();
        }
      );
  });
}
