function greet(greetHandler, name) {
    greetHandler(name);
}

function greetHandler(name) {
    console.log('shalarputghumTheikka uth', name);
}
function greetRespect(name){
    console.log('hello,good morning!',name);
}

greet(greetHandler, 'lekhoinnaa');
greet(greetHandler,'tommy');
greet(greetRespect,'lekhon');