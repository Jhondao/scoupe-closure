// Global Scopre

var fruit = 'Apple'; //globla

function bestFruit(){
    console.log(fruit);
}

bestFruit();


// Asignamos pero no declaramos la variable, esto hace que la variable sea global y accedida desde afuera

function countries() {
    country = 'colombia'; //global
    console.log(country);
}

countries();
console.log(country);