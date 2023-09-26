// DOM -  Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2"); //tutaj dajemy hasha lub kropkę w zależności czy klasa czy id 
console.log(view2);
view1.style.display = "flex";          //zmiana cssa 
view2.style.display = "none";

const views =  document.getElementsByClassName("view");  //jak wywołujemy klasę / id to trzeba w "" 
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);        //pokazuje wszystkie divy w danej klasie

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(3n)"); //pokazuje co 3 diva 
console.log(evenDivs);

for(let i = 0; i < evenDivs.length; i++)   //iteruje przez te elementy 
{
  evenDivs[i].style.backgroundColor = "green";  //zmiueniam cssa tych divów w pętli czyli z 12 zmienię 3-6-9-12 
 // evenDivs[i].style.width = "160px";
  // evenDivs[i].style.height = "160px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";

const navBar = document.querySelector("nav");
navBar.innerHTML = `<h1>Hello!</h1> <p>This should align right.`;

console.log(navBar);
navBar.style.justifyContent = "space-evenly";



console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextElementSibling); //bliźniak czyli kolejny element po wybranym im więcej .nextelementsibling tym dalszy element wybiorę
console.log(evenDivs[0].previousElementSibling); //poprzedni 

const tak = view1.querySelector("div:nth-child(4)"); //wybieram 4 dziecko czyli diva z numerkiem 4 i zmieniam jego zawartość
tak.textContent = "1!!";
// tak.innerHTML = "121"; // dwa alternatywne sposby zmiany zawartości danego
tak.style.color = "crimson";
console.log(tak);

view1.style.display = "flex";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";
/*
while(view2.lastChild)
{
  view2.lastChild.remove();
}

const createDivs = (parent, iter) =>
{
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";                      //funkcja tworząca nowego diva
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);  //append pozwala dodawać nowe 1 po drugim w odpowiedniej koeljnsci
}
createDivs(view2, 10);
createDivs(view2, 11);  


for(let i = 1; i<= 12; i++)
{
  createDivs(view2, i);        //za pomocą pętli mogę od razu stworzyć w tym przypadku 12 divów
}
*/