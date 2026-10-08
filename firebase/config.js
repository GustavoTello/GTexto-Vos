// Importar funciones Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "EL_APIKEY_ESCAPO",
  authDomain: "tienda-virtual-883ef.firebaseapp.com",
  projectId: "tienda-virtual-883ef",
  storageBucket: "tienda-virtual-883ef.firebasestorage.app",
  messagingSenderId: "871120614985",
  appId: "EL_APPID_BUSCA_A_APIKEY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
