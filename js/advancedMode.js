const step2Advanced = document.getElementById("step2-advanced");

const rockAdvanced = document.getElementById("rock-advanced");
const paperAdvanced = document.getElementById("paper-advanced");
const scissorsAdvanced = document.getElementById("scissors-advanced");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

const userPickAdvanced = document.getElementById("userPick-advanced");
const userPickAdvancedImg = document.querySelector("#userPick-advanced img");
const computerPickAdvanced = document.getElementById("computerPick-advanced");
const computerPickAdvancedImg = document.querySelector(
  "#computerPick-advanced img"
);

const resultContainerAdvanced = document.getElementById("result-advanced");
const resultTextAdvanced = document.querySelector("#result-advanced h3");
const pickAgainAdvanced = document.querySelector("#pickAgain-advanced");

let itemsAdvanced = [
  rockAdvanced,
  paperAdvanced,
  scissorsAdvanced,
  spock,
  lizard,
];

let randomAdvanced;

function computerChoiceAdvanced() {
  randomAdvanced = Math.floor(Math.random() * items.length);

  setTimeout(() => {
    computerPickAdvanced.style.display = "flex";

    switch (randomAdvanced) {
      case 0:
        computerPickAdvanced.classList.remove("main__iconPaper");
        computerPickAdvanced.classList.remove("main__iconScissors");
        computerPickAdvanced.classList.remove("main__iconLizard");
        computerPickAdvanced.classList.remove("main__iconSpock");

        computerPickAdvanced.classList.add("main__iconRock");
        computerPickAdvancedImg.src = "images/icon-rock.svg";
        break;
      case 1:
        computerPickAdvanced.classList.remove("main__iconRock");
        computerPickAdvanced.classList.remove("main__iconScissors");
        computerPickAdvanced.classList.remove("main__iconLizard");
        computerPickAdvanced.classList.remove("main__iconSpock");

        computerPickAdvanced.classList.add("main__iconPaper");
        computerPickAdvancedImg.src = "images/icon-paper.svg";
        break;
      case 2:
        computerPickAdvanced.classList.remove("main__iconPaper");
        computerPickAdvanced.classList.remove("main__iconRock");
        computerPickAdvanced.classList.remove("main__iconLizard");
        computerPickAdvanced.classList.remove("main__iconSpock");

        computerPickAdvanced.classList.add("main__iconScissors");
        computerPickAdvancedImg.src = "images/icon-scissors.svg";
        break;
      case 3:
        computerPickAdvanced.classList.remove("main__iconPaper");
        computerPickAdvanced.classList.remove("main__iconScissors");
        computerPickAdvanced.classList.remove("main__iconLizard");
        computerPickAdvanced.classList.remove("main__iconRock");

        computerPickAdvanced.classList.add("main__iconSpock");
        computerPickAdvancedImg.src = "images/icon-spock.svg";
        break;
      case 4:
        computerPickAdvanced.classList.remove("main__iconPaper");
        computerPickAdvanced.classList.remove("main__iconScissors");
        computerPickAdvanced.classList.remove("main__iconRock");
        computerPickAdvanced.classList.remove("main__iconSpock");

        computerPickAdvanced.classList.add("main__iconLizard");
        computerPickAdvancedImg.src = "images/icon-lizard.svg";
        break;
    }
  }, 2500);
}

itemsAdvanced.forEach((item) => {
  item.addEventListener("click", () => {
    step1Advanced.replaceWith(step2Advanced);
    step2Advanced.style.display = "flex";

    computerChoiceAdvanced();

    advancedModeBtn.style.pointerEvents = "none";
  });
});

function displayResultAdvanced() {
  setTimeout(() => {
    step2Advanced.classList.add("active");
    resultContainerAdvanced.style.display = "block";
  }, 4000);
}

function youWinAdvanced() {
  resultTextAdvanced.innerText = "YOU WIN";
  resultTextAdvanced.style.color = "hsl(229, 64%, 46%)";
}

function youLoseAdvanced() {
  resultTextAdvanced.innerText = "YOU LOSE";
  resultTextAdvanced.style.color = "hsl(349, 70%, 56%)";
}

function drawAdvanced() {
  resultTextAdvanced.innerText = "DRAW";
  resultTextAdvanced.style.color = "#fff";
}

rockAdvanced.addEventListener("click", () => {
  userPickAdvanced.classList.remove("main__iconPaper");
  userPickAdvanced.classList.remove("main__iconScissors");
  userPickAdvanced.classList.remove("main__iconLizard");
  userPickAdvanced.classList.remove("main__iconSpock");

  userPickAdvanced.classList.add("main__iconRock");
  userPickAdvancedImg.src = "images/icon-rock.svg";

  switch (randomAdvanced) {
    case 0:
      drawAdvanced();
      displayResultAdvanced();
      break;
    case 1:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
    case 2:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
    case 3:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
    case 4:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
  }

  step1Advanced.replaceWith(step2Advanced);
  step2Advanced.style.display = "flex";

  finalStepAdvanced();
});

paperAdvanced.addEventListener("click", () => {
  userPickAdvanced.classList.remove("main__iconRock");
  userPickAdvanced.classList.remove("main__iconScissors");
  userPickAdvanced.classList.remove("main__iconLizard");
  userPickAdvanced.classList.remove("main__iconSpock");

  userPickAdvanced.classList.add("main__iconPaper");
  userPickAdvancedImg.src = "images/icon-paper.svg";

  switch (randomAdvanced) {
    case 0:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
    case 1:
      drawAdvanced();
      displayResultAdvanced();
      break;
    case 2:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
    case 3:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
    case 4:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
  }

  finalStepAdvanced();
});

scissorsAdvanced.addEventListener("click", () => {
  userPickAdvanced.classList.remove("main__iconRock");
  userPickAdvanced.classList.remove("main__iconPaper");
  userPickAdvanced.classList.remove("main__iconLizard");
  userPickAdvanced.classList.remove("main__iconSpock");

  userPickAdvanced.classList.add("main__iconScissors");
  userPickAdvancedImg.src = "images/icon-scissors.svg";

  switch (randomAdvanced) {
    case 0:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
    case 1:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
    case 2:
      drawAdvanced();
      displayResultAdvanced();
      break;
    case 3:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
    case 4:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
  }

  finalStepAdvanced();
});

spock.addEventListener("click", () => {
  userPickAdvanced.classList.remove("main__iconRock");
  userPickAdvanced.classList.remove("main__iconScissors");
  userPickAdvanced.classList.remove("main__iconLizard");
  userPickAdvanced.classList.remove("main__iconPaper");

  userPickAdvanced.classList.add("main__iconSpock");
  userPickAdvancedImg.src = "images/icon-spock.svg";

  switch (randomAdvanced) {
    case 0:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
    case 1:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
    case 2:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
    case 3:
      drawAdvanced();
      displayResultAdvanced();
      break;
    case 4:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
  }

  finalStepAdvanced();
});

lizard.addEventListener("click", () => {
  userPickAdvanced.classList.remove("main__iconRock");
  userPickAdvanced.classList.remove("main__iconScissors");
  userPickAdvanced.classList.remove("main__iconPaper");
  userPickAdvanced.classList.remove("main__iconSpock");

  userPickAdvanced.classList.add("main__iconLizard");
  userPickAdvancedImg.src = "images/icon-lizard.svg";

  switch (randomAdvanced) {
    case 0:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
    case 1:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
    case 2:
      youLoseAdvanced();
      displayResultAdvanced();
      computerScoreIdx++;
      updateScore();
      break;
    case 3:
      youWinAdvanced();
      displayResultAdvanced();
      userScoreIdx++;
      updateScore();
      break;
    case 4:
      drawAdvanced();
      displayResultAdvanced();
      break;
  }

  finalStepAdvanced();
});

pickAgainAdvanced.addEventListener("click", () => {
  computerPickAdvanced.style.display = "none";
  resultContainerAdvanced.style.display = "none";
  step2Advanced.classList.remove("active");

  step2Advanced.replaceWith(step1Advanced);

  advancedModeBtn.style.pointerEvents = "all";
});

function finalStepAdvanced() {
  setTimeout(() => {
    if (userScoreIdx === 5) {
      step2Advanced.replaceWith(finalResult);
      finalResult.style.display = "block";
      finalMessage.innerText = "Congratulations, you won the game!!!";
      finalMessage.style.color = "hsl(229, 64%, 46%)";
    }

    if (computerScoreIdx === 5) {
      step2Advanced.replaceWith(finalResult);
      finalResult.style.display = "block";
      finalMessage.innerText = "Too bad, you lost the game!";
      finalMessage.style.color = "hsl(349, 70%, 56%)";
    }
  }, 4000);
}
