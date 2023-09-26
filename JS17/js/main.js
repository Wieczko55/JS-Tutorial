const myObj = {name : "Patryk"}
console.log(myObj.name);


const anotherObject = 
{
  alive: true,
  age: 20,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: 
  {
    morning: "Coffee",
    afternoon: "Iced tea"
  },
  action: function()
  {
    return `Time for ${this.beverage.morning}`; // słowo this odwołuje się do obieku znaczy dosłownie ten / tu
  }
}
console.log(anotherObject.hobbies[0]);
console.log(anotherObject["alive"]);  //alternatywny sposób wywołania objektu z tego co widzę nie działa na tablicy
console.log(anotherObject.beverage.afternoon)
console.log(anotherObject.action());


const vehicle = {
  wheels: 4,
  engine: function(){
    return "Vrooom!!";
  }
}

const truck = Object.create(vehicle); //słowo create mówi że następny element będzie dziedziczył cechy tego
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //dziedziczenie 
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function()
{
  return "wooosh!!";
}
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function()
{
  return "Shhhhh...";
}
console.log(tesla.engine());






const band = {
  vocals: "Robert Plant",
  guitar: "Jimy Page",
  bass: "John Paul Jones",
  drums: "John Bonham"
};


//destructuring objects

const { guitar: myVariable, bass: myBass} = band;
console.log(myVariable, myBass);

function sings({ vocals })
{
  return `${vocals} sings!`;
}
console.log(sings(band)) // gdy biorę coś z objektu np do funkcji to trzeba pamietać o klamrowym nawiasie

//delete band.drums;
//console.log(band.hasOwnProperty("drums"));

//console.log(Object.keys(band));   //wyświetla tylko słowa klucze vocals , guitar itp
//console.log(Object.values(band)); //wyświetla wartość bez słów kluczowych

//for(let job in band){
//  console.log(`On ${job}, it's ${band[job]}!`);
//}

