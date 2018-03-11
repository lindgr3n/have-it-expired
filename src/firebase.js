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
        reject(error);
      }
    );
  });
}
export function signupUser({ email, password }) {
  return new Promise((resolve, reject) => {
    const createdUser = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    createdUser
      .then(user => {
        resolve(user);
        return;
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function signInUser({ email, password }) {
  return new Promise((resolve, reject) => {
    const authenticatedUser = firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    authenticatedUser
      .then(user => {
        resolve(user);
        return;
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function addUser(user) {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("users")
      .child(user.uid)
      .set(user)
      .then(data => {
        resolve(data);
        return;
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getUser() {
  return firebase.auth().currentUser;
}

export function signOutUser() {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        resolve(true);
        return;
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function addItemForUser(user, item) {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(`items/${user.key}/items`)
      .push(item)
      .then(data => {
        resolve(data);
        return;
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function loadItemsForUser(user) {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(`items/${user.key}/items`)
      .once("value")
      .then(data => {
        resolve(data);
        return;
      })
      .catch(error => {
        reject(error);
      });
  });
}
