// getting user input
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    console.log("Error, please type: rock, paper, scissors.");
  }
};

// Generating computers choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
// Determining Winner based off of user choice and computers choice
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "sorry, computer won!";
    } else {
      return "congratulations, You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "sorry, computer won";
    } else {
      return "congratulations, You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "sorry, computer won";
    } else {
      return "congratulations, You won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("you threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
