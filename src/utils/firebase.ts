import { initializeApp } from "@firebase/app";
import {getStorage} from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDEKNnBNmipXLaN20zaJLrL3S6MuOM-BlE",
    storageBucket: "gregbudo.firebasestorage.app",
    projectId: "gregbudo",
};

const appFireBase = initializeApp(firebaseConfig);
export const storage = getStorage(appFireBase);

export default appFireBase;