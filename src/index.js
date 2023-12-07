import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATNxJHrHXu_dz60jC5QpYervhSzy_aw2I",
  authDomain: "info340-a1-fantasyfootball.firebaseapp.com",
  databaseURL: "https://info340-a1-fantasyfootball-default-rtdb.firebaseio.com",
  projectId: "info340-a1-fantasyfootball",
  storageBucket: "info340-a1-fantasyfootball.appspot.com",
  messagingSenderId: "455603269412",
  appId: "1:455603269412:web:3ab175d3b742593a3ecdb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
