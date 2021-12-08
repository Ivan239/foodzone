import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXj5nzYB2RMr8wg-uZ7MkpHyKzoriTocw",
  authDomain: "food-zone-1638632865343.firebaseapp.com",
  databaseURL: "https://food-zone-1638632865343-default-rtdb.firebaseio.com",
  projectId: "food-zone-1638632865343",
  storageBucket: "food-zone-1638632865343.appspot.com",
  messagingSenderId: "117016740296",
  appId: "1:117016740296:web:9471845f5b3f65907040fd",
  measurementId: "G-BFFZB1ZE5R"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
