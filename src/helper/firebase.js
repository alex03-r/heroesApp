

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

 import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDqxf4i2fo4e44GijHtafCyzyy_2F4nX40",
  authDomain: "hero-app-phothos.firebaseapp.com",
  projectId: "hero-app-phothos",
  storageBucket: "hero-app-phothos.appspot.com",
  messagingSenderId: "672041357449",
  appId: "1:672041357449:web:8de3d190427d6ebb243658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storageApp = getStorage(app);