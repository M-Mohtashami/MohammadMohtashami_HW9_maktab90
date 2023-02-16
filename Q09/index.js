"use strict";
const container = document.getElementById("container");

document.addEventListener("mouseover", (event) => {
  const tooltip = event.target.dataset.tooltip;
  if (tooltip) {
    let pos = event.target.getBoundingClientRect();
    const tooltipBox = document.createElement("div");
    tooltipBox.append(tooltip);
    tooltipBox.classList.add("tooltip");
    tooltipBox.id = "tooltip";
    tooltipBox.setAttribute(
      "style",
      `position:absolute; top:${pos.bottom + 5}px;`
    );
    container.append(tooltipBox);
    console.log(pos.top, pos.right, pos.bottom, pos.left);
  }
});
document.addEventListener("mouseout", (event) => {
  const tooltip = event.target.dataset.tooltip;
  if (tooltip) {
    let tooltipBox = document.getElementById("tooltip");
    tooltipBox.remove();
  }
});
