"use strict";

//1
const table = document.querySelector("#age-table");
console.log(table);
//2
const labels = table.querySelectorAll("label");
console.log(labels);
//3
const age = table.querySelector("td:first-child").innerHTML;
console.log(age);

//4
const form = document.querySelector('[name="search-person"]');
console.log(form);
//5
const firstInput = form.querySelector("input:first-child");
console.log(firstInput);
//6
const lastInputs = form.querySelectorAll("input:last-child");
const lastInput = lastInputs[lastInputs.length - 1];
console.log(lastInput);
