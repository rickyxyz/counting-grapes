import "./style.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, increment } from "firebase/database";

const number = document.querySelector("#number")!;
const buttonAdd = document.querySelector("#add")! as HTMLButtonElement;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: import.meta.env.VITE_RTDB_URL,
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

onValue(ref(database, "Counter"), (snapshot) => {
  const data = snapshot.val();
  updateCounter(data);
});

function counterAdd() {
  set(ref(database, "Counter"), increment(1));
}

function updateCounter(newValue: number) {
  number.textContent = newValue.toString();
}

buttonAdd.onclick = counterAdd;
