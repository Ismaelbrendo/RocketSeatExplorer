// for...in

let person = {
    name: 'Ismael',
    age: 32,
    city: 'Rio de Janeiro'
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}