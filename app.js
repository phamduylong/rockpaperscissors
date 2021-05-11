const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the game
    const startGame = () => {
      const playButton = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playButton.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      for(const hand of hands) {
        hand.addEventListener("animationend", function() {
          hand.style.animation = "";
        });
      };
      //Computer options
      const computerOptions = ["rock", "paper", "scissors"];
  
      for (const option of options) {
        option.addEventListener("click", function() {
          //Computer choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update images
            playerHand.src = `./${this.textContent}.png`;
            computerHand.src = `./${computerChoice}.png`;
          }, 2000);
          //Animations
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
          //reset to rock hands when replaying
          playerHand.src = 'rock.png';
          computerHand.src = 'rock.png';
        });
      };
    };

    //function to update score based on pScore and cScore (changed due to result)
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };

    //compare hands to decide who wins
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update text
      const winner = document.querySelector(".winner");
      //Check for tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        pScore++;
        cScore++;
        updateScore();
        return;
      }
      //Check for rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };
    
  
    //call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game 
  game();
