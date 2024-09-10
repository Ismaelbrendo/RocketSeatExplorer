/* 
    Crie uma lista de pacientes, descubra o imc de cada um deles e imprima

    "Paciente X possui o imc de: Y"
*/

const patients = [
    {
        name: "Ismael",
        age: 19,
        weight: 90,
        height: 171,
    },
    {
        name: "Andre",
        age: 25,
        weight: 77,
        height: 165,
    },
    {
        name: "Maria",
        age: 30,
        weight: 90,
        height: 175,
    },
    {
        name: "Lewandowiski",
        age: 35,
        weight: 80,
        height: 177,
    },
    
]

function printIMC(patient) {
    return `
        Paciente ${patient.name} possui o IMC de: 
        ${(
            patient.weight / ((patient.height / 100) ** 2)).toFixed(2) // ** = operador exponencial | Dividindo por 100 eu movo a virgula do height
        }`

}

for (let patient of patients) {
    let IMCmessage = printIMC(patient)
    alert(IMCmessage)
}

//fim alg e logic js
