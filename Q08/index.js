"use strict";

const removeBtn = document.getElementById("container");

removeBtn.addEventListener("click", (event) => {
  if (event.target.className != "remove-button") return;
  const target = event.target.closest("div");
  target.remove();
});
