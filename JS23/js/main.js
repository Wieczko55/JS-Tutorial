/*window.alert("ok!");
alert(location);  //alert location zwróci adres strony
*/
const myArray = ['eat','sleep','code'];

const myObject = 
{
    name: "Patryk",
    hobbies: ['eat','sleep','code'],
    logName: function(){
        console.log(this.name);
    }
}

localStorage.setItem("myStore", JSON.stringify(myArray));
localStorage.setItem("myObject", JSON.stringify(myObject));
const key = localStorage.key(0);  //clear() lub removeItem dają ten sam efekt 
const mylocalData = JSON.parse(localStorage.getItem("myStore"));
const mylocalData1 = JSON.parse(localStorage.getItem("myObject"));
console.log(mylocalData);
console.log(mylocalData1) // te magazyny przechowują tylko dane w postaci stringów 
// za pomocą JSON-a najpierw zamieniłem wszystko na stringa a potem za pomocą JSON parse zamieniłem dane na obiekt
console.log(key);

//const storeLength = localStorage.lenght; 