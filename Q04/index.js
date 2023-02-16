"use strict";

const container = document.getElementById("container");

const data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTree(container, data) {
  const list = document.createElement("ul");
  for (let key in data) {
    const listItem = document.createElement("li");
    listItem.innerHTML = key;
    createTree(listItem, data[key]);
    list.appendChild(listItem);
  }
  container.appendChild(list);
}

createTree(container, data);
