//switches


switch (Math.floor(Math.random() * 4) + 1)
{
    case 1:
        console.log(1);
        break;

    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    
    default:
        console.log("No match");
}

let playerOne = "scissors";
let computer = "rock";
let resultOfP1 = 0;
let resultOfComputer = 0;

switch (playerOne)
{
    case computer:
        console.log("Tie game!");
        resultOfComputer += 1;
        resultOfP1 += 1;
        break;
    case "rock":
        if(computer === "paper")
        {
            console.log("Compuer wins");
            resultOfComputer += 1;
        }
        else
        {
            console.log("playerOne wins");
            resultOfP1 += 1;
        }
        break;
        case "paper":
            if(computer === "scissors")
            {
                console.log("Compuer wins");
                resultOfComputer += 1;
            }
            else
            {
                console.log("playerOne wins");
                resultOfP1 += 1;
            }
            break;
        default:
            if(computer === "rock")
            {
                console.log("Compuer wins");
                resultOfComputer += 1;
            }
            else
            {
                console.log("playerOne wins");
                resultOfP1 += 1;
            }
            break;

}

console.log(resultOfComputer, resultOfP1)