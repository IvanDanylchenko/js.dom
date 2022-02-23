"use strict";

const [changeText, changeColor] = document.querySelectorAll("button");

changeText.onclick = () => {
  changeText.textContent = "New text";
};

changeColor.addEventListener("click", changeColorBtn);

function changeColorBtn() {
  let valueColor1 = Math.random() * 256;
  let valueColor2 = Math.random() * 256;
  let valueColor3 = Math.random() * 256;
  this.style.backgroundColor = `rgb(${valueColor1}, ${valueColor2}, ${valueColor3})`;
}

function setNewImage() {
  document.querySelector("img").src =
    "https://i.pinimg.com/originals/9b/6b/24/9b6b2491b3422d19d71df7d4cac992d2.png";
}

function setOldImage() {
  document.querySelector("img").src =
    "https://python-scripts.com/wp-content/uploads/2021/07/homer-9.jpg";
}

const elem = document.querySelector("h1");
const color = ["red-text", "yellow-text", "blue-text"];

let colorIndex = -1;

elem.addEventListener("click", changeColor1);

function changeColor1() {
  this.classList.remove(`${color[colorIndex]}`);
  colorIndex = (colorIndex + 1) % color.length;
  this.classList.add(`${color[colorIndex]}`);
}
