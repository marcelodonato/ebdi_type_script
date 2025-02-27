// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// Configuração do Firebase (substitua com suas credenciais)
const firebaseConfig = {
    apiKey: "AIzaSyCpUqFlqr2Lze5XumYI-hX4RUkxGeX9G-E",
    authDomain: "semcodar-tutorialff-11c8f.firebaseapp.com",
    projectId: "semcodar-tutorialff-11c8f",
    storageBucket: "semcodar-tutorialff-11c8f.firebasestorage.app",
    messagingSenderId: "240171687225",
    appId: "1:240171687225:web:eb479fabdae86b3d959ce8"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta serviços com tipagem correta
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

export { auth, db };
