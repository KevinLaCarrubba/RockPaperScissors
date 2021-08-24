var wins = 0;
var rounds = 0;
var loses = 0;
var ties = 0;
var userChoice;
var cpuChoice;
function playRPS() {
  var userEnter = window.prompt(
    "Please Choice a Choice of R(ock), P(aper), or S(cissor).",
    "Choose the first letter only."
  );
  switch (userEnter.toLowerCase()) {
    case "r":
      userChoice = "Rock";
      break;

    case "p":
      userChoice = "Paper";
      break;

    case "s":
      userChoice = "Scissor";
      break;

    case null:
      window.alert("Why did you hit cancel ? You scared ?!");
      break;
    default:
      window.alert("You did not enter R P or S. Try Again.");
      return playRPS();
  }

  if (userEnter != null) {
    function cpuGen(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var cpuChoice = cpuGen(1, 3);
    switch (cpuChoice) {
      case 1:
        cpuChoice = "Rock";
        window.alert("Computer chose " + cpuChoice);
        break;

      case 2:
        cpuChoice = "Paper";
        window.alert("Computer chose " + cpuChoice);
        break;

      case 3:
        cpuChoice = "Scissor";
        window.alert("Computer chose " + cpuChoice);
        break;
      default:
        window.alert("Computer tried to cheat.");
    }

    if (
      (userChoice === "Rock" && cpuChoice === "Scissor") ||
      (userChoice === "Paper" && cpuChoice === "Rock") ||
      (userChoice === "Scissor" && cpuChoice === "Paper")
    ) {
      window.alert("YOU WIN !!");
      wins++;
      rounds++;
    } else if (
      (userChoice === "Scissor" && cpuChoice === "Rock") ||
      (userChoice === "Rock" && cpuChoice === "Paper") ||
      (userChoice === "Paper" && cpuChoice === "Scissor")
    ) {
      window.alert("Computer beat you !");
      loses++;
      rounds++;
    } else if (userChoice === cpuChoice) {
      window.alert("It was a tie !");
      ties++;
      rounds++;
    }
    window.alert(
      "Round " +
        rounds +
        "\nWins: " +
        wins +
        "\nLoses: " +
        loses +
        "\nTies: " +
        ties
    );
  }
}

// generate a random number between 2 integers and have them included
// function cpuGen (min,max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
