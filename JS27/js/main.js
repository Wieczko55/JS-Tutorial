document.getElementById("phoneNum").addEventListener("input",function(){
    const regex = /^(\+48)?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{3})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const phone = input.value; 
    const found = regex.test(phone);
    if (!found && phone.length)
    {
        input.classList.add("invalid");
        format.classList.add("block");
    }
    else{
        input.classList.remove("invalid");
        format.classList.remove("block");
    }
})

document.getElementById("phoneForm").addEventListener("submit", (event) =>{
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = /[()-. ]/g; //po wciśnięciu entera w formularzu usuwa znaki takie jak -. lub spacja i zwraca same numerki
    const savedPhoneNum = input.value.replaceAll(regex, "");
    console.log(savedPhoneNum);
})

document.getElementById("textForm").addEventListener("submit", (event) =>{
    event.preventDefault();
    const input = document.getElementById("textEntry");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, " ").trim();
    console.log(newText);
    const encodedInputText = encodeURI(input.value);
    const encodedCleanText = encodeURI(newText);
    console.log(encodedInputText);
    console.log(encodedCleanText);
    //dzięki cleanText redukujemy spacje co pozwoli na mniejszą ilośc miejsca którą 
    //zajmuje nasz skrypt i cały program
})
//jeśli w inpucie mamy 2 lub więce spacji funkcja sprawia że usuwane są znaki białe i mamy max 1 spacje np 
// Kansas       Kansas zostanie zredukowane do Kansas Kansas