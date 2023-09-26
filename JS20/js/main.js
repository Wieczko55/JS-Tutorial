"use strict";


const makeError = () =>
{
  let i = 1;
  while(i <= 4)
  {
  try
  {
    if(i % 2 !== 0)
    {
    throw new customError("卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐 Szach mat kurwo");
    }
    console.log("Even nukber!");
  } catch(err)
  {
    console.error(err.stack);  //console.warn/error wydupcza błąd i nie wywala całej strony tylko fragment np tutaj funkcji w którym on się znajduje
    // err.name = nazwa błędu / message = przekaz co zrobiliśmy źle / stack = wszystko
  } 
  finally
    {
     console.log("...finally");
     i++;
    }
  }
}

makeError();


function customError(message)
{
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}

//console.log(err.message);
 //   console.log(err.name);