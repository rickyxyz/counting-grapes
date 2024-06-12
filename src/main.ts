import Card from "./card";
import users from "./const";
import "./style.css";

const cards = users.map((name) => Card(name));

const app = document.getElementById("app")! as HTMLDivElement;

app.append(...cards);
