// toglogchiin eeljiig hadgalah huwisagch 1-r toglogch 0, 2-r toglogch 1;
var activePlayer = 1;

// toglogchiin onood hadgalah huwisagch
var Scores = [0, 0];

// toglogchiin eeljindee tsugluulj bui onoog hadgalah huwisagch
var roundScore = 0;

// shoonii ali talaaraa buusniig tsugluulah huwisagch heregtei, 1-6 gesen utgiig ene huwsagchid sanamsarguigeer uusgej ugnu.

var dice = Math.floor(Math.random() * 6) + 1;

// togloom ehelhed beltgel ajil

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("shoonii buult " + dice);
