"use strict";

const links = document.querySelectorAll("a");

console.log(links[0].innerHTML.includes("://"));

links.forEach((link) => {
  if (
    link.innerHTML.includes("://") &&
    !link.innerHTML.includes("http://internal.com")
  ) {
    link.setAttribute("style", "color:orange;");
  }
});
