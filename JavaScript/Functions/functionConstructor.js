/* 
    Function() constructor

    * Expressao new
    * Cria um novo objeto 
    * this keyword
*/

function Person(name){
    this.name = name
    this.age = 30
    this.walk = function(){
        return this.name + (' esta andando')
    }
}

const john = new Person("John")
const ismael = new Person("Ismael")
console.log(ismael.walk())
console.log(john.walk())
