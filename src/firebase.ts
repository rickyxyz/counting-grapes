import { initializeApp } from "firebase/app";
import { getDatabase, increment, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: import.meta.env.VITE_RTDB_URL,
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

function incrementRTDB(name: string): void {
  set(ref(database, `Counter/${name}`), increment(1));
}

const firebase = {
  database,
  incrementRTDB,
};

export default firebase;
