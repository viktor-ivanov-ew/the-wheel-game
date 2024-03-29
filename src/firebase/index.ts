import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env["NX_API_KEY"],
	authDomain: import.meta.env["NX_AUTH_DOMAIN"],
	projectId: import.meta.env["NX_PROJECT_ID"],
	storageBucket: import.meta.env["NX_STORAGE_BUCKET"],
	messagingSenderId: import.meta.env["NX_MESSAGING_SENDER_ID"],
	appId: import.meta.env["NX_APP_ID"]
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseFirestore = getFirestore(firebaseApp);

export {
	firebaseApp,
	firebaseAuth,
	firebaseFirestore
};
