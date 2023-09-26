// ify if Conditionals: if Statments
let crackers = false;
let customerIsBanned = true;
let soup = "chocek noodle soup";
let reply;
if(customerIsBanned)
{
    reply = "No soup for you!";
}
else if(soup && crackers)
{
    reply = `Here's your order of ${soup} & crackers`;
}
else if(soup)
{
    reply = `Here's your order of ${soup}`;
}
else if(!soup)
{
    reply = `Sorry, we're out of soup`;
}
console.log(reply);


let testScore = 49;
let collegeStudent = true;
let grade;

if(testScore >= 90)
{
    grade = "A";
}
else if(testScore >=75 && testScore <= 89)
{
    grade = "B";
}
else if(testScore >=60 && testScore <= 74)
{
    grade = "C";
}
else if(testScore >=40 && testScore <= 59)
{
    grade = "D";
}
else
{
    if(collegeStudent)
    {
        grade = "U";
    }
    else
    {
        grade = "F";
    }    
}
console.log(grade);

// Decision tree!

if(playerOne === computer)
{
    //tie game
}
else if(playerOne === "rock")
{
    if(computer === "paper")
    {
        //computer wins
    }
    else
    {
        //playerOne wins
    }
}
else if(playerOne === "paper")
{
    if(computer === "scissors")
}