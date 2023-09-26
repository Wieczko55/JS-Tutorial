//menu

"use strict";
//alternatywny sposób mogę też zaimportować cały plik guitar.js albo bardziej wszystko co w nim jest do main.js
import * as Guitars from "./guitar.js";

/* przy imporcie wszystkiego musimy inaczej użyć console.loga
np console.log(Guitars.playGuitar()); 
jeśli w exporcie było słowo defaul to będzie tak
 console.log(gutars.default())  dziwne i nie można zmieniać nazw lepiej nie używać default*/

import playGuitar from "./guitar.js";
import { shredding as shred, plucking as fingerpicking } from "./guitar.js";
console.log(playGuitar());  // zimportowałem funkcje z innego pliku guitar.js i ją wywołałem
console.log(shred());
console.log(fingerpicking()); /*mogę zmieniać nazwy funkcji przy imporcie przy pomocy
as (nazwa) mogę też zrobić to przy eksporcie ale przy imporcie jest to wygodniejsze */


import User from "./user.js";

const me = new User("email@email.com", "Patryk")
console.log(me);            //zimportowałem clasę i dodałem do niej moje dane i ją wywołałem najpierw samą klasę a potem funkcję która się w niej znajduje
console.log(me.gretting());