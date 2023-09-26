//Higher Order Functions

// higher order functions is a function that does at least one of the following: 
// ** takes one or more functions as an argument (parameter)
// ** returns a functions as the result


//forEach()

import { posts } from "./posts.js";

posts.forEach((post) => {  // to co w nawiasach to nazywam jak chce a foreach iteruje
    console.log(post);

});

console.clear();

const filterdPosts = posts.filter(post =>{
    return post.userId === 10;
}) // pokazuje tylko te obiekty gdzie userID jest równe 2 a jest ich 10 na każde id
console.log(filterdPosts);
// znów zamiast słowa post mogę sobie wpisać co chce

const mappedPosts = filterdPosts.map(post =>{
    return post.id * 10;
});
console.log(mappedPosts);
//tak jak wspomniałem pod każdym userId jest 10 zwykłych id 
//więc skoro mappedPosts ma zwracać post.id * 10 to w przypadku userId 2
//będzie to 11 12 ... 20 czyli * 10 110 120 ... 200 

const reducePosts = mappedPosts.reduce((sum, post) =>{
    return sum + post;
});
console.log(reducePosts);