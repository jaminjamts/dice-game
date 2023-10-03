// global huwsagchdiig zarlaj baina idewhtei toglogch, onoo, eeljiin onoo
var activePlayer;
var scores;
var roundScore;

//shoonii zurgiig uzuuleh elementiig DOM-oos haij olood end hadgaliya
var diceDom = document.querySelector(".dice");

// togloomiig ehluulne
initGame();
// togloomiin ehlehed zoriulsan
function initGame() {
  // toglogchiin eeljiig hadgalah huwisagch 1-r toglogch 0, 2-r toglogch 1;
  activePlayer = 0;
  // toglogchiin onood hadgalah huwisagch
  scores = [0, 0];
  // toglogchiin eeljindee tsugluulj bui onoog hadgalah huwisagch
  roundScore = 0;
  // shoonii ali talaaraa buusniig tsugluulah huwisagch heregtei, 1-6 gesen utgiig ene huwsagchid sanamsarguigeer uusgej ugnu.
  // togloom ehelhed beltgel ajil
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //toglogchdiin neriig butsaaj gargana
  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

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
    switchToNextPlayer();
  }
});

// HOLD towchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  // ug toglogchiin tsugluulsan eeljiin onoog global onoon deer nemj ugnu.
  scores[activePlayer] = scores[activePlayer] + roundScore;

  //   delgets deer onoog uurchlunu
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  //   toglogch hojson esehiig shalgah
  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // toglogchiin eeljiig solino.
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  //  eeljiin onoog in 0 bolgono.
  roundScore = 0;
  // toglogchiin  eeljiig solino.
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // shoog tur huwaana
  diceDom.style.display = "none";
}

// new game button event listener
document.querySelector(".btn-new").addEventListener(
  "click",

  initGame
);
