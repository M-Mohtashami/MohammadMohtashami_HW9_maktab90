"use strict";
const list = document.getElementById("list");

let inputData;
while ((inputData = prompt("Enter an item to display"))) {
  const listItem = document.createElement("li");
  listItem.insertAdjacentText("beforeend", inputData);
  list.appendChild(listItem);
}
