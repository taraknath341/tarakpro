"use strict";
let score = {
  you: 0,
  com: 0,
}
let game_body = document.querySelector("#game-body");
function exit() {
  game_body.innerHTML = `
    <br><br>
    <h2 class="companyName">Tarak Program</h2>
    <h1 class="gameName">Stone Paper Sizer</h1>
    <br><br>
    <button class="play" onClick="playBtn()">Play</button>
    <br><br>
    <pre>Coder Name: Taraknath Karan.</pre>
  `;
  score.com = 0;
  score.you = 0;
}
exit();
function computerMode() {
  let a = new Date;
  a = a.getUTCSeconds();
  if (a % 6 == 0 || a % 4 == 0) {
    return "Stone";
  } else if (a % 5 == 0 || a % 3 == 0) {
    return "Paper";
  } else {
    return "Sizer";
  }
};
function playBtn() {
  game_body.innerHTML = `
    <p class="score">You: ${score.you} || Com: ${score.com}</p>
    <p>Choice Your:</p>
    <button class="choice" onClick="playMode('Stone')">Stone</button>
    <span class="hidden">..</span>
    <button class="choice" onClick="playMode('Paper')">Paper</button>
    <span class="hidden">..</span>
    <button class="choice" onClick="playMode('Sizer')">Sizer</button>
    <br><br><br>
    <br><br><br>
    <button onClick="exit()" class="aabb">Exit</button>
    `;
}
function gameResult(userPower, computerPower) {
  if (userPower == computerPower) {
    return "Game Due";
  } else if ((userPower == "Stone" && computerPower == "Sizer") || (userPower == "Paper" && computerPower == "Stone") || (userPower == "Sizer" && computerPower == "Paper")) {
    return "You Win";
  } else {
    return "You Lose";
  }
}
function scoreUpCom(par) {
  if (par == "You Lose") {
    let re = ++score.com;
    return re;
  } else {
    return score.com;
  }
}
function scoreUpYou(par) {
  if (par == "You Win") {
    let re = ++score.you;
    return re;
  } else {
    return score.you;
  }
}
function playMode(userPower) {
  let b = computerMode();
  let total = gameResult(userPower, b);
  game_body.innerHTML = `
    <p class="score">You: ${scoreUpYou(total)} || Com: ${scoreUpCom(total)}</p>
    <button class="aaaa">
      <font size="4">You</font>
      <br><br><br><br>
      <font size="6">${userPower}</font>
    </button>
    <span class="hidden">. . .</span>
    <button class="aaaa">
      <font size="4">Com</font>
      <br><br><br><br>
      <font size="6">${b}</font>
    </button>
    <br><br><br><br>
    <font size="7">${total}</font>
    <br><br><br>
    <button onClick="exit()" class="aabb">Exit</button>
    <button onClick="playBtn()" class="aabb">Play Again</button>
  `;
}
let zoomValue = 100;
function zoomBtn(z) {
  zoomValue += z;
  game_body.style.zoom = `${zoomValue}%`;
}
zoomBtn(10);