//User input
alert("Hello world!");



let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);
let name1 = prompt("Please enter your name.");
if(name1)
{
    console.log(name1.length);
    console.log(name1.trim().length);
    console.log(name1.trim());
    console.log(name1 ?? "You didn't enter your name. Please do it");
}
else
{
    console.log("You didn't enter your name.")
}
