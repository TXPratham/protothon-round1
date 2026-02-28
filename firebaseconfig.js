import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkR7VG5XZt1Qxb7nK5cqQmdkI9zM3tGDo",
  authDomain: "protothon-seva-connect.firebaseapp.com",
  databaseURL: "https://protothon-seva-connect-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "protothon-seva-connect",
  storageBucket: "protothon-seva-connect.firebasestorage.app",
  messagingSenderId: "807607822273",
  appId: "1:807607822273:web:56b99ab9dc231541783140",
  measurementId: "G-LYSDDHG38P"
};

// Initialize Firebase
let app;
let analytics;
let db;
let auth;

try {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  db = getFirestore(app);
  auth = getAuth(app);
} catch (e) {
  console.error("Firebase Initialization Error:", e);
}

// Export the database and auth
export { db, auth };