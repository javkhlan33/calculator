let display = document.getElementById("display");
let too = "";
let save = 0;
let temdeg = "";

function gargah(par) {
  too = too + par;
  display.textContent = too;
}

function uildel(param) {
  save = Number(too);
  too = "";
  temdeg = param;
}
function hasahbolgoh() {
  too = Number(too) * -1;
  display.textContent = too;
}
function tentsuu() {
  let sum = 0;

  if (temdeg == "+") {
    sum = save + Number(too);
    display.textContent = sum;
  } else if (temdeg == "*") {
    sum = save * Number(too);
    display.textContent = sum;
  } else if (temdeg == "/") {
    sum = save / Number(too);
    display.textContent = sum;
  } else if (temdeg == "-") {
    sum = save - Number(too);
    display.textContent = sum;
  }
}
function huvi() {
  too = Number(too) / 100;
  display.textContent = too;
}
function deleteOne() {
  too = too.slice(0, too.length - 1);
  if (too == "") {
    display.textContent = 0;
  } else {
    display.textContent = too;
  }
}
function remove() {
  display.textContent = 0;
  too = "";
  save = 0;
  temdeg = "";
}
