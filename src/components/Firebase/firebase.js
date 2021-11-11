import app from 'firebase/app';
import 'firebase/firestore'

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSENGING_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
  };

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();

;  }
  menu = () => this.db.collection("fl_schemas").where("group", "==", "menu").get();
  header = () => this.db.collection("fl_schemas").where("group", "==", "header").get();
  landing = () => this.db.collection("fl_schemas").where("group", "==", "Page-accueil").get();
  qui = () => this.db.collection("fl_schemas").where("group", "==", "qui-sommes-nous").get();
  intervenir = () => this.db.collection("fl_schemas").where("group", "==", "Intervenir").get();
  inscription = () => this.db.collection("fl_schemas").where("group", "==", "je-m-inscris").get();
  
}

export default Firebase