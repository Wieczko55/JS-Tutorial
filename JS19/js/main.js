//JSON JS OBJECT NOTATION 

const myObj = 
{
  name: "Patryk",
  hobbies: ["eat", "sleep","code"],
  hello: function()
  {
    return "Hello!";
  }
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj.hello()); 
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj); //ten JSON konwertuje objekt w stringa
console.log(sendJSON);
console.log(typeof sendJSON);     
console.log(sendJSON.name);

const reciveJSON = JSON.parse(sendJSON);

console.log(reciveJSON);
console.log(typeof reciveJSON);  // ten stringa w objekt 