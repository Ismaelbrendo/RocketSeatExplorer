/*
    Solicitar o nome do aluno e as 3 notas do bimestre
    calcular a media daquele aluno.

    Se o aluno passou, dar os parabens

    Se o aluno não passou, motivá-lo

    Em ambos os casos, mostre uma mensagem com o nome do aluno e sua media.
*/

let student = prompt ("Digite o nome do(a) aluno(a): ")

alert ("A seguir, você deve digitar as notas no formato real.")
    

let firstNote = prompt ("Digite a primeira nota do aluno: ")
let secondNote = prompt ("Digite a segunda nota do aluno: ")
let thirdNote = prompt ("Digite a terceira nota do aluno: ")

let average = (Number(firstNote) + Number(secondNote) + Number(thirdNote)) / 3
let averageFix = average.toFixed(1)

if (average >= 7) {
    alert ("Parabéns, " + student + "! Você passou com a média: " + averageFix)
} else {
    alert ("Infelizmente, " + student + "! Você não passou com a média: " + averageFix)
}

//next class: #164