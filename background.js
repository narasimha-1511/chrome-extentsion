import { initializeApp } from "./firestore/firebase-app.js";
import { getAuth } from "./firestore/auth.js"; //---> Trying to get the authentication

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  sendResponse("Hello respinse fromt the backend");
});


