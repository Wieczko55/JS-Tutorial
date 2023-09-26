// Ternay Operator czylu skrócony zapis ifa

let soup = "Chicken Noodle Soup";
let reply = soup? "Yes, we have soup." : "Sorry, no soup today.";
console.log(reply);

let soup1 = "Chicken Noodle Soup";
let isCustomerBanned = true;

let soupAcces = isCustomerBanned     //program sprawdza czy klient nie jest na czarnej liście i jeśli nie jest a zupa jest dostępna to wydaje stosowny komunikat
? "Sorry, no soup for you!"
: soup
? `Yes, we have ${soup} today.`
: "Sorry, no soup today.";
console.log(soupAcces); 


let testScore = 79;
let myGrade = testScore > 89 
    ? "A"
    :testScore >= 79 
    ? "B"
    :testScore >= 69      //program porównuje mój wynik z test z kryteriami oceniania i wydaje stosowną ocenę na jej podstawie
    ? "C"
    :testScore >= 59 
    ? "D"
    : "F";

    console.log(`My test grade is a ${myGrade}.`);



    let playerOne = "scissors";
    let computer = "rock";

    let result = playerOne === computer 
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "computer wins!"
    : playerOne === "paper" && computer === "scissors"    //inny przykład kamień papier nożyce
    ? "computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins!" 
    : "playerOne wins!!" ;

    console.log(result);