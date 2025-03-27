"use strict";
let countA = 0;
let style = document.createElement("style");
document.head.appendChild(style);
let countB = 0;
function speedCh() {
  countB++
  if (countB < 700) {
    return 22;
  } else {
    if (countB > 1400) {
      countB = 0;
    }
    return 1;
  }
}
function ruN() {
  countA += speedCh();
  style.innerHTML = `
    #main {
      rotate: ${countA}deg;
    }
  `;
}
setInterval(ruN, 19);
// about Button
let countC = 0;
function aboutBtn() {
  switch (countC) {
    case 0:
      document.querySelector("pre").style = "display:none;";
      countC++;
      break;
    case 1:
      document.querySelector("pre").style = "";
      countC--;
      break;
  }
}
aboutBtn();