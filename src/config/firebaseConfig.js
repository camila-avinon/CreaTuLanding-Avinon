import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyARJzY1qMbGGUsNiCKCeodz-9QFJnvDxGk",
    authDomain: "mi-app-9c68b.firebaseapp.com",
    projectId: "mi-app-9c68b",
    storageBucket: "mi-app-9c68b.appspot.com",
    messagingSenderId: "490492184681",
    appId: "1:490492184681:web:b917eaad5fa3541c24faf8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);