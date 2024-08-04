// Separe texto que contem espacos, em uma nova array onde acda texto tem uma pocisao diferente do array. 
// depois transforme o array em  um texto e onde eram espacos coloque _

let phrase = 'Ninguem é de Ninguem, na vida tudo passa.'
let myArray = phrase.split(' ')
console.log(myArray)
let phraseUnderscore = myArray.join('_')
console.log(phraseUnderscore)