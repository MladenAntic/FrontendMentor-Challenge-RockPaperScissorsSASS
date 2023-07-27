const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

const step1 = document.getElementById("step1");
const step1Advanced = document.getElementById("step1-advanced");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const step2 = document.getElementById("step2");
const userPick = document.getElementById("user-pick");
const userPickImg = document.querySelector("#user-pick img");
const computerPick = document.getElementById("computer-pick");
const computerPickImg = document.querySelector("#computer-pick img");
const resultContainer = document.getElementById("result");
const resultText = document.querySelector("#result h3");
const pickAgain = document.getElementById("pick-again");

const finalResult = document.getElementById("final");
const finalMessage = document.querySelector("#final h1");
const playAgain = document.getElementById("play-again");

const rulesBtn = document.getElementById("rules");
const overlay = document.getElementById("overlay");
const rulesModal = document.getElementById("rules-modal");
const closeModal = document.getElementById("close-modal");
const rulesImage = document.getElementById("rules-image");

const advancedModeBtn = document.getElementById("advanced-mode");

rulesBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  rulesModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  overlay.style.display = "none";
  rulesModal.style.display = "none";
});

let items = [rock, paper, scissors];

let random;

let userScoreIdx = 0;
let computerScoreIdx = 0;

userScore.innerText = `${userScoreIdx}`;
computerScore.innerText = `${computerScoreIdx}`;

function updateScore() {
  setTimeout(() => {
    userScore.innerText = `${userScoreIdx}`;
    computerScore.innerText = `${computerScoreIdx}`;
  }, 4500);
}

function computerChoice() {
  random = Math.floor(Math.random() * items.length);

  setTimeout(() => {
    computerPick.style.display = "flex";

    switch (random) {
      case 0:
        computerPick.classList.remove("main__iconPaper");
        computerPick.classList.remove("main__iconScissors");

        computerPick.classList.add("main__iconRock");
        computerPickImg.src = "images/icon-rock.svg";
        break;
      case 1:
        computerPick.classList.remove("main__iconRock");
        computerPick.classList.remove("main__iconScissors");

        computerPick.classList.add("main__iconPaper");
        computerPickImg.src = "images/icon-paper.svg";
        break;
      case 2:
        computerPick.classList.remove("main__iconPaper");
        computerPick.classList.remove("main__iconRock");

        computerPick.classList.add("main__iconScissors");
        computerPickImg.src = "images/icon-scissors.svg";
        break;
    }
  }, 2500);
}

items.forEach((item) => {
  item.addEventListener("click", () => {
    step1.replaceWith(step2);
    step2.style.display = "flex";

    computerChoice();

    advancedModeBtn.style.pointerEvents = "none";
  });
});

function displayResult() {
  setTimeout(() => {
    step2.classList.add("active");
    resultContainer.style.display = "block";
  }, 4000);
}

function youWin() {
  resultText.innerText = "YOU WIN";
  resultText.style.color = "hsl(229, 64%, 46%)";
}

function youLose() {
  resultText.innerText = "YOU LOSE";
  resultText.style.color = "hsl(349, 70%, 56%)";
}

function draw() {
  resultText.innerText = "DRAW";
  resultText.style.color = "#fff";
}

function pointForUser() {
  setTimeout(() => {
    userScore.innerText = `${userScoreIdx + 1}`;
  }, 4500);
}

function pointForComputer() {
  setTimeout(() => {
    computerScore.innerText = `${computerScoreIdx + 1}`;
  }, 4500);
}

rock.addEventListener("click", () => {
  userPick.classList.remove("main__iconPaper");
  userPick.classList.remove("main__iconScissors");

  userPick.classList.add("main__iconRock");
  userPickImg.src = "images/icon-rock.svg";

  switch (random) {
    case 0:
      draw();
      displayResult();
      break;
    case 1:
      youLose();
      displayResult();
      computerScoreIdx++;
      updateScore();
      break;
    case 2:
      youWin();
      displayResult();
      userScoreIdx++;
      updateScore();
      break;
  }

  finalStep();
});

paper.addEventListener("click", () => {
  userPick.classList.remove("main__iconRock");
  userPick.classList.remove("main__iconScissors");

  userPick.classList.add("main__iconPaper");
  userPickImg.src = "images/icon-paper.svg";

  switch (random) {
    case 0:
      youWin();
      displayResult();
      userScoreIdx++;
      updateScore();
      break;
    case 1:
      draw();
      displayResult();
      break;
    case 2:
      youLose();
      displayResult();
      computerScoreIdx++;
      updateScore();
      break;
  }

  finalStep();
});

scissors.addEventListener("click", () => {
  userPick.classList.remove("main__iconPaper");
  userPick.classList.remove("main__iconRock");

  userPick.classList.add("main__iconScissors");
  userPickImg.src = "images/icon-scissors.svg";

  switch (random) {
    case 0:
      youLose();
      displayResult();
      computerScoreIdx++;
      updateScore();
      break;
    case 1:
      youWin();
      displayResult();
      userScoreIdx++;
      updateScore();
      break;
    case 2:
      draw();
      displayResult();
      break;
  }

  finalStep();
});

pickAgain.addEventListener("click", () => {
  computerPick.style.display = "none";
  resultContainer.style.display = "none";
  step2.classList.remove("active");

  step2.replaceWith(step1);

  advancedModeBtn.style.pointerEvents = "all";
});

function finalStep() {
  setTimeout(() => {
    if (userScoreIdx === 5) {
      step2.replaceWith(finalResult);
      finalResult.style.display = "block";
      finalMessage.innerText = "Congratulations, you won the game!!!";
      finalMessage.style.color = "hsl(229, 64%, 46%)";
    }

    if (computerScoreIdx === 5) {
      step2.replaceWith(finalResult);
      finalResult.style.display = "block";
      finalMessage.innerText = "Too bad, you lost the game!";
      finalMessage.style.color = "hsl(349, 70%, 56%)";
    }
  }, 4000);
}

playAgain.addEventListener("click", () => {
  finalResult.replaceWith(step1);

  computerPick.style.display = "none";
  resultContainer.style.display = "none";
  step2.classList.remove("active");

  userScoreIdx = 0;
  computerScoreIdx = 0;

  userScore.innerText = `${userScoreIdx}`;
  computerScore.innerText = `${computerScoreIdx}`;

  advancedModeBtn.style.pointerEvents = "all";
});

advancedModeBtn.addEventListener("click", () => {
  advancedModeBtn.classList.toggle("active");

  if (advancedModeBtn.classList.contains("active")) {
    advancedModeBtn.innerText = "Basic Mode";
    step1.replaceWith(step1Advanced);
    step1Advanced.style.display = "flex";

    rulesBtn.addEventListener("click", () => {
      rulesImage.src = "images/image-rules-bonus.svg";
    });
  } else {
    advancedModeBtn.innerText = "Advanced Mode";
    step1Advanced.replaceWith(step1);

    rulesBtn.addEventListener("click", () => {
      rulesImage.src = "images/image-rules.svg";
    });
  }

  userScoreIdx = 0;
  computerScoreIdx = 0;

  userScore.innerText = `${userScoreIdx}`;
  computerScore.innerText = `${computerScoreIdx}`;
});
