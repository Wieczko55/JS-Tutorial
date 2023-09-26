// Loops

let myNumber = 52;
do
{
    //code
    console.log(myNumber);
    myNumber += 2;
} while(myNumber <= 50);

//don't create an endless loop  

do
{
    console.log(myNumber);
}while(myNumber < 50);

let name = "patryk"
for(let i = 0; i <= name.length; i++)
{
    console.log(name.charAt(i));
}

let name1 = "Patryk"
let counter = 0;
let myLetter;
while (counter <= 3)               //pętla która urywa się na literce którą podam w ifie
{
    myLetter = name1[counter];
    console.log(myLetter);
    if(counter === 1)
    {
        counter += 1;
        continue;
    }
    if(myLetter === "t") break;
    counter ++;
}
