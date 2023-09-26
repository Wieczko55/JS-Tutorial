//Numbers

const myNumber = 42;

const myFloat = 42.15;

const myString = "42.321";

console.log(myFloat);

console.log(myNumber === myString);

console.log(Number(myString) === myNumber);
// zamieniłem string na numer i porównanłem 42 === 42 true

console.log(String(myNumber) === myString);


console.log(Number.parseFloat(myString)); // konwersja stringa na numer a potem na liczbe przecinkową

console.log(Number.isInteger(myFloat)); // spradza czy zmienna to liczba całkowita

console.log(myFloat.toFixed(1)) //określamy ile cyfr po przecinku ma mieć nasza liczba

//parseint działą tak samo 

console.log(typeof Number.parseFloat(myFloat.toFixed(1)));
console.log(Number.parseFloat(myFloat.toFixed(1)));
console.log(typeof myFloat.toFixed(2));

console.log(isNaN(myNumber));