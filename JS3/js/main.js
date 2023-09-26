// Strings
const myVariable = "mathematics";

//The length property
console.log(myVariable.length);
console.log("word".length);
//string methods
console.log(myVariable.charAt(6));    //litera na danym miejscu
console.log(myVariable.indexOf("at")); //podany fragment tekstu dostajemy info odnośnie gdzie jest
console.log(myVariable.lastIndexOf("t")); //info odnośnie podanego fragmentu ale tam gdzie występuje ostatni raz
console.log(myVariable.slice(5,8)); // ucina fragment od danego indexu do drugiego podanego
console.log(myVariable.slice(5)); // od 5 litery do końca
console.log(myVariable.slice(5,6));
console.log(myVariable.toUpperCase());
console.log(myVariable.includes("ded")); //czy zawiera
console.log(myVariable.split("t"))
console.log("John,Joe,Dave".split(",")) //rodziela 
