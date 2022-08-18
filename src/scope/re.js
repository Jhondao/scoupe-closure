var firstName; //declaramos - Undefined 
firstName = 'Jhon'; //asignamos
console.log(firstName); //mostramos

var lastName = "David"; //declarando y asignando 
lastName = "Ana"; //se reasigna
console.log(lastName);

var secondName = 'David'; // declarando y asignando
var secondName = 'Ana'; // reasignando
console.log(secondName);


//LET 

let fruit = 'Apple'; // declarando y asignando
fruit = 'Kiwi'; // solo deja reasignar
console.log(fruit);


// CONST

const animal = 'dog'; //se declara y se asigna
// animal = 'cat';  // no de deja reasignando 
// const animal = 'Snake'; // no deja redeclarar
console.log(animal);


// SCOPE EN ARRAY
const vehicles = [];
vehicles.push("Toyota");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);