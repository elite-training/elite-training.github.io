importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js')

const messaging = getMessaging();
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});