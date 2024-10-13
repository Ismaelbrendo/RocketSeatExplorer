/* 
    Crie uma lista de pacientes

    Cada paciente deve ter:
    nome
    idade
    peso
    altura

    Escreva uma lista contendo o nome dos pacientes
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

let patientsNames = []
/*for (let index = 0; index < patients.length; index++) {
    patientsNames[index] = patients[index].name
}
*/ //forma de fazer com mais linhas usando for

for(let patient of patients) {
    patientsNames.push(patient.name)
}
alert(patientsNames)