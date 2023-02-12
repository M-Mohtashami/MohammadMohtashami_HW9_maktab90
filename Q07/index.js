"use strict";

const titleMenue = document.getElementById("click");
const menue = document.getElementById("list");

titleMenue.setAttribute("style", "cursor:pointer;");
titleMenue.addEventListener("click", () => {
  menue.hidden = !menue.hidden;
});
