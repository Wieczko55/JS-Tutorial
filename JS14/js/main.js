// var let const

//global scope

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc()
{
    var x = 7; // a var to fucntion scoped dlatego lepiej unikać stosowania var a zastąpić to const i letem
    let y = 12;  // const i let są to tzw block scoped
    const z = 15;
    {
        var x = 9;
        const z = 0.5;
        let y = 5;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

myFunc();


