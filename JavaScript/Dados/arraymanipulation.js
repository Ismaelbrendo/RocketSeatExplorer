// Manipulando array

// Contar elementos de um array

console.log(['a', 'b', 'c', 'd'].length)

// Transformar uma cadeia de caracteres em um elemento de um array

let word = "Corpo"
console.log(Array.from(word))

// Exercicios
let techs = ["html", "css", "javascript"]

//add a element in the end of to array
techs.push("react") //push add a new element in the end to array
//add a element in the begin of the array
techs.unshift("sql") //unshift add a new element in the beggin to array
// remove a element in the end of the array
techs.pop()  //pop remove a element in the end to array
//remove a element in the beginning of the array
techs.shift() //shift remove a element in the beggin to array

// take something elements in arary
//console.log(techs.slice(1, 3))!!!

// remove one or more itens in anything position in the array
//techs.splice(1, 1)

// search the position of the element in the array
let index = techs.indexOf('css')

console.log(index)