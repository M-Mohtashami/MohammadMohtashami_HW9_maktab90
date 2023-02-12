"use strict";

const hider = document.getElementById("hider");
const text = document.getElementById("text");

hider.addEventListener("click", () => {
  text.setAttribute("style", "display:none;");
  setTimeout(() => {
    hider.setAttribute("style", "display:none;");
  }, 1000);
});
