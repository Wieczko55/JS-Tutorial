// Functions


console.log("Patryk".toLowerCase());
console.log(Math.floor(Math.random() * 10 + 1));

function sum(num1, num2)
{
    if(num2 === undefined)
    {
        return num1 + 0;
    }
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}

console.log(sum(2));


function getUserNameFromEmail(email)
{
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("Patryk0327@interia.pl"));


const toProperCase = (name) =>
{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("pAtRYk"))