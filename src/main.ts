import { onValue, ref } from "firebase/database";
import firebase from "./firebase";
import "./style.css";

const number = document.querySelector("#number")!;
const buttonAdd = document.querySelector("#add")! as HTMLButtonElement;

const { database, incrementRTDB } = firebase;

onValue(ref(database, "Counter"), (snapshot) => {
  console.log(snapshot.val());
  const data = snapshot.val();
  updateCounter(data.r);
});

function updateCounter(newValue: number) {
  number.textContent = newValue.toString();
}

buttonAdd.onclick = () => {
  incrementRTDB("r");
};
