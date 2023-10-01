// toglogchiin eeljiig hadgalah huwisagch 1-r toglogch 0, 2-r toglogch 1;
var activePlayer = 0;

// toglogchiin onood hadgalah huwisagch
var Scores = [0, 0];

// toglogchiin eeljindee tsugluulj bui onoog hadgalah huwisagch
var roundScore = 0;

// shoonii ali talaaraa buusniig tsugluulah huwisagch heregtei, 1-6 gesen utgiig ene huwsagchid sanamsarguigeer uusgej ugnu.

// togloom ehelhed beltgel ajil

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 dotorh toog sanamsargui neg too gargaj irne.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // shoonii zuragiig gargaj irne.
  diceDom.style.display = "block";
  //   buusan sanamsargui toog hargalzah shoonii zurgiig web deer gargaj irne.
  diceDom.src = "dice-" + diceNumber + ".png";
  // buusan too 1s ylgatai bol idewhtei toglogchiin eeljiin toog gargaj ugnu.
  if (diceNumber !== 1) {
    // 1s ylgaatai too buuwal buusan toog toglogchid nemj ugnu.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1buusan tul toglogchiin eeljiig ene hesegt solij ugnu.
    //  ene toglogchiin toog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // herew idewhtei toglogch in 0 bwal idewhtei toglogchiin 1 bolgo.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // shoog tur alga bolgoh
    diceDom.style.display = "none";
  }
});
