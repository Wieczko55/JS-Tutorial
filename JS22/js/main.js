// Event listeners


// Syntax: addEventlistener("event np: click hover co tam chcemy", function, useCapture)


/* const doSomethiing = () =>
{
    alert("doing something");
}
*/

/* h2.addEventListener("click", function()   //mogę stworzyć zezwnętrzną funkcję którą wywołam albo dodać funkcje tutaj lokalnie 
{
    prompt("testing event");
    h2.textContent = "zmiana napisu";
}, false);

h2.removeEventListener("click", function()
{
    h2.textContent = "powrót";      //usówa event
});


h2.addEventListener("click", (event) =>{           //EVENT NA KLIKNIĘCIE 
    console.log(event.target);
    event.target.textContent = "Clicked"
});
*/
document.addEventListener("readystatechange", (eve) =>{
    if(eve.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () =>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
    view.style.display = "flex"
    console.log(div);

   /* const chuj = function()
    {
        h2.textContent = "Clicked";
        h2.style.color = "black";
    }
    */
    view.addEventListener(
        "click", 
        (event) =>{  //stopPropagation()  
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    },
    
    );

    div.addEventListener("click", (event) =>{
      //  div.style.backgroundColor = "crimson";
      div.classList.toggle("blue");
      div.classList.toggle("black");
      h2.classList.toggle("black1");
    });

  //  h2.addEventListener("click", chuj);
    h2.addEventListener(
        "click", 
        (event) => { 
        const myText = h2.textContent;
        myText === "My 2nd View" 
        ? (h2.textContent = "Clicked")
        : (h2.textContent = "My 2nd View");

        h2.classList.toggle("black1");
    },
    false
    )
}