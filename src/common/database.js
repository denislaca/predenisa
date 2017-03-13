import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyBile4wmoOwBCFvmPhRCIyWsWW_KKUEiEQ",
	authDomain: "messapp-d2c7c.firebaseapp.com",
	databaseURL: "https://messapp-d2c7c.firebaseio.com",
	storageBucket: "messapp-d2c7c.appspot.com",
	messagingSenderId: "846689920220"
}

firebase.initializeApp(config)
const database = firebase.database()

export default database
