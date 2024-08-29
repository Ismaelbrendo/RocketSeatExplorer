/* Capture 2 numbers ans make the operations 
addition, subtract, multiply, divide and rest divide

E para cada operacao mostrar um alerta com o reaultado
*/

let numberOne = prompt("Digite o primeiro valor: ")
let numberTwo = prompt("Digite o segundo valor: ")


numberOne = Number(numberOne)
numberTwo = Number(numberTwo)


const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mul = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + mul)
alert("Divisão: " + div)
alert("Resto da divisão: " + rest)

// Validar se os valores são numeros
