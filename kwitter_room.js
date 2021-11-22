// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC87d1okGOcKdS8_X3zhUiU_lCQ_nTibM",
  authDomain: "lets-chat-web-app-1.firebaseapp.com",
  projectId: "lets-chat-web-app-1",
  storageBucket: "lets-chat-web-app-1.appspot.com",
  messagingSenderId: "1087752959604",
  appId: "1:1087752959604:web:2272003b2d25da9b930321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function logout()
{
    window.location = ("logout.html");
}