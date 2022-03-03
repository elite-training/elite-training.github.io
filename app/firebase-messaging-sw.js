import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

const messaging = getMessaging();

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDd7d2CfQmaeARi2ZS7Iflx9INJQmz5Q3E",
  authDomain: "elite-training-gr.firebaseapp.com",
  projectId: "elite-training-gr",
  storageBucket: "elite-training-gr.appspot.com",
  messagingSenderId: "68061549678",
  appId: "1:68061549678:web:0b1249c85c43bf466d827f",
  measurementId: "G-F7C3PBNY0E"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);


onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/logo32.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});