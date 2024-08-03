//function expression
//function anonymous 

//parameters function
/*(const sum = function (number1, number2) {
    total = number1 + number2 //sem palavra chave pode existir no programa todo *NAO FAZER*
    return total //return faz com que ele saia pare o codigo e retorne o valor a frente (total)
}

let number1 = 4
let number2 = 3

console.log(`o primeiro digito é ${number1}`)
console.log(`o segundo digito é ${number2}`)
console.log(`a soma da ${sum(number1, number2)}`) */

//Função como liquidificador
function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'manga')

console.log(copo)