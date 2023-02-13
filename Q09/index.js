"use strict";
const container = document.getElementById("container");

document.addEventListener("mouseover", (event) => {
  const tooltip = event.target.dataset.tooltip;
  if (tooltip) {
    const pos = event.target.getBoundingClientRect();
    const tooltipBox = document.createElement("div");
    tooltipBox.append(tooltip);
    tooltipBox.classList.add("tooltip");
    tooltipBox.id = "tooltip";
    container.append(tooltipBox);
    let top;
    let left;
    left = pos.left - tooltipBox.offsetWidth / 2 + event.target.offsetWidth / 2;
    top = pos.top - tooltipBox.offsetHeight - 5;
    if (left <= 0) left = 0;
    if (top <= 0) top = pos.bottom + 5;
    console.log(left, event.target.offsetWidth);
    tooltipBox.setAttribute("style", `top:${top}px;left:${left}px;`);
  }
});
document.addEventListener("mouseout", (event) => {
  const tooltip = event.target.dataset.tooltip;
  if (tooltip) {
    let tooltipBox = document.getElementById("tooltip");
    tooltipBox.remove();
  }
});
