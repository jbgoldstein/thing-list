import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAd2IFSjJxFbUje_jj7P-uyex7luM0Bias",
    authDomain: "thing-list-a040f.firebaseapp.com",
    databaseURL: "https://thing-list-a040f.firebaseio.com",
    projectId: "thing-list-a040f",
    storageBucket: "thing-list-a040f.appspot.com",
    messagingSenderId: "234990668935"
})

const db = database(app)

export default Rebase.createClass(db)