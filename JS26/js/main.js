// Fetch API requires a discussion of...
// Callback, Promises, Thenables, and Async/Await

//Callbacks

/*function firstFunction(parameters, callback)
{
    //do stuff
    callback();
}

// AKA "callback hell" 
firstFunction(para, function(){
    secondFunction(para, function(){
        thirdFunction(para, function(){
            
        })
    })
}) */

// Promises 
// 3 states: Pending, Fulfilled, Rejected

/* const myPromise = new Promise((resolve, reject) =>{
    const error = false; 
    if(!error)
    {
        resolve("Yes! resolved the promise!");
    }
    else
    {
        reject("No! rejected the promise.");
    }
});

console.log(myPromise);

myPromise
.then(value => {
    return value + 2;
})

.then(newValue => {
    console.log(newValue);
})

.catch(err => {
    console.error(err);
})

const myNextPromise = new Promise((resolve, reject) => {
    const error1 = false;
    setTimeout(function(){
        if(!error1)
        {
            resolve("Yes! resolved the promise!");
        }
        else
        {
            reject("No! rejected the promise.");
        }
    }, 2000);
});

myNextPromise.then(value => {
    console.log(value);
})

myPromise.then(value => {
    console.log(value);
})
*/

 /*const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending

console.log(users);

const myUsers = {
    userList: []
}

const myCoolFunction = async () =>
{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}
*/
//workflow function

const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })
    console.log(userEmailArray);
    postToWebPage(userEmailArray);
}
const postToWebPage = (data) =>{
    console.log(data);  
}

getAllUserEmails();

//myCoolFunction();

/* const anotherFunction = async () =>{
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunction();
console.log(myUsers.userList);

const users1 = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
        return response.json();
    })

    .then(chu =>{
        chu.forEach(user =>{
            console.log(user);
        })
    });
*/


    