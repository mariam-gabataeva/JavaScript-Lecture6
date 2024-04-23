const body = document.body;
const div = document.createElement(`div`);
const h1 = document.createElement(`h1`);
const nav = document.createElement(`nav`);
const ul = document.createElement(`ul`);
const li = document.createElement(`li`);
const btn = document.getElementById(`btn`);

body.append(div);
div.append(h1, nav);
h1.textContent = "GeoLab";
nav.append(ul);
ul.append(li);
li.textContent = "Links";

let changeColor = true;

function handliColor() {
  if (changeColor) {
    body.style.backgroundColor = `black`;
    h1.style.color = `white`;
    li.style.color = `white`;
  } else {
    body.style.backgroundColor = `white`;
    h1.style.color = `black`;
    li.style.color = `black`;
  }
  changeColor = !changeColor;
}
