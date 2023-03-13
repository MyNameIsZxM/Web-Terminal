const outputDiv = document.getElementById("typing-container");

const txt = "Welcome to the terminal.<np> Click a box to see what's inside.";
const splitted = txt.split("<np>");

splitted.forEach(function () {
  const p = document.createElement("p");
  outputDiv.appendChild(p);
});

const paras = outputDiv.querySelectorAll("p");

let i = 0;
let currentPara = 0;

const intervalId = setInterval(function () {
  paras[currentPara].innerHTML += splitted[currentPara][i];
  i++;

  if (i === splitted[currentPara].length) {
    currentPara++;
    i = 0;

    if (currentPara === splitted.length) {
      clearInterval(intervalId);
    }
  }
}, 30);
