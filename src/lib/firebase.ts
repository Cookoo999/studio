import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDNo9XtIqfLXPIBsSkcmjCpeuvbPbsk4bY",
  authDomain: "landing-ace-28snf.firebaseapp.com",
  projectId: "landing-ace-28snf",
  storageBucket: "landing-ace-28snf.appspot.com",
  messagingSenderId: "52956785938",
  appId: "1:52956785938:web:6416ee9cd409ecf3f597cb"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
