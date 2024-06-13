import firebase from "./firebase";

const { syncRTDB, incrementRTDB, createFirestoreTransaction } = firebase;

export default function Card(name: string) {
  const card = document.createElement("div");
  const nameElement = document.createElement("h2");
  const number = document.createElement("h1");
  const buttonAdd = document.createElement("button") as HTMLButtonElement;

  nameElement.textContent = name;
  buttonAdd.textContent = "+";

  card.classList.add("card");

  function updateCounter(newValue: number) {
    number.textContent = newValue.toString();
  }

  syncRTDB(name, updateCounter);
  buttonAdd.onclick = () => {
    incrementRTDB(name);
    createFirestoreTransaction(name);
  };

  card.append(nameElement, number, buttonAdd);

  return card;
}
