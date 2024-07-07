// function greet(person){
//     console.log(person);
// }
// greet('halumama');

// const laptoo={price:120000,name:'lenovo',memory:'16gb'};
// console.log(laptoo);

function greet(greetHandler, name) {
    greetHandler(name);
}

function greetHandler(name) {
    console.log('shalarputghumTheikka uth', name);
}

greet(greetHandler, 'lekhoinnaa');
