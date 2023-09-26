// arrays tablice

const myArray = [];

// add elements to an array 

myArray[0] = "Patryk";
myArray[1] = 1001;
myArray[2] = false;

console.log(myArray[0]);

const myArray1 = [2, 15 ,6 ,2];

console.log(myArray1[1]);

// refet to an array

console.log(myArray, myArray1);
console.log(myArray.length);

console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

myArray.push("school"); //dodaję wartość na końcu tablicy
myArray.unshift(25); //dodaje wartości na początku tablicy

console.log(myArray);

const lastItem = myArray.pop();

console.log(lastItem); //myarray.pop() wydupcza 1 ostatni element z tablicy
//jednak gdy damy tą wartość pod zmienną to wtedy widzimy ten element który został odrzucony

console.log(myArray[0]);
console.log(myArray[5]);

myArray.splice(0, 1, 255); // metoda splice kasuje elementy z tablicy i 3 wartość jest opcjonalna może nam zastąpić to co było

console.log(myArray);


const myArrayA = ['A', 'B', 'C'];
const myArrayB = ['D', 'E', 'F'];

// const newArray1 = [...myArrayA, ...myArrayB] inny podobno lepszy sposób łączenia tablic

// myArrayA.concat(myArrayB); łączy tablice

// console.log(newArray1);

const alpha = [myArrayA, myArrayB];


console.log(alpha[0][0]);

// const newArray = myArray2.slice(2,5);
// console.log(newArray);   

// myArray2.reverse()  odwraca

// console.log(myArray2);

// const newString = myArray2.join();    join sprawia że zamieniamy wszystkie wartości na stringa 

// const nowaArea = newString.split(",");

// console.log(nowaArea); 