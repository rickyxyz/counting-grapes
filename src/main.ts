import firebase from "./firebase";
import "./style.css";

const number = document.querySelector("#number")!;
const buttonAdd = document.querySelector("#add")! as HTMLButtonElement;

const { syncRTDB, incrementRTDB } = firebase;

syncRTDB("r", updateCounter);

function updateCounter(newValue: number) {
  number.textContent = newValue.toString();
}

buttonAdd.onclick = () => {
  incrementRTDB("r");
};
