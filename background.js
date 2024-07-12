import { initializeApp } from "./firestore/firebase-app.js";
import { getAuth } from "./firestore/auth.js"; //---> Trying to get the authentication

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  sendResponse("Hello respinse fromt the backend");
});

const firebaseConfig = {
  apiKey: "AIzaSyDfAYJUMCzWARhR64OfB-D3hQW_Xhn6Qwc",
  authDomain: "auto-otp-public.firebaseapp.com",
  databaseURL: "https://auto-otp-public-default-rtdb.firebaseio.com",
  projectId: "auto-otp-public",
  storageBucket: "auto-otp-public.appspot.com",
  messagingSenderId: "883142088527",
  appId: "1:883142088527:web:71257bb44807fb5c7c973a",
};

const app = initializeApp(firebaseConfig);
