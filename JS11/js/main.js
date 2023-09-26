// My first game rock paper scissors but full version

let playGame = confirm("Shall we play rock, paper, or scissors?");
if(playGame)
{
    //play
    let playerChoice = prompt("please enter rock,paper or scrissors.");
    if(playerChoice)
    {
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors")
        {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 
            ? "rock"
            : computerChoice === 2
            ? "paper"
            : "scissors";
            let result = playerOne === computer 
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\n PlayerOne wins!`
            alert(result);
            let playAgain = confirm("Play again?");
            playAgain 
            ? location.reload()
            : alert("Ok, thanks for playing, have nice day");
        }
        else
        {
            alert("You didn't enter anything");
        }
    }
    else
    {
        alert("I guess you changed your mind. Maybe next time");
    }
}
else
{
    alert("Ok, maybe next time.");
}