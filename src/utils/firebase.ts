import { initializeApp } from "@firebase/app";
import {getStorage} from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBHNG8qZQ4p3aybhZb0udAQ3rcW5xerecU",
    authDomain: "gregbudo.firebaseapp.com",
    databaseURL: "https://gregbudo-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gregbudo",
    storageBucket: "gregbudo.firebasestorage.app",
    messagingSenderId: "556643830918",
    appId: "1:556643830918:web:b0e4e2065ccb97c9c65507",
    measurementId: "G-X5CBCD9XRT"
};

const appFireBase = initializeApp(firebaseConfig);
export const storage = getStorage(appFireBase);

export default appFireBase;