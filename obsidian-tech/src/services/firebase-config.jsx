import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS9NJNf0rW06li4ZGDzJz8ND0FdmMSq40",
  authDomain: "obsidan-tech.firebaseapp.com",
  projectId: "obsidan-tech",
  storageBucket: "obsidan-tech.appspot.com",
  messagingSenderId: "1054038208010",
  appId: "1:1054038208010:web:2899207aa2a75700bc39f3"
};

initializeApp(firebaseConfig);

export async function SignInWithFacebook() {
  const FacebookProvider = new FacebookAuthProvider();
  FacebookProvider.setCustomParameters(firebaseConfig);
  const auth = getAuth();
  return await signInWithPopup(auth, FacebookProvider);
}