import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'


firebase.initializeApp({
    'apiKey': process.env.VUE_APP_apiKey,
    'authDomain': process.env.VUE_APP_authDomain,
    'messagingSenderId': process.env.VUE_APP_messagingSenderId,
    'databaseURL': process.env.VUE_APP_databaseURL,
    'projectId': process.env.VUE_APP_projectId,
    'storageBucket': process.env.VUE_APP_strorageBucket
  })

// these three lines stop a warning error about date objects in firestore
const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

// firebase utils
const db = firebase.firestore()

export {
  db,
}

export default firebase;