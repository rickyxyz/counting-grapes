import { initializeApp } from "firebase/app";
import { onValue, getDatabase, increment, ref, set } from "firebase/database";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: import.meta.env.VITE_RTDB_URL,
};

const firebaseApp = initializeApp(firebaseConfig);

const rtdb = getDatabase(firebaseApp);
const firestore = getFirestore(firebaseApp);

async function createFirestoreTransaction(name: string) {
  try {
    await addDoc(collection(firestore, "users", name, "transactions"), {
      date: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
}

function incrementRTDB(name: string): void {
  set(ref(rtdb, `Counter/${name}`), increment(1));
}

function syncRTDB(name: string, callback: (data: any) => void) {
  onValue(ref(rtdb, `Counter/${name}`), (snapshot: any) => {
    const data = snapshot.val();
    callback(data);
  });
}

const firebase = {
  syncRTDB,
  incrementRTDB,
  createFirestoreTransaction,
};

export default firebase;
